import './Badge.css';

export function Badge({ children, variant = 'blue', style }) {
  return (
    <span className={`badge badge-${variant}`} style={style}>
      {children}
    </span>
  );
}

export function SvcPill({ children, variant }) {
  return <div className={`svc-pill ${variant}`}>{children}</div>;
}
