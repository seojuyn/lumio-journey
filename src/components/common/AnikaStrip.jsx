import './AnikaStrip.css';

export function AnikaStrip({ children, style }) {
  return (
    <div className="anika-strip" style={style}>
      <div className="ai-orb">AI</div>
      <div className="ai-txt">{children}</div>
    </div>
  );
}

export function AiOrbLg() {
  return <div className="ai-orb-lg">AI</div>;
}
