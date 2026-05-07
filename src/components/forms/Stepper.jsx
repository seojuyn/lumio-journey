import './Stepper.css';

export function Stepper({ value, onDecrement, onIncrement, displayValue }) {
  return (
    <div className="stepper">
      <button className="st-btn" onClick={onDecrement}>−</button>
      <span className="st-val">{displayValue ?? value}</span>
      <button className="st-btn" onClick={onIncrement}>+</button>
    </div>
  );
}
