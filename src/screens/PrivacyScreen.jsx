import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ScreenHeader } from '../components/common/ScreenHeader';
import { BtnPrimary, BtnGhost, BtnRow } from '../components/common/Button';
import { Card, CardTitle } from '../components/common/Card';
import { PRIVACY_SECTIONS, DECLARATIONS } from '../data/privacyData';
import './PrivacyScreen.css';

export function PrivacyScreen() {
  const { state, toggleConsent, next, prev } = useApp();
  const [openPanel, setOpenPanel] = useState(0);

  function togglePanel(i) {
    setOpenPanel(prev => prev === i ? null : i);
  }

  return (
    <div className="screen-enter">
      <ScreenHeader
        eyebrow="✦ Step 9 · Privacy & Consent"
        title="Privacy &"
        titleGradient="consent"
        sub="Please read and confirm before we submit your application to lenders."
      />

      <Card>
        <CardTitle icon="📋">Disclosures</CardTitle>
        {PRIVACY_SECTIONS.map((s, i) => (
          <div key={i} className="priv-section">
            <div className="priv-head" onClick={() => togglePanel(i)}>
              <span>{s.title}</span>
              <span style={{ color: 'var(--text2)', transition: 'transform .2s', display: 'inline-block', transform: openPanel === i ? 'rotate(180deg)' : 'none' }}>▾</span>
            </div>
            {openPanel === i && (
              <div className="priv-body open">{s.body}</div>
            )}
          </div>
        ))}
      </Card>

      <Card>
        <CardTitle icon="✅">Declarations</CardTitle>
        {DECLARATIONS.map((d, i) => (
          <div key={i} className="check-item" onClick={() => toggleConsent(i)}>
            <div className={`check-box ${state.checkedConsents.includes(i) ? 'checked' : ''}`}>
              {state.checkedConsents.includes(i) ? '✓' : ''}
            </div>
            <div style={{ fontSize: 13, color: 'var(--text1)', lineHeight: 1.6 }}>{d}</div>
          </div>
        ))}
      </Card>

      <BtnRow>
        <BtnGhost onClick={prev}>← Back</BtnGhost>
        <BtnPrimary onClick={next}>Submit application →</BtnPrimary>
      </BtnRow>
    </div>
  );
}
