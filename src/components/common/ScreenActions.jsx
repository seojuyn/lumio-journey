import { BtnGhost, BtnPrimary, BtnRow } from './Button';

/**
 * Unified screen navigation footer used by every onboarding screen.
 * Renders inside BtnRow so the mobile-sticky CSS in Button.css applies automatically.
 *
 * Props:
 *   onBack            — show ← Back button (omit for first screen)
 *   onContinue        — show Continue → button (omit for terminal screens)
 *   continueDisabled  — disable the Continue button
 */
export function ScreenActions({ onBack, onContinue, continueDisabled = false }) {
  return (
    <BtnRow style={!onBack && onContinue ? { justifyContent: 'flex-end' } : undefined}>
      {onBack     && <BtnGhost    onClick={onBack}>← Back</BtnGhost>}
      {onContinue && <BtnPrimary  onClick={onContinue} disabled={continueDisabled}>Continue →</BtnPrimary>}
    </BtnRow>
  );
}
