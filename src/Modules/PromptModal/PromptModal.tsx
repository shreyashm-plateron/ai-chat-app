import styles from './PromptModal.module.scss';
import AssistYou from '@/Components/AssistYou/AssistYou';
import PageSizeButton from '@/Components/PageSizeButton/PageSizeButton';
import CollapseIcon from '@/Assets/Icons/Collapse';
import EgPromptCard from '@/Components/EgPromptCard/EgPromptCard';
import PromptArea from '@/Components/PromptArea/PromptArea';
import PromptedText from '@/Components/PromptedText/PromptedText';
import GeneratingResponse from '@/Components/GeneratingResponse/GeneratingResponse';
import { ResponseComponent } from '@/Components/ResponseComponent/ResponseComponent';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import bgFillerImage from '@/Assets/Images/BG-filler.png';
import ellipseImage from '@/Assets/Images/Ellipse 1.png';
import ellipse5Image from '@/Assets/Images/Ellipse 5.png';

interface PromptModalProps {
  onClose: () => void;
}

export default function PromptModal({ onClose }: PromptModalProps) {
  const [showEgPrompts, setShowEgPrompts] = useState(true);
  const [promptText, setPromptText] = useState('');
  const [submittedPrompts, setSubmittedPrompts] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState<{
    html: string;
    text: string;
  } | null>(null);
  const conversationRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new content is added
  useEffect(() => {
    if (conversationRef.current) {
      conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
    }
  }, [submittedPrompts, isLoading]);

  const handlePromptCardClick = (text: string) => {
    setPromptText(text);
    setShowEgPrompts(false);
  };

  const handlePromptAreaClick = () => {
    setShowEgPrompts(false);
  };

  const handlePromptChange = (text: string) => {
    setPromptText(text);
  };

  const handlePromptSubmit = (text: string) => {
    if (text.trim()) {
      setSubmittedPrompts(prev => [...prev, text.trim()]);
      setPromptText('');
      setShowEgPrompts(false);
      setIsLoading(true);

      // Simulate API call - replace with actual API call
      setTimeout(() => {
        setIsLoading(false);
        // Simulate response data - replace with actual API response
        setResponseData({
          html: "<!DOCTYPE html>\n<html>\n<head>\n    <script src=\"https://cdn.jsdelivr.net/npm/chart.js\"></script>\n    <style>\n        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 20px; background: #f8f9fa; }\n        .container { max-width: 1200px; margin: 0 auto; background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }\n        .header { text-align: center; margin-bottom: 30px; }\n        .chart-container { position: relative; height: 400px; margin: 30px 0; }\n        .metrics-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 30px 0; }\n        .metric-card { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px; text-align: center; }\n        .metric-value { font-size: 24px; font-weight: bold; margin-bottom: 5px; }\n        .metric-label { font-size: 14px; opacity: 0.9; }\n        .insights { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-top: 20px; }\n        .insight-item { margin: 10px 0; padding: 10px; background: white; border-left: 4px solid #667eea; }\n    </style>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\">\n            <h1>📈 Sales Trend Analysis</h1>\n            <p>Daily Performance: July 21-24, 2025</p>\n        </div>\n        \n        <div class=\"metrics-grid\">\n            <div class=\"metric-card\">\n                <div class=\"metric-value\">$83,717.68</div>\n                <div class=\"metric-label\">Total Sales</div>\n            </div>\n            <div class=\"metric-card\">\n                <div class=\"metric-value\">295</div>\n                <div class=\"metric-label\">Total Orders</div>\n            </div>\n            <div class=\"metric-card\">\n                <div class=\"metric-value\">$283.79</div>\n                <div class=\"metric-label\">Avg Order Value</div>\n            </div>\n        </div>\n        \n        <div class=\"chart-container\">\n            <canvas id=\"salesChart\"></canvas>\n        </div>\n        \n        <div class=\"insights\">\n            <h3>📊 Key Insights</h3>\n            <div class=\"insight-item\">\n                <strong>Peak Performance:</strong> July 22 achieved highest sales at $23,924.01\n            </div>\n            <div class=\"insight-item\">\n                <strong>Mid-week Dip:</strong> July 23 showed 36% decrease in sales volume\n            </div>\n            <div class=\"insight-item\">\n                <strong>AOV Growth:</strong> Average order value increased 33% from $242.29 to $322.66\n            </div>\n            <div class=\"insight-item\">\n                <strong>Recovery Trend:</strong> Sales recovering on July 24 with higher-value orders\n            </div>\n        </div>\n    </div>\n    \n    <script>\n        const ctx = document.getElementById('salesChart').getContext('2d');\n        new Chart(ctx, {\n            type: 'line',\n            data: {\n                labels: ['Jul 21', 'Jul 22', 'Jul 23', 'Jul 24'],\n                datasets: [{\n                    label: 'Total Sales ($)',\n                    data: [22533.30, 23924.01, 15319.18, 21941.19],\n                    borderColor: '#667eea',\n                    backgroundColor: 'rgba(102, 126, 234, 0.1)',\n                    tension: 0.4,\n                    fill: true,\n                    yAxisID: 'y'\n                }, {\n                    label: 'Order Count',\n                    data: [93, 86, 48, 68],\n                    borderColor: '#f093fb',\n                    backgroundColor: 'rgba(240, 147, 251, 0.1)',\n                    tension: 0.4,\n                    yAxisID: 'y1'\n                }, {\n                    label: 'Avg Order Value ($)',\n                    data: [242.29, 278.19, 319.15, 322.66],\n                    borderColor: '#4facfe',\n                    backgroundColor: 'rgba(79, 172, 254, 0.1)',\n                    tension: 0.4,\n                    yAxisID: 'y2'\n                }]\n            },\n            options: {\n                responsive: true,\n                maintainAspectRatio: false,\n                plugins: {\n                    title: {\n                        display: true,\n                        text: 'Sales Performance Trends'\n                    },\n                    legend: {\n                        position: 'top'\n                    }\n                },\n                scales: {\n                    y: {\n                        type: 'linear',\n                        display: true,\n                        position: 'left',\n                        title: { display: true, text: 'Sales ($)' }\n                    },\n                    y1: {\n                        type: 'linear',\n                        display: true,\n                        position: 'right',\n                        title: { display: true, text: 'Orders' },\n                        grid: { drawOnChartArea: false }\n                    },\n                    y2: {\n                        type: 'linear',\n                        display: false,\n                        position: 'right'\n                    }\n                }\n            }\n        });\n    </script>\n</body>\n</html>",
          text: '# Sales Trend Analysis - Line Chart\n\n## Overview\nSales performance from July 21-24, 2025 showing daily trends across key metrics.\n\n## Key Metrics\n\n| Date | Total Sales | Orders | Avg Order Value |\n|------|-------------|--------|-----------------|\n| Jul 21 | $22,533.30 | 93 | $242.29 |\n| Jul 22 | $23,924.01 | 86 | $278.19 |\n| Jul 23 | $15,319.18 | 48 | $319.15 |\n| Jul 24 | $21,941.19 | 68 | $322.66 |\n\n## Key Insights\n\n📈 **Total Sales**: Peak on July 22 ($23,924), significant dip on July 23 ($15,319)\n\n📊 **Order Volume**: Highest on July 21 (93 orders), lowest on July 23 (48 orders)\n\n💰 **Average Order Value**: Steady increase from $242.29 to $322.66 (+33% growth)\n\n## Notable Patterns\n- **Mid-week dip**: July 23 shows lower sales and order volume\n- **AOV growth**: Consistent upward trend in average order value\n- **Recovery trend**: Sales rebounding on July 24 despite lower order count',
        });
      }, 10000);
    }
  };

  return (
    <div className={styles['modal-overlay']}>
      <div
        className={styles['modal-content']}
        onClick={e => e.stopPropagation()}
      >
        <div className={styles['modal-buttons']}>
          <PageSizeButton icon={<CollapseIcon />} />
          <PageSizeButton onClick={onClose} />
        </div>
        {!submittedPrompts.length && (
          <div className={styles['modal-bg-image']}>
            <Image
              src={bgFillerImage}
              alt="Background filler"
              width={800}
              height={357}
              className={styles['bg-filler-image']}
            />
          </div>
        )}
        {!submittedPrompts.length && (
          <div className={styles['modal-content-assist-you-container']}>
            <div className={styles['modal-content-assist-you']}>
              <AssistYou />
            </div>
            <div className={styles['modal-content-good-afternoon']}>
              Good Afternoon, Ayush
            </div>
            <div className={styles['modal-content-how-can-i-assist-you']}>
              How can I{' '}
              <span
                className={styles['modal-content-how-can-i-assist-you-span']}
              >
                assist you today?
              </span>
            </div>
          </div>
        )}
        {!submittedPrompts.length && showEgPrompts && (
          <div className={styles['eg-prompt-card-container-row']}>
            <EgPromptCard
              text="Show me the sales trend for this week vs last week."
              onClick={() =>
                handlePromptCardClick(
                  'Show me the sales trend for this week vs last week.'
                )
              }
            />
            <EgPromptCard
              text="Generate a summary of customer feedback from Q4."
              onClick={() =>
                handlePromptCardClick(
                  'Generate a summary of customer feedback from Q4.'
                )
              }
            />
            <EgPromptCard
              text="Create a budget forecast for the upcoming quarter."
              onClick={() =>
                handlePromptCardClick(
                  'Create a budget forecast for the upcoming quarter.'
                )
              }
            />
          </div>
        )}
        <div className={styles['conversation-container']} ref={conversationRef}>
          {submittedPrompts.length > 0 && (
            <div className={styles['submitted-prompts-container']}>
              {submittedPrompts.map((prompt, index) => (
                <PromptedText key={index} text={prompt} />
              ))}
            </div>
          )}
          {isLoading && (
            <div className={styles['generating-response-container']}>
              <GeneratingResponse />
            </div>
          )}
          {!isLoading && submittedPrompts.length > 0 && responseData && (
            <div className={styles['response-component-container']}>
              <ResponseComponent
                htmlContent={responseData.html}
                textContent={responseData.text}
              />
            </div>
          )}
        </div>
        <div className={styles['footer-container']}>
          <div className={styles['ellipse-background']}>
            <Image
              src={ellipseImage}
              alt="Ellipse background"
              width={800}
              height={400}
              className={styles['ellipse-bg-image']}
            />
          </div>
          <div className={styles['ellipse5-background']}>
            <Image
              src={ellipse5Image}
              alt="Ellipse 5 background"
              width={604}
              height={273}
              className={styles['ellipse5-bg-image']}
            />
          </div>
          <div className={styles['prompt-area-box']}>
            <PromptArea
              value={promptText}
              onChange={handlePromptChange}
              onClick={handlePromptAreaClick}
              onSubmit={handlePromptSubmit}
              isLoading={isLoading}
            />
          </div>
          <div className={styles['footer-container-text']}>
            AI can make mistakes. Please check responses thoroughly
          </div>
        </div>
      </div>
    </div>
  );
}
