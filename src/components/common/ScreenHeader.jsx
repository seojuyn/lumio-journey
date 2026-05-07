import './ScreenHeader.css';

export function ScreenHeader({ eyebrow, title, titleGradient, sub }) {
  return (
    <div className="screen-header">
      {eyebrow && <div className="screen-eyebrow">{eyebrow}</div>}
      <div className="screen-title">
        {title}
        {titleGradient && <span> {titleGradient}</span>}
      </div>
      {sub && <div className="screen-sub">{sub}</div>}
    </div>
  );
}
