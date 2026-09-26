import toPersianNumber from "../helper/toPersianDigit";

function CircleProgress({ percentage, strokeWidth = 10, radius = 50 }) {
  const viewBoxSize = radius * 2;
  const drawnRadius = radius - strokeWidth / 2;
  const circumFerence = drawnRadius * 2 * Math.PI;
  const strokeDashoffset = circumFerence - (percentage / 100) * circumFerence;

  return (
    <div className="circular-progress-container">
      <svg
        width={viewBoxSize}
        height={viewBoxSize}
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        className="circular-progress-svg"
      >
        {/* دایره پس‌زمینه (خاکستری) */}
        <circle
          className="progress-background"
          cx={radius}
          cy={radius}
          r={drawnRadius}
          fill="none"
          strokeWidth={strokeWidth}
        />

        {/* دایره پیشرفت (رنگ اصلی) */}
        <circle
          className="progress-bar"
          cx={radius}
          cy={radius}
          r={drawnRadius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeDasharray={circumFerence}
          strokeDashoffset={strokeDashoffset}
          transform={`rotate(0 ${radius} ${radius})`}
        />
      </svg>

      {/* نمایش درصد داخل دایره */}
      <div className="progress-text">
        {toPersianNumber(Math.round(percentage))}%
      </div>
    </div>
  );
}

export default CircleProgress;
