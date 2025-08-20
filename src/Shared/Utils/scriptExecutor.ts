interface ScriptInfo {
  src?: string;
  content: string;
  attributes: { [key: string]: string };
}

interface ExecutionResult {
  success: boolean;
  error?: string;
  loadedScripts: string[];
}

class ScriptExecutor {
  private loadedScripts = new Set<string>();
  private scriptInstances = new Map<string, HTMLScriptElement>();
  private executedScripts = new Set<string>();
  private currentContainer: HTMLElement | null = null;

  /**
   * Execute scripts from HTML content with enhanced error handling and deduplication
   */
  async executeScriptsFromHTML(
    htmlContent: string,
    containerElement: HTMLElement
  ): Promise<ExecutionResult> {
    try {
      // Check if we're executing for the same container with same content
      const contentHash = this.generateContentHash(htmlContent);
      const containerId = this.getContainerId(containerElement);

      if (
        this.currentContainer === containerElement &&
        this.executedScripts.has(contentHash)
      ) {
        console.log(
          'Scripts already executed for this container and content, skipping...'
        );
        return {
          success: true,
          loadedScripts: Array.from(this.loadedScripts),
          error: undefined,
        };
      }

      // Clear previous execution tracking for this container
      this.executedScripts.clear();
      this.currentContainer = containerElement;

      // Clear previous content
      containerElement.innerHTML = '';

      // Parse HTML content
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = htmlContent;

      // Extract scripts
      const scripts = tempDiv.querySelectorAll('script');
      const scriptElements: ScriptInfo[] = [];

      scripts.forEach(script => {
        const scriptInfo: ScriptInfo = {
          content: script.textContent || '',
          attributes: {},
        };

        // Extract script attributes
        Array.from(script.attributes).forEach(attr => {
          if (attr.name === 'src') {
            scriptInfo.src = attr.value;
          }
          scriptInfo.attributes[attr.name] = attr.value;
        });

        scriptElements.push(scriptInfo);

        // Remove script from temp div
        script.remove();
      });

      // Render HTML content first (without scripts)
      containerElement.appendChild(tempDiv);

      // Separate external and inline scripts
      const externalScripts = scriptElements.filter(script => script.src);
      const inlineScripts = scriptElements.filter(script => !script.src);

      // Load external scripts first
      if (externalScripts.length > 0) {
        await this.loadExternalScripts(externalScripts);
      }

      // Execute inline scripts
      const inlineResult = this.executeInlineScripts(
        inlineScripts,
        containerElement
      );

      // Mark as executed
      this.executedScripts.add(contentHash);
      this.currentContainer = containerElement;

      return {
        success: true,
        loadedScripts: Array.from(this.loadedScripts),
        error: inlineResult.error,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        loadedScripts: Array.from(this.loadedScripts),
      };
    }
  }

  /**
   * Load external scripts with deduplication and error handling
   */
  private async loadExternalScripts(scripts: ScriptInfo[]): Promise<void> {
    const loadPromises = scripts.map(script =>
      this.loadSingleExternalScript(script)
    );
    await Promise.allSettled(loadPromises);
  }

  /**
   * Load a single external script
   */
  private loadSingleExternalScript(scriptInfo: ScriptInfo): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!scriptInfo.src) {
        resolve();
        return;
      }

      // Check if script already loaded
      if (this.loadedScripts.has(scriptInfo.src)) {
        resolve();
        return;
      }

      // Remove previous instance if exists
      if (this.scriptInstances.has(scriptInfo.src)) {
        const oldScript = this.scriptInstances.get(scriptInfo.src);
        if (oldScript && oldScript.parentNode) {
          oldScript.parentNode.removeChild(oldScript);
        }
      }

      const script = document.createElement('script');

      // Set attributes
      Object.entries(scriptInfo.attributes).forEach(([key, value]) => {
        script.setAttribute(key, value);
      });

      // Set event handlers
      script.onload = () => {
        this.loadedScripts.add(scriptInfo.src!);
        this.scriptInstances.set(scriptInfo.src!, script);
        resolve();
      };

      script.onerror = () => {
        console.warn(`Failed to load script: ${scriptInfo.src}`);
        resolve(); // Continue execution even if script fails
      };

      // Add to document head
      document.head.appendChild(script);
    });
  }

  /**
   * Execute inline scripts with error handling
   */
  private executeInlineScripts(
    scripts: ScriptInfo[],
    container: HTMLElement
  ): { error?: string } {
    let lastError: string | undefined;

    scripts.forEach((scriptInfo, index) => {
      try {
        // Create new script element to avoid conflicts
        const script = document.createElement('script');

        // Set attributes
        Object.entries(scriptInfo.attributes).forEach(([key, value]) => {
          script.setAttribute(key, value);
        });

        // Wrap script content in a function to avoid variable conflicts
        const wrappedContent = this.wrapScriptContent(
          scriptInfo.content,
          index
        );
        script.textContent = wrappedContent;

        // Append to container
        container.appendChild(script);
      } catch (error) {
        lastError = `Script ${index + 1} execution failed: ${error instanceof Error ? error.message : 'Unknown error'}`;
        console.error(lastError);
      }
    });

    return { error: lastError };
  }

  /**
   * Wrap script content to avoid variable conflicts
   */
  private wrapScriptContent(content: string, index: number): string {
    // If content is empty, return empty string
    if (!content.trim()) return '';

    // Check if content already has function wrapper
    if (content.includes('function') || content.includes('=>')) {
      return content;
    }

    // Wrap in IIFE to isolate variables
    return `
      (function() {
        try {
          ${content}
        } catch (e) {
          console.warn('Script execution error:', e);
        }
      })();
    `;
  }

  /**
   * Clean up loaded scripts and instances
   */
  cleanup(): void {
    // Remove script instances from DOM
    this.scriptInstances.forEach(script => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    });

    // Clear collections
    this.scriptInstances.clear();
    this.loadedScripts.clear();
    this.executedScripts.clear();
    this.currentContainer = null;
  }

  /**
   * Check if a script is already loaded
   */
  isScriptLoaded(src: string): boolean {
    return this.loadedScripts.has(src);
  }

  /**
   * Get count of loaded scripts
   */
  getLoadedScriptCount(): number {
    return this.loadedScripts.size;
  }

  /**
   * Generate a hash for content to prevent re-execution
   */
  private generateContentHash(content: string): string {
    let hash = 0;
    if (content.length === 0) return hash.toString();

    for (let i = 0; i < content.length; i++) {
      const char = content.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return hash.toString();
  }

  /**
   * Get a unique identifier for the container element
   */
  private getContainerId(element: HTMLElement): string {
    if (element.id) return element.id;
    if (element.className) return element.className;
    return element.tagName + '_' + Math.random().toString(36).substr(2, 9);
  }
}

// Export singleton instance
export const scriptExecutor = new ScriptExecutor();

// Export utility functions
export const executeScriptsFromHTML = (
  htmlContent: string,
  containerElement: HTMLElement
) => scriptExecutor.executeScriptsFromHTML(htmlContent, containerElement);

export const cleanupScripts = () => scriptExecutor.cleanup();
export const isScriptLoaded = (src: string) =>
  scriptExecutor.isScriptLoaded(src);
export const getLoadedScriptCount = () => scriptExecutor.getLoadedScriptCount();
