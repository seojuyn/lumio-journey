import './Chip.css';

export function Chips({ children }) {
  return <div className="chips">{children}</div>;
}

export function Chip({ children, selected, onClick, style }) {
  return (
    <div
      className={`chip ${selected ? 'on' : ''}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
}
