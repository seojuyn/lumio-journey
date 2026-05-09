import { useState, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { ScreenHeader } from '../components/common/ScreenHeader';
import { BtnPrimary, BtnGhost, BtnRow } from '../components/common/Button';
import { Card, CardTitle } from '../components/common/Card';
import './SignupScreen.css';

export function SignupScreen() {
  const { next, prev } = useApp();
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const otpRefs = useRef([]);

  function handleOtpInput(i, val) {
    if (!/^\d?$/.test(val)) return;
    const next = [...otp];
    next[i] = val;
    setOtp(next);
    if (val && i < 5) otpRefs.current[i + 1]?.focus();
  }

  function handleOtpKeyDown(i, e) {
    if (e.key === 'Backspace' && !otp[i] && i > 0) otpRefs.current[i - 1]?.focus();
  }

  return (
    <div className="screen-enter signup-screen">
      <ScreenHeader
        eyebrow="Step 12 · Account creation"
        title="Save your"
        titleGradient="application"
        sub="Create an account to track your application and come back anytime."
      />

      <div className="signup-cards">
        <Card>
          <CardTitle icon="UserCircle">Create account</CardTitle>
          <div className="fld">
            <span className="fl">Mobile number</span>
            <input className="inp" placeholder="0400 000 000" value={mobile} onChange={e => setMobile(e.target.value)} />
          </div>
          <div className="fld">
            <span className="fl">Email address</span>
            <input className="inp" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="fld">
            <span className="fl">Password</span>
            <input className="inp" type="password" placeholder="Create a strong password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <BtnPrimary className="signup-btn-full" onClick={() => {}}>Send OTP &amp; create account →</BtnPrimary>
          <div className="signup-signin-hint">
            Already have an account? <span className="signup-signin-link">Sign in</span>
          </div>
        </Card>

        <Card>
          <CardTitle icon="ShieldCheck">OTP verification</CardTitle>
          <div className="signup-otp-hint">Enter the 6-digit code sent to your mobile</div>
          <div className="otp-inputs">
            {otp.map((d, i) => (
              <input
                key={i}
                ref={el => (otpRefs.current[i] = el)}
                className="otp-inp"
                maxLength={1}
                value={d}
                onChange={e => handleOtpInput(i, e.target.value)}
                onKeyDown={e => handleOtpKeyDown(i, e)}
                inputMode="numeric"
              />
            ))}
          </div>
          <BtnPrimary className="signup-btn-full" onClick={next}>Verify &amp; continue →</BtnPrimary>
          <div className="signup-resend-hint">
            Resend code in <span className="signup-resend-timer">0:45</span>
          </div>
        </Card>
      </div>

      <BtnRow>
        <BtnGhost onClick={prev}>← Back</BtnGhost>
      </BtnRow>
    </div>
  );
}
