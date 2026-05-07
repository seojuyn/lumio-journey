import './DocItem.css';

export function DocItem({ icon, name, sub, actionLabel, actionPrimary, onAction }) {
  return (
    <div className="doc-item">
      <div className="doc-icon">{icon}</div>
      <div className="doc-info">
        <div className="doc-name">{name}</div>
        <div className="doc-sub">{sub}</div>
      </div>
      <div className="doc-action">
        <button
          className={actionPrimary ? 'ob-btn' : ''}
          onClick={onAction}
        >
          {actionLabel}
        </button>
      </div>
    </div>
  );
}
