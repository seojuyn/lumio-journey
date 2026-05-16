import './Chip.css';

export function Chips({ children, className }) {
  return <div className={`chips${className ? ` ${className}` : ''}`}>{children}</div>;
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
