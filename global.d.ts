import type React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "chat-bot": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
} 