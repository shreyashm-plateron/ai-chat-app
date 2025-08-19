import styles from './ResponseComponent.module.scss';
import ThumbsUpIcon from '../../Assets/Icons/ThumbsUp';
import ThumbsDownIcon from '../../Assets/Icons/ThumbsDown';
import RetryIcon from '../../Assets/Icons/Retry';
import AiIconWhite from '../../Assets/Icons/AiIconWhite';
import { useEffect, useRef } from 'react';
import {
  executeScriptsFromHTML,
  cleanupScripts,
} from '../../Shared/Utils/scriptExecutor';
import MarkdownRenderer from '../../Shared/Utils/markdownRenderer';

interface ResponseComponentProps {
  htmlContent?: string;
  textContent?: string;
}

export const ResponseComponent = ({
  htmlContent = "Here's the comparison of your sales for today Aug 11, 2025 vs last week's equivalent Aug 04, 2025. You can go to the reports section directly and get more details on your sales trends.",
  textContent = "# Sales Trend Analysis: This Week vs Last Month\n\n## 📊 Key Performance Metrics\n\n| Metric | This Week | Last Month | Change |\n|--------|-----------|------------|---------|\n| **Total Sales** | $67,188.24 | $3.99 × 10²⁵ | ⚠️ Data Anomaly |\n| **Total Orders** | 35 | 989 | -96.5% |\n| **Active Days** | 3 | 25 | - |\n| **Avg Daily Sales** | $22,396.08 | $1.60 × 10²⁴ | ⚠️ Data Anomaly |\n\n## 🔍 Analysis Summary\n\n### Current Week Performance\n- **Sales Volume**: $67,188.24 across 35 orders\n- **Average Order Value**: $1,919.66\n- **Daily Performance**: $22,396.08 average over 3 active days\n\n### ⚠️ Data Quality Alert\nThe comparison data shows **extreme anomalies** in last month's figures:\n- Sales figures in scientific notation (10²⁵) suggest data corruption\n- Unrealistic percentage changes indicate database issues\n\n## 📈 Actionable Insights\n\n1. **Focus on This Week's Data**: With 35 orders and strong daily averages, current performance appears healthy\n2. **High Order Value**: $1,920 average order value suggests premium customer engagement\n3. **Data Validation Needed**: Historical comparison requires data cleansing\n\n## 🎯 Recommendations\n\n- ✅ **Maintain Current Momentum**: Strong daily sales performance\n- 🔧 **Fix Data Issues**: Investigate last month's data corruption\n- 📊 **Establish Baseline**: Use clean historical data for accurate trending",
}: ResponseComponentProps) => {
  const visualizationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (htmlContent && visualizationRef.current) {
      // Execute scripts using the utility function
      executeScriptsFromHTML(htmlContent, visualizationRef.current)
        .then(result => {
          if (result.success) {
            console.log('Scripts executed successfully:', result.loadedScripts);
          } else {
            console.error('Script execution failed:', result.error);
          }
        })
        .catch(error => {
          console.error('Error in script execution:', error);
        });
    }

    // Cleanup function
    return () => {
      cleanupScripts();
    };
  }, [htmlContent]);
  return (
    <div className={styles['response-component']}>
      <div className={styles['response-logo-area']}>
        <div className={styles['ai-icon']}>
          <AiIconWhite />
        </div>
      </div>
      <div className={styles['response-area']}>
        <div className={styles['response-content-area']}>
          <div className={styles['response-content-area-text']}>
            <MarkdownRenderer content={textContent} />
          </div>
          <div className={styles['response-content-area-visualization']}>
            {htmlContent && (
              <div
                ref={visualizationRef}
                style={{ width: '100%', height: 'auto' }}
              />
            )}
          </div>
        </div>
        <div className={styles['response-interaction-row']}>
          <ThumbsUpIcon />
          <ThumbsDownIcon />
          <RetryIcon />
        </div>
      </div>
    </div>
  );
};
