import { useState, useRef, useCallback } from 'react';
import './RangeSlider.css';

export function RangeSlider({
  label, value, displayValue, min, max, step = 1,
  onChange, minLabel, maxLabel, accentColor, prefix, suffix,
}) {
  const [draft, setDraft] = useState(null);
  const [active, setActive] = useState(false);
  const trackRef = useRef(null);
  const isDragging = useRef(false);

  const pct = Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));

  const updateFromPointer = useCallback((clientX) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const raw = min + ratio * (max - min);
    onChange(Math.round(raw / step) * step);
  }, [min, max, step, onChange]);

  const onPointerDown = (e) => {
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    isDragging.current = true;
    setActive(true);
    updateFromPointer(e.clientX);
  };

  const onPointerMove = (e) => {
    if (!isDragging.current) return;
    updateFromPointer(e.clientX);
  };

  const onPointerUp = () => {
    isDragging.current = false;
    setActive(false);
  };

  const commit = (raw) => {
    const n = parseInt(raw ?? '', 10);
    if (isNaN(n)) { setDraft(null); return; }
    const snapped = Math.round(Math.min(max, Math.max(min, n)) / step) * step;
    onChange(snapped);
    setDraft(null);
  };

  const handleTextChange = (e) => {
    const raw = e.target.value.replace(/[^0-9]/g, '');
    setDraft(raw);
    const n = parseInt(raw, 10);
    if (!isNaN(n) && n >= min && n <= max) {
      onChange(Math.round(n / step) * step);
    }
  };

  const hasSideInput = prefix !== undefined || suffix !== undefined;
  const inputDisplayValue = draft ?? (prefix ? value.toLocaleString() : String(value));

  const track = (
    <div
      ref={trackRef}
      className={`rs-track-outer${active ? ' rs-active' : ''}`}
      style={accentColor ? { '--rs-fill': accentColor } : undefined}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      <div className="rs-track-bar">
        <div className="rs-fill" style={{ width: `${pct}%` }} />
      </div>
      <div className="rs-thumb" style={{ left: `${pct}%` }} />
    </div>
  );

  const minmax = (minLabel || maxLabel) ? (
    <div className="range-minmax">
      <span>{minLabel}</span>
      <span>{maxLabel}</span>
    </div>
  ) : null;

  return (
    <div className="range-wrap">
      <div className="range-header">
        <span className="range-label">{label}</span>
        {!hasSideInput && displayValue !== undefined && (
          <span className="range-val">{displayValue}</span>
        )}
      </div>

      {hasSideInput ? (
        <div className="range-body-row">
          {/* range-track-wrap has padding-top: 9px to shift the track down so its centre
              aligns with the input centre: (46px field − 28px track) / 2 = 9px.
              Minmax labels live inside here so they match the exact track width. */}
          <div className="range-track-wrap">
            {track}
            {minmax}
          </div>
          <div className="range-side-input">
            <div className="range-field">
              {prefix && <span className="range-field-prefix">{prefix}</span>}
              <input
                className="range-field-input"
                inputMode="numeric"
                placeholder="0"
                value={inputDisplayValue}
                onChange={handleTextChange}
                onFocus={e => { setDraft(String(value)); e.target.select(); }}
                onBlur={() => commit(draft)}
                onKeyDown={e => e.key === 'Enter' && commit(draft)}
              />
              {suffix && <span className="range-field-suffix">{suffix}</span>}
            </div>
          </div>
        </div>
      ) : (
        <>
          {track}
          {minmax}
        </>
      )}
    </div>
  );
}
