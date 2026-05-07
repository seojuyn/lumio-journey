import './Button.css';

export function BtnPrimary({ children, onClick, style, disabled }) {
  return (
    <button className="btn-primary" onClick={onClick} style={style} disabled={disabled}>
      {children}
    </button>
  );
}

export function BtnGhost({ children, onClick, style, disabled }) {
  return (
    <button className="btn-ghost" onClick={onClick} style={style} disabled={disabled}>
      {children}
    </button>
  );
}

export function BtnRow({ children, style }) {
  return <div className="btn-row" style={style}>{children}</div>;
}
