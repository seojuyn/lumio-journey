import { useState } from 'react';
import { Star, ChevronDown, Sparkles, CheckCircle2 } from 'lucide-react';
import { Badge } from '../common/Badge';
import { useApp } from '../../context/AppContext';
import './LenderCard.css';

const FREQ_TEXT = {
  monthly:     'per month',
  fortnightly: 'per fortnight',
  weekly:      'per week',
};

function InfoRow({ label, value, valCls = '', last }) {
  return (
    <div className={`lc-info-row${last ? ' lc-info-last' : ''}`}>
      <span className="lc-info-lbl">{label}</span>
      <span className={`lc-info-val ${valCls}`}>{value}</span>
    </div>
  );
}

export function LenderCard({ lender, frequency = 'monthly' }) {
  const { next } = useApp();
  const [open, setOpen] = useState(false);

  const {
    name, abbr, logoBg, rate, comp, best,
    etFee, estFee, brokFee, monthlyFee, totalRepayNum,
    types, approval, reasons, sla,
    loanTerm, extraRepayments,
    capacityNote, conductNote, stabilityNote,
  } = lender;

  const repayNum = {
    monthly:     totalRepayNum,
    fortnightly: Math.round(totalRepayNum * 12 / 26),
    weekly:      Math.round(totalRepayNum * 12 / 52),
  }[frequency];

  const etGreen  = etFee.includes('$0');
  const estGreen = estFee === '$0';
  const feeGreen = monthlyFee === '$0';

  const approvalHigh = approval >= 85;
  const approvalColor = approvalHigh ? 'var(--green)' : approval >= 75 ? 'var(--hover)' : 'var(--yellow)';
  const approvalBg    = approvalHigh ? 'var(--green)' : 'var(--accentg)';
  const approvalLabel = approvalHigh ? 'High' : approval >= 75 ? 'Good' : 'Moderate';

  return (
    <div className={`lender-card${best ? ' best' : ''}`}>

      {/* ── Header ── */}
      <div className="lc-header">
        <div className="lc-logo" style={{ background: logoBg }}>{abbr}</div>
        <div className="lc-header-body">
          <div className="lc-name">{name}</div>
          <div className="lc-types">
            {types.map(t => (
              <span key={t} className={`type-pill ${t === 'Fixed' ? 'type-fixed' : 'type-variable'}`}>{t}</span>
            ))}
          </div>
        </div>
        {best && (
          <Badge variant="green" style={{ flexShrink: 0, alignSelf: 'flex-start' }}>
            <Star size={10} fill="currentColor" /> Best match
          </Badge>
        )}
      </div>

      {/* ── Repayment hero ── */}
      <div className="lc-repay">
        <div className="lc-repay-freq">{FREQ_TEXT[frequency]}</div>
        <div className="lc-repay-amount">
          <span className="lc-repay-curr">$</span>
          <span className="lc-repay-num">{repayNum.toLocaleString()}</span>
        </div>
        <div className="lc-repay-meta">inclusive of all fees &amp; charges</div>
      </div>

      {/* ── Rate chips ── */}
      <div className="lc-chips">
        <div className="lc-chip">
          <div className="lc-chip-val">{rate}</div>
          <div className="lc-chip-lbl">Interest p.a.</div>
        </div>
        <div className="lc-chip-sep" />
        <div className="lc-chip">
          <div className="lc-chip-val lc-chip-muted">{comp}</div>
          <div className="lc-chip-lbl">Comparison p.a.</div>
        </div>
        <div className="lc-chip-sep" />
        <div className="lc-chip">
          <div className="lc-chip-val lc-chip-sm lc-chip-muted">{sla}</div>
          <div className="lc-chip-lbl">Decision time</div>
        </div>
      </div>

      {/* ── Fee & loan info ── */}
      <div className="lc-info">
        <InfoRow label="Monthly fee"        value={monthlyFee}      valCls={feeGreen ? 'val-green' : 'val-yellow'} />
        <InfoRow label="Establishment fee"  value={estFee}          valCls={estGreen ? 'val-green' : 'val-yellow'} />
        <InfoRow label="Early exit fee"     value={etFee}           valCls={etGreen  ? 'val-green' : 'val-amber'}  />
        <InfoRow label="Extra repayments"   value={extraRepayments}                                                 />
        <InfoRow label="Loan term"          value={loanTerm}        last                                            />
      </div>

      {/* ── Brokerage transparency strip ── */}
      <div className="lc-brok">
        <span className="lc-brok-dot" />
        <span>Brokerage fee: <strong>{brokFee}</strong> — disclosed in your credit guide</span>
      </div>

      {/* ── Approval confidence ── */}
      <div className="lc-approval">
        <div className="lca-row">
          <span className="lca-label">Approval confidence</span>
          <div className="lca-right">
            <span className="lca-badge" style={{ color: approvalColor, borderColor: `${approvalColor}66`, background: `${approvalColor}18` }}>
              {approvalLabel}
            </span>
            <span className="lca-pct" style={{ color: approvalColor }}>{approval}%</span>
          </div>
        </div>
        <div className="lca-bar">
          <div className="lca-fill" style={{ width: `${approval}%`, background: approvalBg }} />
        </div>
      </div>

      {/* ── CTA + toggle ── */}
      <div className="lc-cta">
        <button
          className={`lc-apply${best ? ' lc-apply-primary' : ' lc-apply-ghost'}`}
          onClick={next}
        >
          Apply with {name} →
        </button>
        <button className="lc-toggle" onClick={() => setOpen(p => !p)}>
          <span>{open ? 'View less' : 'View more'}</span>
          <ChevronDown size={14} className={`lc-chevron${open ? ' open' : ''}`} />
        </button>
      </div>

      {/* ── Expandable: Anika AI insights + Assessment notes ONLY ── */}
      <div className={`lc-expand${open ? ' open' : ''}`}>
        <div className="lc-expand-inner">

          <div className="lc-section">
            <div className="lc-section-head">
              <Sparkles size={10} /> Anika AI insights
            </div>
            {reasons.map((r, i) => (
              <div key={i} className="lc-reason">
                <CheckCircle2 size={12} className="lc-reason-icon" />
                {r}
              </div>
            ))}
          </div>

          <div className="lc-section lc-section-last">
            <div className="lc-section-head">Assessment notes</div>
            <div className="lc-note">{capacityNote}</div>
            <div className="lc-note">{conductNote}</div>
            <div className="lc-note lc-note-last">{stabilityNote}</div>
          </div>

        </div>
      </div>

    </div>
  );
}
