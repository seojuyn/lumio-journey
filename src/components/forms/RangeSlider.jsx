import './RangeSlider.css';

export function RangeSlider({ label, value, displayValue, min, max, step, onChange, minLabel, maxLabel, accentColor }) {
  return (
    <div>
      <div className="range-header">
        <span className="range-label">{label}</span>
        <span className="range-val">{displayValue}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        style={accentColor ? { accentColor } : undefined}
      />
      {(minLabel || maxLabel) && (
        <div className="range-minmax">
          <span>{minLabel}</span>
          <span>{maxLabel}</span>
        </div>
      )}
    </div>
  );
}
