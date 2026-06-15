import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/screens/ConnectBanksScreen.jsx");const useEffect = __vite__cjsImport0_react["useEffect"]; const useMemo = __vite__cjsImport0_react["useMemo"]; const useState = __vite__cjsImport0_react["useState"];const createPortal = __vite__cjsImport2_reactDom["createPortal"];const _jsxDEV = __vite__cjsImport11_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport11_react_jsxDevRuntime["Fragment"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=c456d716";
import { Landmark, Sparkles } from "/node_modules/.vite/deps/lucide-react.js?v=c456d716";
import __vite__cjsImport2_reactDom from "/node_modules/.vite/deps/react-dom.js?v=c456d716";
import { motion, AnimatePresence } from "/node_modules/.vite/deps/framer-motion.js?v=c456d716";
import { Icon } from "/src/components/common/Icon.jsx";
import { BankStatementUpload } from "/src/components/common/BankStatementUpload.jsx";
import { useApp } from "/src/context/AppContext.jsx";
import { ScreenHeader } from "/src/components/common/ScreenHeader.jsx";
import { BtnPrimary, BtnGhost, BtnRow } from "/src/components/common/Button.jsx";
import { getStep } from "/src/constants/screens.js";
import "/src/screens/ConnectBanksScreen.css";
var _jsxFileName = "B:/axio/axio-react/src/screens/ConnectBanksScreen.jsx";
import __vite__cjsImport11_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=c456d716";
var _s = $RefreshSig$(), _s2 = $RefreshSig$();
// ─── Static data ─────────────────────────────────────────────────────────────
const BANK_ITEMS = [
	{
		id: "cba",
		icon: "Landmark",
		name: "Commonwealth",
		type: "Major"
	},
	{
		id: "anz",
		icon: "Building2",
		name: "ANZ",
		type: "Major"
	},
	{
		id: "nab",
		icon: "Banknote",
		name: "NAB",
		type: "Major"
	},
	{
		id: "wbc",
		icon: "Store",
		name: "Westpac",
		type: "Major"
	},
	{
		id: "ing",
		icon: "Sparkles",
		name: "ING",
		type: "Digital"
	},
	{
		id: "mac",
		icon: "BarChart2",
		name: "Macquarie",
		type: "Digital"
	},
	{
		id: "ben",
		icon: "Home",
		name: "Bendigo",
		type: "Regional"
	},
	{
		id: "other",
		icon: "Plus",
		name: "Other",
		type: "Regional"
	}
];
const FLOW_STEPS = [
	{
		id: "intro",
		title: "Connect banks",
		short: "Why we need this",
		stepIcon: "Sparkles"
	},
	{
		id: "banks",
		title: "Choose banks",
		short: "Multiple banks",
		stepIcon: "Building2"
	},
	{
		id: "period",
		title: "Statement period",
		short: "3, 6 or 12 months",
		stepIcon: "CalendarDays"
	},
	{
		id: "connect",
		title: "Secure connect",
		short: "Bank redirect",
		stepIcon: "Lock"
	},
	{
		id: "review",
		title: "Review",
		short: "Anika summary",
		stepIcon: "BarChart2"
	}
];
const INTRO_BENEFITS = [
	{
		icon: "CheckCircle2",
		label: "Verify income"
	},
	{
		icon: "CreditCard",
		label: "Review expenses"
	},
	{
		icon: "AlertCircle",
		label: "Find risk flags"
	},
	{
		icon: "Target",
		label: "Match lenders"
	}
];
const ANIKA_CHECKS = [
	"Income deposits",
	"Pay cycle",
	"Living expenses",
	"BNPL and loans",
	"Dishonours",
	"Spending behaviour"
];
// ─── Bank summary panel (desktop sidebar) ────────────────────────────────────
function BankSummaryPanel({ selectedBanks, months }) {
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "bank-summary-panel",
		children: [
			/* @__PURE__ */ _jsxDEV("div", {
				className: "bank-summary-header",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "bank-summary-icon",
					children: /* @__PURE__ */ _jsxDEV(Icon, {
						name: "Zap",
						size: 19
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 9
				}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "bank-summary-eyebrow",
					children: "Application check"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 57,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "bank-summary-title",
					children: "Bank data setup"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 58,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 52,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "bank-summary-stats",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "bank-summary-stat accent",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "bank-summary-stat-label",
						children: "Selected banks"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 63,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "bank-summary-stat-value",
						children: selectedBanks.length
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 64,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 62,
					columnNumber: 9
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "bank-summary-stat muted",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "bank-summary-stat-label",
						children: "Statement period"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 67,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "bank-summary-stat-value",
						children: [months, " months"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 68,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 66,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 61,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "bank-summary-anika",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "bank-summary-anika-title",
					children: "Anika AI will review:"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 72,
					columnNumber: 9
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "bank-summary-anika-desc",
					children: "Income, expenses, cashflow, liabilities, dishonours, BNPL, gambling indicators, recurring repayments and lender readiness."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 73,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 71,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 51,
		columnNumber: 5
	}, this);
}
_c = BankSummaryPanel;
// ─── Secure Connect Modal ─────────────────────────────────────────────────────
function SecureConnectModal({ bank, onClose, onConnect, onUpload }) {
	_s();
	const [crn, setCrn] = useState("");
	const [password, setPassword] = useState("");
	const [showPwd, setShowPwd] = useState(false);
	const [consented, setConsented] = useState(false);
	const canSubmit = crn.trim().length > 0 && password.trim().length > 0 && consented;
	useEffect(() => {
		if (bank) document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "";
		};
	}, [bank]);
	return createPortal(/* @__PURE__ */ _jsxDEV(AnimatePresence, { children: bank && /* @__PURE__ */ _jsxDEV(motion.div, {
		className: "sc-modal-overlay",
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .2 },
		onClick: onClose,
		children: /* @__PURE__ */ _jsxDEV(motion.div, {
			className: "sc-modal",
			style: { x: "-50%" },
			initial: {
				opacity: 0,
				scale: .94,
				y: -12
			},
			animate: {
				opacity: 1,
				scale: 1,
				y: 0
			},
			exit: {
				opacity: 0,
				scale: .94,
				y: -12
			},
			transition: {
				type: "spring",
				damping: 28,
				stiffness: 320
			},
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ _jsxDEV("button", {
					type: "button",
					className: "sc-modal-close",
					onClick: onClose,
					"aria-label": "Close",
					children: /* @__PURE__ */ _jsxDEV(Icon, {
						name: "X",
						size: 14
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 118,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 117,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "sc-modal-header",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "sc-modal-lock-icon",
						children: /* @__PURE__ */ _jsxDEV(Icon, {
							name: "Lock",
							size: 20
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 123,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 122,
						columnNumber: 15
					}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "sc-modal-title",
						children: "Secure Authentication"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 126,
						columnNumber: 17
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "sc-modal-sub",
						children: "Enter your CRN and password to securely connect your account."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 127,
						columnNumber: 17
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 125,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 121,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "sc-modal-bank-row",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "sc-modal-bank-icon",
							children: /* @__PURE__ */ _jsxDEV(Icon, {
								name: bank.icon,
								size: 14
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 135,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 134,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("span", {
							className: "sc-modal-bank-name",
							children: bank.name
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 137,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("span", {
							className: "sc-modal-bank-type",
							children: [bank.type, " Bank"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 138,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 133,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "sc-modal-field",
					children: [/* @__PURE__ */ _jsxDEV("label", {
						className: "sc-modal-label",
						children: "Customer Reference Number (CRN)"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 142,
						columnNumber: 15
					}, this), /* @__PURE__ */ _jsxDEV("input", {
						className: "sc-modal-input",
						type: "text",
						placeholder: "Enter your CRN",
						value: crn,
						onChange: (e) => setCrn(e.target.value),
						autoComplete: "username"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 143,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 141,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "sc-modal-field",
					children: [/* @__PURE__ */ _jsxDEV("label", {
						className: "sc-modal-label",
						children: "Password"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 154,
						columnNumber: 15
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "sc-modal-input-wrap",
						children: [/* @__PURE__ */ _jsxDEV("input", {
							className: "sc-modal-input",
							type: showPwd ? "text" : "password",
							placeholder: "Enter your password",
							value: password,
							onChange: (e) => setPassword(e.target.value),
							autoComplete: "current-password",
							onKeyDown: (e) => e.key === "Enter" && canSubmit && onConnect()
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 156,
							columnNumber: 17
						}, this), /* @__PURE__ */ _jsxDEV("button", {
							type: "button",
							className: "sc-modal-pwd-toggle",
							onClick: () => setShowPwd((p) => !p),
							"aria-label": showPwd ? "Hide password" : "Show password",
							children: /* @__PURE__ */ _jsxDEV(Icon, {
								name: showPwd ? "EyeOff" : "Eye",
								size: 14
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 171,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 165,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 155,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 153,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "sc-modal-notice",
					children: [/* @__PURE__ */ _jsxDEV(Icon, {
						name: "Lock",
						size: 13,
						className: "sc-modal-notice-icon"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 177,
						columnNumber: 15
					}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "sc-modal-notice-title",
						children: "Encrypted & Read-Only Access"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 179,
						columnNumber: 17
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "sc-modal-notice-desc",
						children: "Your banking credentials are encrypted during transmission. Stoik and Lumio Finance do not store your login details."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 180,
						columnNumber: 17
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 178,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 176,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ _jsxDEV("label", {
					className: "sc-modal-consent",
					children: [/* @__PURE__ */ _jsxDEV("input", {
						type: "checkbox",
						className: "sc-modal-checkbox",
						checked: consented,
						onChange: (e) => setConsented(e.target.checked)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 188,
						columnNumber: 15
					}, this), /* @__PURE__ */ _jsxDEV("span", {
						className: "sc-modal-consent-text",
						children: ["Consent to access financial data", /* @__PURE__ */ _jsxDEV("span", {
							className: "sc-modal-consent-desc",
							children: "By continuing, you authorise Stoik and Lumio Finance to securely access your banking transaction history for assessment, verification, and lender matching."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 196,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 194,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 187,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "sc-modal-cta",
					children: [/* @__PURE__ */ _jsxDEV("button", {
						type: "button",
						className: "sc-modal-connect-btn",
						onClick: () => canSubmit && onConnect(),
						disabled: !canSubmit,
						children: "Connect Bank Securely"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 204,
						columnNumber: 15
					}, this), /* @__PURE__ */ _jsxDEV("button", {
						type: "button",
						className: "sc-modal-upload-btn",
						onClick: () => onUpload(bank),
						children: "Upload Bank Statements Instead"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 212,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 203,
					columnNumber: 13
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 108,
			columnNumber: 11
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 100,
		columnNumber: 9
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 98,
		columnNumber: 5
	}, this), document.body);
}
_s(SecureConnectModal, "Z9M87dcacqG7Hc4+X8h8o8tQ1fc=");
_c2 = SecureConnectModal;
// ─── Main screen ──────────────────────────────────────────────────────────────
export function ConnectBanksScreen() {
	_s2();
	const { state, updateState, next, prev } = useApp();
	const [bankStep, setBankStep] = useState(0);
	const [selectedBankIds, setSelectedBankIds] = useState(["cba", "nab"]);
	const [months, setMonths] = useState(6);
	const [bankSearch, setBankSearch] = useState("");
	const [modalBank, setModalBank] = useState(null);
	const [uploadBank, setUploadBank] = useState(null);
	const [showUploadModal, setShowUploadModal] = useState(false);
	const selectedBanks = BANK_ITEMS.filter((b) => selectedBankIds.includes(b.id));
	const bankConnections = state.bankConnections || {};
	const allSelectedBanksConnected = selectedBanks.length > 0 && selectedBanks.every((bank) => bankConnections[bank.id]?.connected);
	const filteredBanks = useMemo(() => BANK_ITEMS.filter((b) => b.name.toLowerCase().includes(bankSearch.toLowerCase())), [bankSearch]);
	const canContinue = bankStep !== 1 || selectedBankIds.length > 0;
	const pct = Math.round((bankStep + 1) / FLOW_STEPS.length * 100);
	const toggleBank = (id) => setSelectedBankIds((prev) => prev.includes(id) ? prev.filter((bid) => bid !== id) : [...prev, id]);
	const connectBank = (id) => {
		updateState({
			bankConnected: true,
			selectedBank: id,
			bankConnectionSummary: "Connected via secure authentication",
			bankConnections: {
				...bankConnections,
				[id]: {
					...bankConnections[id] || {},
					connected: true,
					method: "secure",
					files: bankConnections[id]?.files || []
				}
			}
		});
	};
	const handleNext = () => {
		if (canContinue) setBankStep((p) => Math.min(FLOW_STEPS.length - 1, p + 1));
	};
	const handleBack = () => setBankStep((p) => Math.max(0, p - 1));
	const buildSummary = () => `${selectedBankIds.length} bank${selectedBankIds.length !== 1 ? "s" : ""} · ${months} months · CDR accredited`;
	const handleComplete = () => {
		updateState({
			bankConnected: true,
			selectedBank: selectedBankIds[0] || null,
			uploadedDocs: {
				...state.uploadedDocs,
				bankstatements: true
			},
			bankConnectionSummary: buildSummary()
		});
	};
	const handlePdfUpload = (bank) => {
		setUploadBank(bank);
		setShowUploadModal(true);
	};
	const handleUploadSubmit = (files) => {
		if (!uploadBank) return;
		updateState({
			bankConnected: true,
			selectedBank: uploadBank.id,
			uploadedDocs: {
				...state.uploadedDocs,
				bankstatements: true
			},
			bankConnectionSummary: "Statement Uploaded · CDR accredited",
			bankConnections: {
				...bankConnections,
				[uploadBank.id]: {
					...bankConnections[uploadBank.id] || {},
					connected: true,
					method: "statement",
					files: files.map((file) => ({
						name: file.name,
						size: file.size
					}))
				}
			}
		});
		setShowUploadModal(false);
		setUploadBank(null);
	};
	const handleDisconnect = () => updateState({
		bankConnected: false,
		selectedBank: null,
		bankConnectionSummary: null,
		bankConnections: {}
	});
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "screen-enter",
		children: [
			/* @__PURE__ */ _jsxDEV(ScreenHeader, {
				eyebrow: `Step ${getStep("connectbanks")} · Connect banks`,
				title: "Secure bank",
				titleGradient: "connection",
				sub: /* @__PURE__ */ _jsxDEV(_Fragment, { children: [/* @__PURE__ */ _jsxDEV("span", {
					className: "sh-sub-row",
					children: [/* @__PURE__ */ _jsxDEV(Landmark, {
						size: 13,
						style: { color: "var(--hover)" }
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 327,
						columnNumber: 15
					}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Connect your bank accounts securely." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 328,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 326,
					columnNumber: 13
				}, this), /* @__PURE__ */ _jsxDEV("span", {
					className: "sh-sub-row",
					children: [/* @__PURE__ */ _jsxDEV(Sparkles, {
						size: 13,
						style: { color: "var(--hover)" }
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 331,
						columnNumber: 15
					}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Anika AI verifies your income and prepares your lender assessment automatically." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 332,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 330,
					columnNumber: 13
				}, this)] }, void 0, true)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 320,
				columnNumber: 7
			}, this),
			allSelectedBanksConnected ? /* @__PURE__ */ _jsxDEV("div", {
				className: "bank-connected-card",
				children: [
					/* @__PURE__ */ _jsxDEV("div", {
						className: "bank-connected-icon",
						children: /* @__PURE__ */ _jsxDEV(Icon, {
							name: "CheckCircle2",
							size: 20
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 342,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 341,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "bank-connected-body",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "bank-connected-title",
							children: "Bank statements connected"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 345,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "bank-connected-sub",
							children: state.bankConnectionSummary || "Connected · CDR accredited"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 346,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 344,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("button", {
						type: "button",
						className: "bank-connected-disconnect",
						onClick: handleDisconnect,
						children: "Disconnect"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 350,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 340,
				columnNumber: 9
			}, this) : /* @__PURE__ */ _jsxDEV(
				"div",
				/* ── Active bank flow ── */
				{
					className: "bank-section",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "bank-hero",
						children: /* @__PURE__ */ _jsxDEV("div", {
							className: "bank-hero-inner",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "bank-hero-copy",
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										className: "bank-hero-eyebrow",
										children: [/* @__PURE__ */ _jsxDEV(Icon, {
											name: "Building2",
											size: 11
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 363,
											columnNumber: 19
										}, this), "Lumio × Stoik"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 362,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("h2", {
										className: "bank-hero-title",
										children: "Connect your bank statements"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 366,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("p", {
										className: "bank-hero-desc",
										children: "Select your banks, give consent, and let Anika AI securely review your banking conduct for faster lender matching."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 367,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "bank-hero-chips",
										children: [
											/* @__PURE__ */ _jsxDEV("span", {
												className: "bank-hero-chip",
												children: "No PDFs"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 372,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("span", {
												className: "bank-hero-chip",
												children: "Multi-bank"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 373,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("span", {
												className: "bank-hero-chip",
												children: "CDR consent"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 374,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 371,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 361,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "bank-hero-icon-wrap",
								children: /* @__PURE__ */ _jsxDEV(Icon, {
									name: "Building2",
									size: 26
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 378,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 377,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 360,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 359,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "bank-flow-grid",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "bank-flow-main",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "bank-progress-card",
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										className: "bank-progress-row",
										children: [/* @__PURE__ */ _jsxDEV("span", {
											className: "bank-progress-label",
											children: [
												"Step ",
												bankStep + 1,
												" of ",
												FLOW_STEPS.length
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 390,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("span", {
											className: "bank-progress-pct",
											children: [pct, "%"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 391,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 389,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "bank-progress-track",
										children: /* @__PURE__ */ _jsxDEV(motion.div, {
											className: "bank-progress-fill",
											animate: { width: `${pct}%` },
											transition: {
												duration: .45,
												ease: "easeOut"
											}
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 394,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 393,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "bank-step-pills",
										children: FLOW_STEPS.map((s, i) => /* @__PURE__ */ _jsxDEV("span", {
											className: `bank-step-pill${i === bankStep ? " active" : i < bankStep ? " done" : ""}`,
											children: s.title
										}, s.id, false, {
											fileName: _jsxFileName,
											lineNumber: 402,
											columnNumber: 21
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 400,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 388,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "bank-content-card",
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										className: "bank-content-head",
										children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "bank-content-eyebrow",
											children: FLOW_STEPS[bankStep].short
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 416,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("h3", {
											className: "bank-content-title",
											children: FLOW_STEPS[bankStep].title
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 417,
											columnNumber: 21
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 415,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("div", {
											className: "bank-content-step-icon",
											children: /* @__PURE__ */ _jsxDEV(Icon, {
												name: FLOW_STEPS[bankStep].stepIcon,
												size: 18
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 420,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 419,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 414,
										columnNumber: 17
									}, this),
									bankStep === 0 && /* @__PURE__ */ _jsxDEV("div", {
										className: "bank-step-body",
										children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "bank-intro-box",
											children: [/* @__PURE__ */ _jsxDEV("div", {
												className: "bank-intro-box-title",
												children: "Fast, simple and secure"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 428,
												columnNumber: 23
											}, this), /* @__PURE__ */ _jsxDEV("p", {
												className: "bank-intro-box-desc",
												children: "Instead of uploading bank statement PDFs, you can securely connect your bank accounts. Anika AI reads the data and prepares a finance assessment summary."
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 429,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 427,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("div", {
											className: "bank-benefits-grid",
											children: INTRO_BENEFITS.map((b) => /* @__PURE__ */ _jsxDEV("div", {
												className: "bank-benefit-item",
												children: [/* @__PURE__ */ _jsxDEV(Icon, {
													name: b.icon,
													size: 15,
													className: "bank-benefit-icon"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 437,
													columnNumber: 27
												}, this), /* @__PURE__ */ _jsxDEV("span", { children: b.label }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 438,
													columnNumber: 27
												}, this)]
											}, b.label, true, {
												fileName: _jsxFileName,
												lineNumber: 436,
												columnNumber: 25
											}, this))
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 434,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 426,
										columnNumber: 19
									}, this),
									bankStep === 1 && /* @__PURE__ */ _jsxDEV("div", {
										className: "bank-step-body",
										children: [
											/* @__PURE__ */ _jsxDEV("div", {
												className: "bank-search-wrap",
												children: [/* @__PURE__ */ _jsxDEV(Icon, {
													name: "Search",
													size: 14,
													className: "bank-search-icon"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 449,
													columnNumber: 23
												}, this), /* @__PURE__ */ _jsxDEV("input", {
													className: "bank-search-input",
													value: bankSearch,
													onChange: (e) => setBankSearch(e.target.value),
													placeholder: "Search your bank…"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 450,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 448,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ _jsxDEV("div", {
												className: "bank-grid",
												children: filteredBanks.map((bank) => {
													const active = selectedBankIds.includes(bank.id);
													return /* @__PURE__ */ _jsxDEV("button", {
														type: "button",
														className: `bank-btn${active ? " active" : ""}`,
														onClick: () => toggleBank(bank.id),
														children: [/* @__PURE__ */ _jsxDEV("div", {
															className: "bank-btn-left",
															children: [/* @__PURE__ */ _jsxDEV("div", {
																className: "bank-btn-icon",
																children: /* @__PURE__ */ _jsxDEV(Icon, {
																	name: bank.icon,
																	size: 16
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 469,
																	columnNumber: 33
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 468,
																columnNumber: 31
															}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
																className: "bank-btn-name",
																children: bank.name
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 472,
																columnNumber: 33
															}, this), /* @__PURE__ */ _jsxDEV("div", {
																className: "bank-btn-type",
																children: bank.type
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 473,
																columnNumber: 33
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 471,
																columnNumber: 31
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 467,
															columnNumber: 29
														}, this), /* @__PURE__ */ _jsxDEV(Icon, {
															name: active ? "CheckCircle2" : "Plus",
															size: 15,
															className: `bank-btn-check${active ? " active" : ""}`
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 476,
															columnNumber: 29
														}, this)]
													}, bank.id, true, {
														fileName: _jsxFileName,
														lineNumber: 461,
														columnNumber: 27
													}, this);
												})
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 457,
												columnNumber: 21
											}, this),
											selectedBankIds.length === 0 && /* @__PURE__ */ _jsxDEV("div", {
												className: "bank-warn",
												children: "Select at least one bank to continue."
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 486,
												columnNumber: 23
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 447,
										columnNumber: 19
									}, this),
									bankStep === 2 && /* @__PURE__ */ _jsxDEV("div", {
										className: "bank-step-body",
										children: [
											/* @__PURE__ */ _jsxDEV("p", {
												className: "bank-period-desc",
												children: "Choose how many months of banking activity Anika AI should analyse."
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 494,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ _jsxDEV("div", {
												className: "bank-period-grid",
												children: [
													3,
													6,
													12
												].map((p) => /* @__PURE__ */ _jsxDEV("button", {
													type: "button",
													className: `bank-period-option${months === p ? " active" : ""}`,
													onClick: () => setMonths(p),
													children: [/* @__PURE__ */ _jsxDEV("span", {
														className: "bank-period-num",
														children: p
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 505,
														columnNumber: 27
													}, this), /* @__PURE__ */ _jsxDEV("span", {
														className: "bank-period-unit",
														children: "months"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 506,
														columnNumber: 27
													}, this)]
												}, p, true, {
													fileName: _jsxFileName,
													lineNumber: 499,
													columnNumber: 25
												}, this))
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 497,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ _jsxDEV("div", {
												className: "bank-period-note",
												children: [/* @__PURE__ */ _jsxDEV("div", {
													className: "bank-period-note-title",
													children: "Recommended: 6 months"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 511,
													columnNumber: 23
												}, this), /* @__PURE__ */ _jsxDEV("p", {
													className: "bank-period-note-desc",
													children: "Good for most personal loans and car loans. Use 12 months for complex income, self-employed applicants or specific lender requests."
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 512,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 510,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 493,
										columnNumber: 19
									}, this),
									bankStep === 3 && /* @__PURE__ */ _jsxDEV("div", {
										className: "bank-step-body",
										children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "bank-connect-info",
											children: [/* @__PURE__ */ _jsxDEV("div", {
												className: "bank-connect-info-title",
												children: "Secure bank redirect"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 524,
												columnNumber: 23
											}, this), /* @__PURE__ */ _jsxDEV("p", {
												className: "bank-connect-info-desc",
												children: "Lumio does not collect internet banking passwords. You will be redirected to your bank or approved Open Banking provider to authenticate securely."
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 525,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 523,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("div", {
											className: "bank-connect-list",
											children: selectedBanks.map((bank) => {
												const connection = bankConnections[bank.id];
												const isConnected = !!connection?.connected;
												const label = connection?.method === "statement" ? "Connected via Statement Upload" : "Connected · read-only";
												return /* @__PURE__ */ _jsxDEV("div", {
													className: "bank-connect-item",
													children: [/* @__PURE__ */ _jsxDEV("div", {
														className: "bank-connect-item-left",
														children: [/* @__PURE__ */ _jsxDEV("div", {
															className: "bank-connect-item-icon",
															children: /* @__PURE__ */ _jsxDEV(Icon, {
																name: bank.icon,
																size: 16
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 542,
																columnNumber: 33
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 541,
															columnNumber: 31
														}, this), /* @__PURE__ */ _jsxDEV("div", { children: [
															/* @__PURE__ */ _jsxDEV("div", {
																className: "bank-connect-item-name",
																children: bank.name
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 545,
																columnNumber: 33
															}, this),
															/* @__PURE__ */ _jsxDEV("div", {
																className: "bank-connect-item-sub",
																children: isConnected ? label : "Ready to connect"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 546,
																columnNumber: 33
															}, this),
															connection?.files?.length > 0 && /* @__PURE__ */ _jsxDEV("div", {
																className: "bank-connect-upload-files",
																children: connection.files.map((file, index) => /* @__PURE__ */ _jsxDEV("div", {
																	className: "bank-connect-upload-file",
																	children: file.name
																}, `${bank.id}-${index}`, false, {
																	fileName: _jsxFileName,
																	lineNumber: 552,
																	columnNumber: 39
																}, this))
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 550,
																columnNumber: 35
															}, this)
														] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 544,
															columnNumber: 31
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 540,
														columnNumber: 29
													}, this), /* @__PURE__ */ _jsxDEV("button", {
														type: "button",
														className: `bank-connect-btn${isConnected ? " done" : ""}`,
														onClick: () => !isConnected && setModalBank(bank),
														children: isConnected ? /* @__PURE__ */ _jsxDEV("span", {
															className: "bank-connect-done",
															children: [/* @__PURE__ */ _jsxDEV(Icon, {
																name: "Check",
																size: 12
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 566,
																columnNumber: 69
															}, this), " Connected"]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 566,
															columnNumber: 33
														}, this) : "Connect"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 560,
														columnNumber: 29
													}, this)]
												}, bank.id, true, {
													fileName: _jsxFileName,
													lineNumber: 539,
													columnNumber: 27
												}, this);
											})
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 530,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 522,
										columnNumber: 19
									}, this),
									bankStep === 4 && /* @__PURE__ */ _jsxDEV("div", {
										className: "bank-step-body",
										children: [
											/* @__PURE__ */ _jsxDEV("div", {
												className: "bank-review-hero",
												children: [/* @__PURE__ */ _jsxDEV(Icon, {
													name: "CheckCircle2",
													size: 18,
													className: "bank-review-hero-icon"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 582,
													columnNumber: 23
												}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
													className: "bank-review-hero-title",
													children: "Bank statement review ready"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 584,
													columnNumber: 25
												}, this), /* @__PURE__ */ _jsxDEV("p", {
													className: "bank-review-hero-desc",
													children: "Anika AI has prepared a conduct summary for the customer and analyst."
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 585,
													columnNumber: 25
												}, this)] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 583,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 581,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ _jsxDEV("div", {
												className: "bank-review-metrics",
												children: [
													/* @__PURE__ */ _jsxDEV("div", {
														className: "bank-review-metric green",
														children: [/* @__PURE__ */ _jsxDEV("div", {
															className: "bank-review-metric-label",
															children: "Income confidence"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 592,
															columnNumber: 25
														}, this), /* @__PURE__ */ _jsxDEV("div", {
															className: "bank-review-metric-value",
															children: "92%"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 593,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 591,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ _jsxDEV("div", {
														className: "bank-review-metric yellow",
														children: [/* @__PURE__ */ _jsxDEV("div", {
															className: "bank-review-metric-label",
															children: "Expenses"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 596,
															columnNumber: 25
														}, this), /* @__PURE__ */ _jsxDEV("div", {
															className: "bank-review-metric-value",
															children: "Review"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 597,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 595,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ _jsxDEV("div", {
														className: "bank-review-metric accent",
														children: [/* @__PURE__ */ _jsxDEV("div", {
															className: "bank-review-metric-label",
															children: "Risk flags"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 600,
															columnNumber: 25
														}, this), /* @__PURE__ */ _jsxDEV("div", {
															className: "bank-review-metric-value",
															children: "3"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 601,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 599,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 590,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ _jsxDEV("div", {
												className: "bank-review-checks",
												children: [/* @__PURE__ */ _jsxDEV("div", {
													className: "bank-review-checks-title",
													children: "Anika AI checks"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 605,
													columnNumber: 23
												}, this), /* @__PURE__ */ _jsxDEV("div", {
													className: "bank-review-checks-grid",
													children: ANIKA_CHECKS.map((check) => /* @__PURE__ */ _jsxDEV("div", {
														className: "bank-review-check-item",
														children: [/* @__PURE__ */ _jsxDEV(Icon, {
															name: "Check",
															size: 11,
															className: "bank-review-check-icon"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 609,
															columnNumber: 29
														}, this), check]
													}, check, true, {
														fileName: _jsxFileName,
														lineNumber: 608,
														columnNumber: 27
													}, this))
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 606,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 604,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 580,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "bank-step-nav",
										children: [/* @__PURE__ */ _jsxDEV("button", {
											type: "button",
											className: "bank-nav-back",
											onClick: handleBack,
											disabled: bankStep === 0,
											children: "← Back"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 620,
											columnNumber: 19
										}, this), bankStep < FLOW_STEPS.length - 1 ? /* @__PURE__ */ _jsxDEV("button", {
											type: "button",
											className: "bank-nav-next",
											onClick: handleNext,
											disabled: !canContinue,
											children: "Continue →"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 629,
											columnNumber: 21
										}, this) : /* @__PURE__ */ _jsxDEV("button", {
											type: "button",
											className: "bank-nav-next",
											onClick: handleComplete,
											children: "Complete setup →"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 638,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 619,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 413,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 385,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV(BankSummaryPanel, {
							selectedBanks,
							months
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 647,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 384,
						columnNumber: 11
					}, this)]
				},
				void 0,
				true,
				{
					fileName: _jsxFileName,
					lineNumber: 356,
					columnNumber: 9
				},
				this
			),
			/* @__PURE__ */ _jsxDEV(BtnRow, { children: [/* @__PURE__ */ _jsxDEV(BtnGhost, {
				onClick: prev,
				children: "← Back"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 653,
				columnNumber: 9
			}, this), /* @__PURE__ */ _jsxDEV(BtnPrimary, {
				onClick: next,
				children: "Continue →"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 654,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 652,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(SecureConnectModal, {
				bank: modalBank,
				onClose: () => setModalBank(null),
				onConnect: () => {
					if (modalBank) connectBank(modalBank.id);
					setModalBank(null);
				},
				onUpload: (bank) => {
					setModalBank(null);
					handlePdfUpload(bank);
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 657,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(BankStatementUpload, {
				visible: showUploadModal,
				bankName: uploadBank?.name,
				onClose: () => setShowUploadModal(false),
				onSubmit: handleUploadSubmit,
				autoOpenPicker: true
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 670,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 319,
		columnNumber: 5
	}, this);
}
_s2(ConnectBanksScreen, "Kl+Arrfrz8+Nn99WlHC8iAkYaaw=", false, function() {
	return [useApp];
});
_c3 = ConnectBanksScreen;
var _c, _c2, _c3;
$RefreshReg$(_c, "BankSummaryPanel");
$RefreshReg$(_c2, "SecureConnectModal");
$RefreshReg$(_c3, "ConnectBanksScreen");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/screens/ConnectBanksScreen.jsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("B:/axio/axio-react/src/screens/ConnectBanksScreen.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("B:/axio/axio-react/src/screens/ConnectBanksScreen.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "B:/axio/axio-react/src/screens/ConnectBanksScreen.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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QkFDWjtXQUVROzs7O3FCQUVULHdCQUFDLFVBQUQ7V0FBUSxNQUFLO1dBQVMsV0FBVTtXQUFnQixTQUFTO3FCQUFnQjtXQUVoRTs7OzttQkFFUDs7Ozs7O1NBQ0Y7Ozs7O2dCQUNGOzs7OztnQkFHTix3QkFBQyxrQkFBRDtPQUFpQztPQUF1QjtPQUFVOzs7O2VBQzlEOzs7OztjQUNGOzs7Ozs7Ozs7OztHQUdSLHdCQUFDLFFBQUQsYUFDRSx3QkFBQyxVQUFEO0lBQVUsU0FBUztjQUFNO0lBQWlCOzs7O2FBQzFDLHdCQUFDLFlBQUQ7SUFBWSxTQUFTO2NBQU07SUFBdUI7Ozs7WUFDM0M7Ozs7O0dBRVQsd0JBQUMsb0JBQUQ7SUFDRSxNQUFNO0lBQ04sZUFBZSxhQUFhLEtBQUs7SUFDakMsaUJBQWlCO0tBQ2YsSUFBSSxXQUFXLFlBQVksVUFBVSxHQUFHO0tBQ3hDLGFBQWEsS0FBSzs7SUFFcEIsV0FBVyxTQUFTO0tBQ2xCLGFBQWEsS0FBSztLQUNsQixnQkFBZ0IsS0FBSzs7SUFFdkI7Ozs7O0dBRUYsd0JBQUMscUJBQUQ7SUFDRSxTQUFTO0lBQ1QsVUFBVSxZQUFZO0lBQ3RCLGVBQWUsbUJBQW1CLE1BQU07SUFDeEMsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQjs7Ozs7R0FDRTs7Ozs7Ozs7O0VBRVQiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQ29ubmVjdEJhbmtzU2NyZWVuLmpzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyLvu79pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMYW5kbWFyaywgU3BhcmtsZXMgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb24vSWNvbic7XHJcbmltcG9ydCB7IEJhbmtTdGF0ZW1lbnRVcGxvYWQgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1vbi9CYW5rU3RhdGVtZW50VXBsb2FkJztcclxuaW1wb3J0IHsgdXNlQXBwIH0gZnJvbSAnLi4vY29udGV4dC9BcHBDb250ZXh0JztcclxuaW1wb3J0IHsgU2NyZWVuSGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb24vU2NyZWVuSGVhZGVyJztcclxuaW1wb3J0IHsgQnRuUHJpbWFyeSwgQnRuR2hvc3QsIEJ0blJvdyB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL0J1dHRvbic7XHJcbmltcG9ydCB7IGdldFN0ZXAgfSBmcm9tICcuLi9jb25zdGFudHMvc2NyZWVucyc7XHJcbmltcG9ydCAnLi9Db25uZWN0QmFua3NTY3JlZW4uY3NzJztcclxuXHJcbi8vIOKUgOKUgOKUgCBTdGF0aWMgZGF0YSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuXHJcbmNvbnN0IEJBTktfSVRFTVMgPSBbXHJcbiAgeyBpZDogJ2NiYScsICAgaWNvbjogJ0xhbmRtYXJrJywgIG5hbWU6ICdDb21tb253ZWFsdGgnLCB0eXBlOiAnTWFqb3InICAgIH0sXHJcbiAgeyBpZDogJ2FueicsICAgaWNvbjogJ0J1aWxkaW5nMicsIG5hbWU6ICdBTlonLCAgICAgICAgICB0eXBlOiAnTWFqb3InICAgIH0sXHJcbiAgeyBpZDogJ25hYicsICAgaWNvbjogJ0Jhbmtub3RlJywgIG5hbWU6ICdOQUInLCAgICAgICAgICB0eXBlOiAnTWFqb3InICAgIH0sXHJcbiAgeyBpZDogJ3diYycsICAgaWNvbjogJ1N0b3JlJywgICAgIG5hbWU6ICdXZXN0cGFjJywgICAgICB0eXBlOiAnTWFqb3InICAgIH0sXHJcbiAgeyBpZDogJ2luZycsICAgaWNvbjogJ1NwYXJrbGVzJywgIG5hbWU6ICdJTkcnLCAgICAgICAgICB0eXBlOiAnRGlnaXRhbCcgIH0sXHJcbiAgeyBpZDogJ21hYycsICAgaWNvbjogJ0JhckNoYXJ0MicsIG5hbWU6ICdNYWNxdWFyaWUnLCAgICB0eXBlOiAnRGlnaXRhbCcgIH0sXHJcbiAgeyBpZDogJ2JlbicsICAgaWNvbjogJ0hvbWUnLCAgICAgIG5hbWU6ICdCZW5kaWdvJywgICAgICB0eXBlOiAnUmVnaW9uYWwnIH0sXHJcbiAgeyBpZDogJ290aGVyJywgaWNvbjogJ1BsdXMnLCAgICAgIG5hbWU6ICdPdGhlcicsICAgICAgICB0eXBlOiAnUmVnaW9uYWwnIH0sXHJcbl07XHJcblxyXG5jb25zdCBGTE9XX1NURVBTID0gW1xyXG4gIHsgaWQ6ICdpbnRybycsICAgdGl0bGU6ICdDb25uZWN0IGJhbmtzJywgICAgc2hvcnQ6ICdXaHkgd2UgbmVlZCB0aGlzJywgIHN0ZXBJY29uOiAnU3BhcmtsZXMnICAgICB9LFxyXG4gIHsgaWQ6ICdiYW5rcycsICAgdGl0bGU6ICdDaG9vc2UgYmFua3MnLCAgICAgc2hvcnQ6ICdNdWx0aXBsZSBiYW5rcycsICAgIHN0ZXBJY29uOiAnQnVpbGRpbmcyJyAgICB9LFxyXG4gIHsgaWQ6ICdwZXJpb2QnLCAgdGl0bGU6ICdTdGF0ZW1lbnQgcGVyaW9kJywgc2hvcnQ6ICczLCA2IG9yIDEyIG1vbnRocycsIHN0ZXBJY29uOiAnQ2FsZW5kYXJEYXlzJyB9LFxyXG4gIHsgaWQ6ICdjb25uZWN0JywgdGl0bGU6ICdTZWN1cmUgY29ubmVjdCcsICAgc2hvcnQ6ICdCYW5rIHJlZGlyZWN0JywgICAgIHN0ZXBJY29uOiAnTG9jaycgICAgICAgICB9LFxyXG4gIHsgaWQ6ICdyZXZpZXcnLCAgdGl0bGU6ICdSZXZpZXcnLCAgICAgICAgICAgc2hvcnQ6ICdBbmlrYSBzdW1tYXJ5JywgICAgIHN0ZXBJY29uOiAnQmFyQ2hhcnQyJyAgICB9LFxyXG5dO1xyXG5cclxuY29uc3QgSU5UUk9fQkVORUZJVFMgPSBbXHJcbiAgeyBpY29uOiAnQ2hlY2tDaXJjbGUyJywgbGFiZWw6ICdWZXJpZnkgaW5jb21lJyAgIH0sXHJcbiAgeyBpY29uOiAnQ3JlZGl0Q2FyZCcsICAgbGFiZWw6ICdSZXZpZXcgZXhwZW5zZXMnIH0sXHJcbiAgeyBpY29uOiAnQWxlcnRDaXJjbGUnLCAgbGFiZWw6ICdGaW5kIHJpc2sgZmxhZ3MnIH0sXHJcbiAgeyBpY29uOiAnVGFyZ2V0JywgICAgICAgbGFiZWw6ICdNYXRjaCBsZW5kZXJzJyAgIH0sXHJcbl07XHJcblxyXG5jb25zdCBBTklLQV9DSEVDS1MgPSBbXHJcbiAgJ0luY29tZSBkZXBvc2l0cycsICdQYXkgY3ljbGUnLFxyXG4gICdMaXZpbmcgZXhwZW5zZXMnLCAnQk5QTCBhbmQgbG9hbnMnLFxyXG4gICdEaXNob25vdXJzJywgICAgICAnU3BlbmRpbmcgYmVoYXZpb3VyJyxcclxuXTtcclxuXHJcbi8vIOKUgOKUgOKUgCBCYW5rIHN1bW1hcnkgcGFuZWwgKGRlc2t0b3Agc2lkZWJhcikg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXHJcblxyXG5mdW5jdGlvbiBCYW5rU3VtbWFyeVBhbmVsKHsgc2VsZWN0ZWRCYW5rcywgbW9udGhzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYW5rLXN1bW1hcnktcGFuZWxcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5rLXN1bW1hcnktaGVhZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5rLXN1bW1hcnktaWNvblwiPlxyXG4gICAgICAgICAgPEljb24gbmFtZT1cIlphcFwiIHNpemU9ezE5fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmstc3VtbWFyeS1leWVicm93XCI+QXBwbGljYXRpb24gY2hlY2s8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFuay1zdW1tYXJ5LXRpdGxlXCI+QmFuayBkYXRhIHNldHVwPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmstc3VtbWFyeS1zdGF0c1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFuay1zdW1tYXJ5LXN0YXQgYWNjZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmstc3VtbWFyeS1zdGF0LWxhYmVsXCI+U2VsZWN0ZWQgYmFua3M8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFuay1zdW1tYXJ5LXN0YXQtdmFsdWVcIj57c2VsZWN0ZWRCYW5rcy5sZW5ndGh9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5rLXN1bW1hcnktc3RhdCBtdXRlZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5rLXN1bW1hcnktc3RhdC1sYWJlbFwiPlN0YXRlbWVudCBwZXJpb2Q8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFuay1zdW1tYXJ5LXN0YXQtdmFsdWVcIj57bW9udGhzfSBtb250aHM8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFuay1zdW1tYXJ5LWFuaWthXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5rLXN1bW1hcnktYW5pa2EtdGl0bGVcIj5BbmlrYSBBSSB3aWxsIHJldmlldzo8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmstc3VtbWFyeS1hbmlrYS1kZXNjXCI+XHJcbiAgICAgICAgICBJbmNvbWUsIGV4cGVuc2VzLCBjYXNoZmxvdywgbGlhYmlsaXRpZXMsIGRpc2hvbm91cnMsIEJOUEwsIGdhbWJsaW5nIGluZGljYXRvcnMsIHJlY3VycmluZ1xyXG4gICAgICAgICAgcmVwYXltZW50cyBhbmQgbGVuZGVyIHJlYWRpbmVzcy5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG4vLyDilIDilIDilIAgU2VjdXJlIENvbm5lY3QgTW9kYWwg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXHJcblxyXG5mdW5jdGlvbiBTZWN1cmVDb25uZWN0TW9kYWwoeyBiYW5rLCBvbkNsb3NlLCBvbkNvbm5lY3QsIG9uVXBsb2FkIH0pIHtcclxuICBjb25zdCBbY3JuLCBzZXRDcm5dICAgICAgICAgICA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc2hvd1B3ZCwgc2V0U2hvd1B3ZF0gICA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY29uc2VudGVkLCBzZXRDb25zZW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBjYW5TdWJtaXQgPSBjcm4udHJpbSgpLmxlbmd0aCA+IDAgJiYgcGFzc3dvcmQudHJpbSgpLmxlbmd0aCA+IDAgJiYgY29uc2VudGVkO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGJhbmspIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgIHJldHVybiAoKSA9PiB7IGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJzsgfTtcclxuICB9LCBbYmFua10pO1xyXG5cclxuICByZXR1cm4gY3JlYXRlUG9ydGFsKFxyXG4gICAgPEFuaW1hdGVQcmVzZW5jZT5cclxuICAgICAge2JhbmsgJiYgKFxyXG4gICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzYy1tb2RhbC1vdmVybGF5XCJcclxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxyXG4gICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XHJcbiAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAgfX1cclxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMiB9fVxyXG4gICAgICAgICAgb25DbGljaz17b25DbG9zZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzYy1tb2RhbFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHg6ICctNTAlJyB9fVxyXG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHNjYWxlOiAwLjk0LCB5OiAtMTIgfX1cclxuICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCBzY2FsZTogMSwgeTogMCB9fVxyXG4gICAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAsIHNjYWxlOiAwLjk0LCB5OiAtMTIgfX1cclxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyB0eXBlOiAnc3ByaW5nJywgZGFtcGluZzogMjgsIHN0aWZmbmVzczogMzIwIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJzYy1tb2RhbC1jbG9zZVwiIG9uQ2xpY2s9e29uQ2xvc2V9IGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG4gICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJYXCIgc2l6ZT17MTR9IC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYy1tb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjLW1vZGFsLWxvY2staWNvblwiPlxyXG4gICAgICAgICAgICAgICAgPEljb24gbmFtZT1cIkxvY2tcIiBzaXplPXsyMH0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYy1tb2RhbC10aXRsZVwiPlNlY3VyZSBBdXRoZW50aWNhdGlvbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYy1tb2RhbC1zdWJcIj5cclxuICAgICAgICAgICAgICAgICAgRW50ZXIgeW91ciBDUk4gYW5kIHBhc3N3b3JkIHRvIHNlY3VyZWx5IGNvbm5lY3QgeW91ciBhY2NvdW50LlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYy1tb2RhbC1iYW5rLXJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2MtbW9kYWwtYmFuay1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPXtiYW5rLmljb259IHNpemU9ezE0fSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNjLW1vZGFsLWJhbmstbmFtZVwiPntiYW5rLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNjLW1vZGFsLWJhbmstdHlwZVwiPntiYW5rLnR5cGV9IEJhbms8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYy1tb2RhbC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzYy1tb2RhbC1sYWJlbFwiPkN1c3RvbWVyIFJlZmVyZW5jZSBOdW1iZXIgKENSTik8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2MtbW9kYWwtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIENSTlwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y3JufVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDcm4oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYy1tb2RhbC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzYy1tb2RhbC1sYWJlbFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjLW1vZGFsLWlucHV0LXdyYXBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzYy1tb2RhbC1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9e3Nob3dQd2QgPyAndGV4dCcgOiAncGFzc3dvcmQnfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4gZS5rZXkgPT09ICdFbnRlcicgJiYgY2FuU3VibWl0ICYmIG9uQ29ubmVjdCgpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNjLW1vZGFsLXB3ZC10b2dnbGVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UHdkKChwKSA9PiAhcCl9XHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e3Nob3dQd2QgPyAnSGlkZSBwYXNzd29yZCcgOiAnU2hvdyBwYXNzd29yZCd9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9e3Nob3dQd2QgPyAnRXllT2ZmJyA6ICdFeWUnfSBzaXplPXsxNH0gLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2MtbW9kYWwtbm90aWNlXCI+XHJcbiAgICAgICAgICAgICAgPEljb24gbmFtZT1cIkxvY2tcIiBzaXplPXsxM30gY2xhc3NOYW1lPVwic2MtbW9kYWwtbm90aWNlLWljb25cIiAvPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjLW1vZGFsLW5vdGljZS10aXRsZVwiPkVuY3J5cHRlZCAmYW1wOyBSZWFkLU9ubHkgQWNjZXNzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjLW1vZGFsLW5vdGljZS1kZXNjXCI+XHJcbiAgICAgICAgICAgICAgICAgIFlvdXIgYmFua2luZyBjcmVkZW50aWFscyBhcmUgZW5jcnlwdGVkIGR1cmluZyB0cmFuc21pc3Npb24uIFN0b2lrIGFuZCBMdW1pbyBGaW5hbmNlXHJcbiAgICAgICAgICAgICAgICAgIGRvIG5vdCBzdG9yZSB5b3VyIGxvZ2luIGRldGFpbHMuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic2MtbW9kYWwtY29uc2VudFwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNjLW1vZGFsLWNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NvbnNlbnRlZH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29uc2VudGVkKGUudGFyZ2V0LmNoZWNrZWQpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2MtbW9kYWwtY29uc2VudC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICBDb25zZW50IHRvIGFjY2VzcyBmaW5hbmNpYWwgZGF0YVxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2MtbW9kYWwtY29uc2VudC1kZXNjXCI+XHJcbiAgICAgICAgICAgICAgICAgIEJ5IGNvbnRpbnVpbmcsIHlvdSBhdXRob3Jpc2UgU3RvaWsgYW5kIEx1bWlvIEZpbmFuY2UgdG8gc2VjdXJlbHkgYWNjZXNzIHlvdXJcclxuICAgICAgICAgICAgICAgICAgYmFua2luZyB0cmFuc2FjdGlvbiBoaXN0b3J5IGZvciBhc3Nlc3NtZW50LCB2ZXJpZmljYXRpb24sIGFuZCBsZW5kZXIgbWF0Y2hpbmcuXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYy1tb2RhbC1jdGFcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNjLW1vZGFsLWNvbm5lY3QtYnRuXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNhblN1Ym1pdCAmJiBvbkNvbm5lY3QoKX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshY2FuU3VibWl0fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENvbm5lY3QgQmFuayBTZWN1cmVseVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2MtbW9kYWwtdXBsb2FkLWJ0blwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblVwbG9hZChiYW5rKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBVcGxvYWQgQmFuayBTdGF0ZW1lbnRzIEluc3RlYWRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9BbmltYXRlUHJlc2VuY2U+LFxyXG4gICAgZG9jdW1lbnQuYm9keVxyXG4gICk7XHJcbn1cclxuXHJcbi8vIOKUgOKUgOKUgCBNYWluIHNjcmVlbiDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb25uZWN0QmFua3NTY3JlZW4oKSB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgdXBkYXRlU3RhdGUsIG5leHQsIHByZXYgfSA9IHVzZUFwcCgpO1xyXG5cclxuICBjb25zdCBbYmFua1N0ZXAsIHNldEJhbmtTdGVwXSAgICAgICAgID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkQmFua0lkcywgc2V0U2VsZWN0ZWRCYW5rSWRzXSA9IHVzZVN0YXRlKFsnY2JhJywgJ25hYiddKTtcclxuICBjb25zdCBbbW9udGhzLCBzZXRNb250aHNdICAgICAgICAgICAgID0gdXNlU3RhdGUoNik7XHJcbiAgY29uc3QgW2JhbmtTZWFyY2gsIHNldEJhbmtTZWFyY2hdICAgICA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbW9kYWxCYW5rLCBzZXRNb2RhbEJhbmtdICAgICAgID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3VwbG9hZEJhbmssIHNldFVwbG9hZEJhbmtdICAgICA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtzaG93VXBsb2FkTW9kYWwsIHNldFNob3dVcGxvYWRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHNlbGVjdGVkQmFua3MgPSBCQU5LX0lURU1TLmZpbHRlcigoYikgPT4gc2VsZWN0ZWRCYW5rSWRzLmluY2x1ZGVzKGIuaWQpKTtcclxuICBjb25zdCBiYW5rQ29ubmVjdGlvbnMgPSBzdGF0ZS5iYW5rQ29ubmVjdGlvbnMgfHwge307XHJcbiAgY29uc3QgYWxsU2VsZWN0ZWRCYW5rc0Nvbm5lY3RlZCA9IHNlbGVjdGVkQmFua3MubGVuZ3RoID4gMCAmJiBzZWxlY3RlZEJhbmtzLmV2ZXJ5KChiYW5rKSA9PiBiYW5rQ29ubmVjdGlvbnNbYmFuay5pZF0/LmNvbm5lY3RlZCk7XHJcbiAgY29uc3QgZmlsdGVyZWRCYW5rcyA9IHVzZU1lbW8oXHJcbiAgICAoKSA9PiBCQU5LX0lURU1TLmZpbHRlcigoYikgPT4gYi5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoYmFua1NlYXJjaC50b0xvd2VyQ2FzZSgpKSksXHJcbiAgICBbYmFua1NlYXJjaF1cclxuICApO1xyXG5cclxuICBjb25zdCBjYW5Db250aW51ZSA9IGJhbmtTdGVwICE9PSAxIHx8IHNlbGVjdGVkQmFua0lkcy5sZW5ndGggPiAwO1xyXG4gIGNvbnN0IHBjdCA9IE1hdGgucm91bmQoKChiYW5rU3RlcCArIDEpIC8gRkxPV19TVEVQUy5sZW5ndGgpICogMTAwKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlQmFuayA9IChpZCkgPT5cclxuICAgIHNldFNlbGVjdGVkQmFua0lkcygocHJldikgPT5cclxuICAgICAgcHJldi5pbmNsdWRlcyhpZCkgPyBwcmV2LmZpbHRlcigoYmlkKSA9PiBiaWQgIT09IGlkKSA6IFsuLi5wcmV2LCBpZF1cclxuICAgICk7XHJcblxyXG4gIGNvbnN0IGNvbm5lY3RCYW5rID0gKGlkKSA9PiB7XHJcbiAgICB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgIGJhbmtDb25uZWN0ZWQ6IHRydWUsXHJcbiAgICAgIHNlbGVjdGVkQmFuazogaWQsXHJcbiAgICAgIGJhbmtDb25uZWN0aW9uU3VtbWFyeTogJ0Nvbm5lY3RlZCB2aWEgc2VjdXJlIGF1dGhlbnRpY2F0aW9uJyxcclxuICAgICAgYmFua0Nvbm5lY3Rpb25zOiB7XHJcbiAgICAgICAgLi4uYmFua0Nvbm5lY3Rpb25zLFxyXG4gICAgICAgIFtpZF06IHtcclxuICAgICAgICAgIC4uLihiYW5rQ29ubmVjdGlvbnNbaWRdIHx8IHt9KSxcclxuICAgICAgICAgIGNvbm5lY3RlZDogdHJ1ZSxcclxuICAgICAgICAgIG1ldGhvZDogJ3NlY3VyZScsXHJcbiAgICAgICAgICBmaWxlczogYmFua0Nvbm5lY3Rpb25zW2lkXT8uZmlsZXMgfHwgW10sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7IGlmIChjYW5Db250aW51ZSkgc2V0QmFua1N0ZXAoKHApID0+IE1hdGgubWluKEZMT1dfU1RFUFMubGVuZ3RoIC0gMSwgcCArIDEpKTsgfTtcclxuICBjb25zdCBoYW5kbGVCYWNrID0gKCkgPT4gc2V0QmFua1N0ZXAoKHApID0+IE1hdGgubWF4KDAsIHAgLSAxKSk7XHJcblxyXG4gIGNvbnN0IGJ1aWxkU3VtbWFyeSA9ICgpID0+XHJcbiAgICBgJHtzZWxlY3RlZEJhbmtJZHMubGVuZ3RofSBiYW5rJHtzZWxlY3RlZEJhbmtJZHMubGVuZ3RoICE9PSAxID8gJ3MnIDogJyd9IMK3ICR7bW9udGhzfSBtb250aHMgwrcgQ0RSIGFjY3JlZGl0ZWRgO1xyXG5cclxuICBjb25zdCBoYW5kbGVDb21wbGV0ZSA9ICgpID0+IHtcclxuICAgIHVwZGF0ZVN0YXRlKHtcclxuICAgICAgYmFua0Nvbm5lY3RlZDogdHJ1ZSxcclxuICAgICAgc2VsZWN0ZWRCYW5rOiBzZWxlY3RlZEJhbmtJZHNbMF0gfHwgbnVsbCxcclxuICAgICAgdXBsb2FkZWREb2NzOiB7IC4uLnN0YXRlLnVwbG9hZGVkRG9jcywgYmFua3N0YXRlbWVudHM6IHRydWUgfSxcclxuICAgICAgYmFua0Nvbm5lY3Rpb25TdW1tYXJ5OiBidWlsZFN1bW1hcnkoKSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBkZlVwbG9hZCA9IChiYW5rKSA9PiB7XHJcbiAgICBzZXRVcGxvYWRCYW5rKGJhbmspO1xyXG4gICAgc2V0U2hvd1VwbG9hZE1vZGFsKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVVwbG9hZFN1Ym1pdCA9IChmaWxlcykgPT4ge1xyXG4gICAgaWYgKCF1cGxvYWRCYW5rKSByZXR1cm47XHJcbiAgICB1cGRhdGVTdGF0ZSh7XHJcbiAgICAgIGJhbmtDb25uZWN0ZWQ6IHRydWUsXHJcbiAgICAgIHNlbGVjdGVkQmFuazogdXBsb2FkQmFuay5pZCxcclxuICAgICAgdXBsb2FkZWREb2NzOiB7IC4uLnN0YXRlLnVwbG9hZGVkRG9jcywgYmFua3N0YXRlbWVudHM6IHRydWUgfSxcclxuICAgICAgYmFua0Nvbm5lY3Rpb25TdW1tYXJ5OiAnU3RhdGVtZW50IFVwbG9hZGVkIMK3IENEUiBhY2NyZWRpdGVkJyxcclxuICAgICAgYmFua0Nvbm5lY3Rpb25zOiB7XHJcbiAgICAgICAgLi4uYmFua0Nvbm5lY3Rpb25zLFxyXG4gICAgICAgIFt1cGxvYWRCYW5rLmlkXToge1xyXG4gICAgICAgICAgLi4uKGJhbmtDb25uZWN0aW9uc1t1cGxvYWRCYW5rLmlkXSB8fCB7fSksXHJcbiAgICAgICAgICBjb25uZWN0ZWQ6IHRydWUsXHJcbiAgICAgICAgICBtZXRob2Q6ICdzdGF0ZW1lbnQnLFxyXG4gICAgICAgICAgZmlsZXM6IGZpbGVzLm1hcCgoZmlsZSkgPT4gKHsgbmFtZTogZmlsZS5uYW1lLCBzaXplOiBmaWxlLnNpemUgfSkpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHNldFNob3dVcGxvYWRNb2RhbChmYWxzZSk7XHJcbiAgICBzZXRVcGxvYWRCYW5rKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURpc2Nvbm5lY3QgPSAoKSA9PlxyXG4gICAgdXBkYXRlU3RhdGUoeyBiYW5rQ29ubmVjdGVkOiBmYWxzZSwgc2VsZWN0ZWRCYW5rOiBudWxsLCBiYW5rQ29ubmVjdGlvblN1bW1hcnk6IG51bGwsIGJhbmtDb25uZWN0aW9uczoge30gfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlbi1lbnRlclwiPlxyXG4gICAgICA8U2NyZWVuSGVhZGVyXHJcbiAgICAgICAgZXllYnJvdz17YFN0ZXAgJHtnZXRTdGVwKCdjb25uZWN0YmFua3MnKX0gwrcgQ29ubmVjdCBiYW5rc2B9XHJcbiAgICAgICAgdGl0bGU9XCJTZWN1cmUgYmFua1wiXHJcbiAgICAgICAgdGl0bGVHcmFkaWVudD1cImNvbm5lY3Rpb25cIlxyXG4gICAgICAgIHN1Yj17XHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaC1zdWItcm93XCI+XHJcbiAgICAgICAgICAgICAgPExhbmRtYXJrIHNpemU9ezEzfSBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLWhvdmVyKScgfX0gLz5cclxuICAgICAgICAgICAgICA8c3Bhbj5Db25uZWN0IHlvdXIgYmFuayBhY2NvdW50cyBzZWN1cmVseS48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2gtc3ViLXJvd1wiPlxyXG4gICAgICAgICAgICAgIDxTcGFya2xlcyBzaXplPXsxM30gc3R5bGU9e3sgY29sb3I6ICd2YXIoLS1ob3ZlciknIH19IC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4+QW5pa2EgQUkgdmVyaWZpZXMgeW91ciBpbmNvbWUgYW5kIHByZXBhcmVzIHlvdXIgbGVuZGVyIGFzc2Vzc21lbnQgYXV0b21hdGljYWxseS48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIH1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIHsvKiDilIDilIAgQ29ubmVjdGVkIHN0YXRlIOKUgOKUgCAqL31cclxuICAgICAge2FsbFNlbGVjdGVkQmFua3NDb25uZWN0ZWQgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5rLWNvbm5lY3RlZC1jYXJkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmstY29ubmVjdGVkLWljb25cIj5cclxuICAgICAgICAgICAgPEljb24gbmFtZT1cIkNoZWNrQ2lyY2xlMlwiIHNpemU9ezIwfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmstY29ubmVjdGVkLWJvZHlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5rLWNvbm5lY3RlZC10aXRsZVwiPkJhbmsgc3RhdGVtZW50cyBjb25uZWN0ZWQ8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5rLWNvbm5lY3RlZC1zdWJcIj5cclxuICAgICAgICAgICAgICB7c3RhdGUuYmFua0Nvbm5lY3Rpb25TdW1tYXJ5IHx8ICdDb25uZWN0ZWQgwrcgQ0RSIGFjY3JlZGl0ZWQnfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYmFuay1jb25uZWN0ZWQtZGlzY29ubmVjdFwiIG9uQ2xpY2s9e2hhbmRsZURpc2Nvbm5lY3R9PlxyXG4gICAgICAgICAgICBEaXNjb25uZWN0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICAvKiDilIDilIAgQWN0aXZlIGJhbmsgZmxvdyDilIDilIAgKi9cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmstc2VjdGlvblwiPlxyXG5cclxuICAgICAgICAgIHsvKiBIZXJvICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5rLWhlcm9cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5rLWhlcm8taW5uZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmstaGVyby1jb3B5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmstaGVyby1leWVicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJCdWlsZGluZzJcIiBzaXplPXsxMX0gLz5cclxuICAgICAgICAgICAgICAgICAgICBMdW1pbyDDlyBTdG9pa1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYmFuay1oZXJvLXRpdGxlXCI+Q29ubmVjdCB5b3VyIGJhbmsgc3RhdGVtZW50czwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJiYW5rLWhlcm8tZGVzY1wiPlxyXG4gICAgICAgICAgICAgICAgICBTZWxlY3QgeW91ciBiYW5rcywgZ2l2ZSBjb25zZW50LCBhbmQgbGV0IEFuaWthIEFJIHNlY3VyZWx5IHJldmlldyB5b3VyIGJhbmtpbmdcclxuICAgICAgICAgICAgICAgICAgY29uZHVjdCBmb3IgZmFzdGVyIGxlbmRlciBtYXRjaGluZy5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFuay1oZXJvLWNoaXBzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhbmstaGVyby1jaGlwXCI+Tm8gUERGczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFuay1oZXJvLWNoaXBcIj5NdWx0aS1iYW5rPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYW5rLWhlcm8tY2hpcFwiPkNEUiBjb25zZW50PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5rLWhlcm8taWNvbi13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiQnVpbGRpbmcyXCIgc2l6ZT17MjZ9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgey8qIEZsb3cgZ3JpZDogc3RlcCBjb250ZW50ICsgZGVza3RvcCBzdW1tYXJ5ICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5rLWZsb3ctZ3JpZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmstZmxvdy1tYWluXCI+XHJcblxyXG4gICAgICAgICAgICAgIHsvKiBTdGVwIHByb2dyZXNzICovfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFuay1wcm9ncmVzcy1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmstcHJvZ3Jlc3Mtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhbmstcHJvZ3Jlc3MtbGFiZWxcIj5TdGVwIHtiYW5rU3RlcCArIDF9IG9mIHtGTE9XX1NURVBTLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhbmstcHJvZ3Jlc3MtcGN0XCI+e3BjdH0lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmstcHJvZ3Jlc3MtdHJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiYW5rLXByb2dyZXNzLWZpbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgd2lkdGg6IGAke3BjdH0lYCB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNDUsIGVhc2U6ICdlYXNlT3V0JyB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmstc3RlcC1waWxsc1wiPlxyXG4gICAgICAgICAgICAgICAgICB7RkxPV19TVEVQUy5tYXAoKHMsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtzLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYmFuay1zdGVwLXBpbGwke2kgPT09IGJhbmtTdGVwID8gJyBhY3RpdmUnIDogaSA8IGJhbmtTdGVwID8gJyBkb25lJyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3MudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICB7LyogU3RlcCBjb250ZW50IGNhcmQgKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5rLWNvbnRlbnQtY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5rLWNvbnRlbnQtaGVhZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFuay1jb250ZW50LWV5ZWJyb3dcIj57RkxPV19TVEVQU1tiYW5rU3RlcF0uc2hvcnR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImJhbmstY29udGVudC10aXRsZVwiPntGTE9XX1NURVBTW2JhbmtTdGVwXS50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5rLWNvbnRlbnQtc3RlcC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT17RkxPV19TVEVQU1tiYW5rU3RlcF0uc3RlcEljb259IHNpemU9ezE4fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBTdGVwIDAg4oCUIEludHJvICovfVxyXG4gICAgICAgICAgICAgICAge2JhbmtTdGVwID09PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5rLXN0ZXAtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFuay1pbnRyby1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFuay1pbnRyby1ib3gtdGl0bGVcIj5GYXN0LCBzaW1wbGUgYW5kIHNlY3VyZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYmFuay1pbnRyby1ib3gtZGVzY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBJbnN0ZWFkIG9mIHVwbG9hZGluZyBiYW5rIHN0YXRlbWVudCBQREZzLCB5b3UgY2FuIHNlY3VyZWx5IGNvbm5lY3QgeW91ciBiYW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRzLiBBbmlrYSBBSSByZWFkcyB0aGUgZGF0YSBhbmQgcHJlcGFyZXMgYSBmaW5hbmNlIGFzc2Vzc21lbnQgc3VtbWFyeS5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmstYmVuZWZpdHMtZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge0lOVFJPX0JFTkVGSVRTLm1hcCgoYikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Yi5sYWJlbH0gY2xhc3NOYW1lPVwiYmFuay1iZW5lZml0LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPXtiLmljb259IHNpemU9ezE1fSBjbGFzc05hbWU9XCJiYW5rLWJlbmVmaXQtaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2IubGFiZWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIFN0ZXAgMSDigJQgQmFua3MgKi99XHJcbiAgICAgICAgICAgICAgICB7YmFua1N0ZXAgPT09IDEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmstc3RlcC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5rLXNlYXJjaC13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiU2VhcmNoXCIgc2l6ZT17MTR9IGNsYXNzTmFtZT1cImJhbmstc2VhcmNoLWljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJhbmstc2VhcmNoLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2JhbmtTZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QmFua1NlYXJjaChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIHlvdXIgYmFua+KAplwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFuay1ncmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZmlsdGVyZWRCYW5rcy5tYXAoKGJhbmspID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWN0aXZlID0gc2VsZWN0ZWRCYW5rSWRzLmluY2x1ZGVzKGJhbmsuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YmFuay5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYmFuay1idG4ke2FjdGl2ZSA/ICcgYWN0aXZlJyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVCYW5rKGJhbmsuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFuay1idG4tbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmstYnRuLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPXtiYW5rLmljb259IHNpemU9ezE2fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmstYnRuLW5hbWVcIj57YmFuay5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFuay1idG4tdHlwZVwiPntiYW5rLnR5cGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXthY3RpdmUgPyAnQ2hlY2tDaXJjbGUyJyA6ICdQbHVzJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MTV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJhbmstYnRuLWNoZWNrJHthY3RpdmUgPyAnIGFjdGl2ZScgOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEJhbmtJZHMubGVuZ3RoID09PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFuay13YXJuXCI+U2VsZWN0IGF0IGxlYXN0IG9uZSBiYW5rIHRvIGNvbnRpbnVlLjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogU3RlcCAyIOKAlCBQZXJpb2QgKi99XHJcbiAgICAgICAgICAgICAgICB7YmFua1N0ZXAgPT09IDIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmstc3RlcC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYmFuay1wZXJpb2QtZGVzY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ2hvb3NlIGhvdyBtYW55IG1vbnRocyBvZiBiYW5raW5nIGFjdGl2aXR5IEFuaWthIEFJIHNob3VsZCBhbmFseXNlLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmstcGVyaW9kLWdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtbMywgNiwgMTJdLm1hcCgocCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJhbmstcGVyaW9kLW9wdGlvbiR7bW9udGhzID09PSBwID8gJyBhY3RpdmUnIDogJyd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb250aHMocCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYW5rLXBlcmlvZC1udW1cIj57cH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFuay1wZXJpb2QtdW5pdFwiPm1vbnRoczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmstcGVyaW9kLW5vdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFuay1wZXJpb2Qtbm90ZS10aXRsZVwiPlJlY29tbWVuZGVkOiA2IG1vbnRoczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYmFuay1wZXJpb2Qtbm90ZS1kZXNjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdvb2QgZm9yIG1vc3QgcGVyc29uYWwgbG9hbnMgYW5kIGNhciBsb2Fucy4gVXNlIDEyIG1vbnRocyBmb3IgY29tcGxleCBpbmNvbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYtZW1wbG95ZWQgYXBwbGljYW50cyBvciBzcGVjaWZpYyBsZW5kZXIgcmVxdWVzdHMuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogU3RlcCAzIOKAlCBDb25uZWN0ICovfVxyXG4gICAgICAgICAgICAgICAge2JhbmtTdGVwID09PSAzICYmIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5rLXN0ZXAtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFuay1jb25uZWN0LWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFuay1jb25uZWN0LWluZm8tdGl0bGVcIj5TZWN1cmUgYmFuayByZWRpcmVjdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYmFuay1jb25uZWN0LWluZm8tZGVzY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMdW1pbyBkb2VzIG5vdCBjb2xsZWN0IGludGVybmV0IGJhbmtpbmcgcGFzc3dvcmRzLiBZb3Ugd2lsbCBiZSByZWRpcmVjdGVkIHRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHlvdXIgYmFuayBvciBhcHByb3ZlZCBPcGVuIEJhbmtpbmcgcHJvdmlkZXIgdG8gYXV0aGVudGljYXRlIHNlY3VyZWx5LlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFuay1jb25uZWN0LWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEJhbmtzLm1hcCgoYmFuaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gYmFua0Nvbm5lY3Rpb25zW2JhbmsuaWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0Nvbm5lY3RlZCA9ICEhY29ubmVjdGlvbj8uY29ubmVjdGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGNvbm5lY3Rpb24/Lm1ldGhvZCA9PT0gJ3N0YXRlbWVudCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdDb25uZWN0ZWQgdmlhIFN0YXRlbWVudCBVcGxvYWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnQ29ubmVjdGVkIMK3IHJlYWQtb25seSc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtiYW5rLmlkfSBjbGFzc05hbWU9XCJiYW5rLWNvbm5lY3QtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5rLWNvbm5lY3QtaXRlbS1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFuay1jb25uZWN0LWl0ZW0taWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9e2JhbmsuaWNvbn0gc2l6ZT17MTZ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFuay1jb25uZWN0LWl0ZW0tbmFtZVwiPntiYW5rLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5rLWNvbm5lY3QtaXRlbS1zdWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0Nvbm5lY3RlZCA/IGxhYmVsIDogJ1JlYWR5IHRvIGNvbm5lY3QnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb25uZWN0aW9uPy5maWxlcz8ubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmstY29ubmVjdC11cGxvYWQtZmlsZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Nvbm5lY3Rpb24uZmlsZXMubWFwKChmaWxlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgJHtiYW5rLmlkfS0ke2luZGV4fWB9IGNsYXNzTmFtZT1cImJhbmstY29ubmVjdC11cGxvYWQtZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpbGUubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYmFuay1jb25uZWN0LWJ0biR7aXNDb25uZWN0ZWQgPyAnIGRvbmUnIDogJyd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gIWlzQ29ubmVjdGVkICYmIHNldE1vZGFsQmFuayhiYW5rKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzQ29ubmVjdGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhbmstY29ubmVjdC1kb25lXCI+PEljb24gbmFtZT1cIkNoZWNrXCIgc2l6ZT17MTJ9IC8+IENvbm5lY3RlZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29ubmVjdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogU3RlcCA0IOKAlCBSZXZpZXcgKi99XHJcbiAgICAgICAgICAgICAgICB7YmFua1N0ZXAgPT09IDQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmstc3RlcC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5rLXJldmlldy1oZXJvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiQ2hlY2tDaXJjbGUyXCIgc2l6ZT17MTh9IGNsYXNzTmFtZT1cImJhbmstcmV2aWV3LWhlcm8taWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmstcmV2aWV3LWhlcm8tdGl0bGVcIj5CYW5rIHN0YXRlbWVudCByZXZpZXcgcmVhZHk8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYmFuay1yZXZpZXctaGVyby1kZXNjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQW5pa2EgQUkgaGFzIHByZXBhcmVkIGEgY29uZHVjdCBzdW1tYXJ5IGZvciB0aGUgY3VzdG9tZXIgYW5kIGFuYWx5c3QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFuay1yZXZpZXctbWV0cmljc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5rLXJldmlldy1tZXRyaWMgZ3JlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5rLXJldmlldy1tZXRyaWMtbGFiZWxcIj5JbmNvbWUgY29uZmlkZW5jZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmstcmV2aWV3LW1ldHJpYy12YWx1ZVwiPjkyJTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmstcmV2aWV3LW1ldHJpYyB5ZWxsb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5rLXJldmlldy1tZXRyaWMtbGFiZWxcIj5FeHBlbnNlczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmstcmV2aWV3LW1ldHJpYy12YWx1ZVwiPlJldmlldzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmstcmV2aWV3LW1ldHJpYyBhY2NlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5rLXJldmlldy1tZXRyaWMtbGFiZWxcIj5SaXNrIGZsYWdzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFuay1yZXZpZXctbWV0cmljLXZhbHVlXCI+MzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5rLXJldmlldy1jaGVja3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFuay1yZXZpZXctY2hlY2tzLXRpdGxlXCI+QW5pa2EgQUkgY2hlY2tzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmstcmV2aWV3LWNoZWNrcy1ncmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtBTklLQV9DSEVDS1MubWFwKChjaGVjaykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjaGVja30gY2xhc3NOYW1lPVwiYmFuay1yZXZpZXctY2hlY2staXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cIkNoZWNrXCIgc2l6ZT17MTF9IGNsYXNzTmFtZT1cImJhbmstcmV2aWV3LWNoZWNrLWljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoZWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIEludGVybmFsIHN0ZXAgbmF2aWdhdGlvbiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFuay1zdGVwLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmFuay1uYXYtYmFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQmFja31cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YmFua1N0ZXAgPT09IDB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICDihpAgQmFja1xyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAge2JhbmtTdGVwIDwgRkxPV19TVEVQUy5sZW5ndGggLSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmFuay1uYXYtbmV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjYW5Db250aW51ZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDb250aW51ZSDihpJcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJiYW5rLW5hdi1uZXh0XCIgb25DbGljaz17aGFuZGxlQ29tcGxldGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ29tcGxldGUgc2V0dXAg4oaSXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogRGVza3RvcCBzdW1tYXJ5IHBhbmVsICovfVxyXG4gICAgICAgICAgICA8QmFua1N1bW1hcnlQYW5lbCBzZWxlY3RlZEJhbmtzPXtzZWxlY3RlZEJhbmtzfSBtb250aHM9e21vbnRoc30gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPEJ0blJvdz5cclxuICAgICAgICA8QnRuR2hvc3Qgb25DbGljaz17cHJldn0+4oaQIEJhY2s8L0J0bkdob3N0PlxyXG4gICAgICAgIDxCdG5QcmltYXJ5IG9uQ2xpY2s9e25leHR9PkNvbnRpbnVlIOKGkjwvQnRuUHJpbWFyeT5cclxuICAgICAgPC9CdG5Sb3c+XHJcblxyXG4gICAgICA8U2VjdXJlQ29ubmVjdE1vZGFsXHJcbiAgICAgICAgYmFuaz17bW9kYWxCYW5rfVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldE1vZGFsQmFuayhudWxsKX1cclxuICAgICAgICBvbkNvbm5lY3Q9eygpID0+IHtcclxuICAgICAgICAgIGlmIChtb2RhbEJhbmspIGNvbm5lY3RCYW5rKG1vZGFsQmFuay5pZCk7XHJcbiAgICAgICAgICBzZXRNb2RhbEJhbmsobnVsbCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBvblVwbG9hZD17KGJhbmspID0+IHtcclxuICAgICAgICAgIHNldE1vZGFsQmFuayhudWxsKTtcclxuICAgICAgICAgIGhhbmRsZVBkZlVwbG9hZChiYW5rKTtcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPEJhbmtTdGF0ZW1lbnRVcGxvYWRcclxuICAgICAgICB2aXNpYmxlPXtzaG93VXBsb2FkTW9kYWx9XHJcbiAgICAgICAgYmFua05hbWU9e3VwbG9hZEJhbms/Lm5hbWV9XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd1VwbG9hZE1vZGFsKGZhbHNlKX1cclxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlVXBsb2FkU3VibWl0fVxyXG4gICAgICAgIGF1dG9PcGVuUGlja2VyPXt0cnVlfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXX0=