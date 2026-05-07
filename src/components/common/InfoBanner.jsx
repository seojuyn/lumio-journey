import './InfoBanner.css';

export function InfoBanner({ icon, children, variant = 'blue', style }) {
  return (
    <div className={`info-banner ${variant}`} style={style}>
      {icon && <span className="icon">{icon}</span>}
      <span>{children}</span>
    </div>
  );
}
