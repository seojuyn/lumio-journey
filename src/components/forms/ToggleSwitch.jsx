import './ToggleSwitch.css';

export function ToggleSwitch({ on, onToggle }) {
  return <div className={`sw ${on ? 'on' : ''}`} onClick={onToggle} />;
}
