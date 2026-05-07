import { useApp } from '../../context/AppContext';
import { SCREENS } from '../../constants/screens';
import { getInitials } from '../../utils/format';
import './TopBar.css';

export function TopBar() {
  const { state } = useApp();
  const { currentScreen, firstName, lastName } = state;
  const screen = SCREENS[currentScreen];
  const initials = getInitials(firstName, lastName);

  return (
    <div className="topbar">
      <div className="topbar-left">
        <span className="topbar-step">Step {currentScreen + 1} of {SCREENS.length}</span>
        <span className="topbar-divider">·</span>
        <span className="topbar-title">{screen?.label}</span>
      </div>
      <div className="topbar-right">
        <span className="save-indicator">● Progress saved</span>
        <div className="topbar-avatar">{initials}</div>
      </div>
    </div>
  );
}
