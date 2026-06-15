import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/App.jsx");const lazy = __vite__cjsImport0_react["lazy"]; const Suspense = __vite__cjsImport0_react["Suspense"]; const useState = __vite__cjsImport0_react["useState"]; const useCallback = __vite__cjsImport0_react["useCallback"];const _jsxDEV = __vite__cjsImport5_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=03f24bd8";
import { useApp } from "/src/context/AppContext.jsx";
import { Sidebar } from "/src/components/layout/Sidebar.jsx";
import { TopBar } from "/src/components/layout/TopBar.jsx";
import { FloatingScrollNav } from "/src/components/common/FloatingScrollNav.jsx";
var _jsxFileName = "B:/axio/axio-react/src/App.jsx";
import __vite__cjsImport5_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=03f24bd8";
var _s = $RefreshSig$();
const EligibilityScreen = lazy(_c = () => import("/src/screens/EligibilityScreen.jsx").then((m) => ({ default: m.EligibilityScreen })));
_c2 = EligibilityScreen;
const ProductScreen = lazy(_c3 = () => import("/src/screens/ProductScreen.jsx").then((m) => ({ default: m.ProductScreen })));
_c4 = ProductScreen;
const LoanDetailsScreen = lazy(_c5 = () => import("/src/screens/LoanDetailsScreen.jsx").then((m) => ({ default: m.LoanDetailsScreen })));
_c6 = LoanDetailsScreen;
const ProfileScreen = lazy(_c7 = () => import("/src/screens/ProfileScreen.jsx").then((m) => ({ default: m.ProfileScreen })));
_c8 = ProfileScreen;
const IncomeScreen = lazy(_c9 = () => import("/src/screens/IncomeScreen.jsx").then((m) => ({ default: m.IncomeScreen })));
_c10 = IncomeScreen;
const AssetsScreen = lazy(_c11 = () => import("/src/screens/AssetsScreen.jsx").then((m) => ({ default: m.AssetsScreen })));
_c12 = AssetsScreen;
const LiabilitiesScreen = lazy(_c13 = () => import("/src/screens/LiabilitiesScreen.jsx").then((m) => ({ default: m.LiabilitiesScreen })));
_c14 = LiabilitiesScreen;
const ExpensesScreen = lazy(_c15 = () => import("/src/screens/ExpensesScreen.jsx").then((m) => ({ default: m.ExpensesScreen })));
_c16 = ExpensesScreen;
const PrivacyScreen = lazy(_c17 = () => import("/src/screens/PrivacyScreen.jsx").then((m) => ({ default: m.PrivacyScreen })));
_c18 = PrivacyScreen;
const SummaryScreen = lazy(_c19 = () => import("/src/screens/SummaryScreen.jsx").then((m) => ({ default: m.SummaryScreen })));
_c20 = SummaryScreen;
const LendersScreen = lazy(_c21 = () => import("/src/screens/LendersScreen.jsx").then((m) => ({ default: m.LendersScreen })));
_c22 = LendersScreen;
const CreateAccount = lazy(_c23 = () => import("/src/screens/CreateAccount.jsx").then((m) => ({ default: m.CreateAccount })));
_c24 = CreateAccount;
const DocumentsUploadScreen = lazy(_c25 = () => import("/src/screens/DocumentsUploadScreen.jsx").then((m) => ({ default: m.DocumentsUploadScreen })));
_c26 = DocumentsUploadScreen;
const ConnectBanksScreen = lazy(_c27 = () => import("/src/screens/ConnectBanksScreen.jsx").then((m) => ({ default: m.ConnectBanksScreen })));
_c28 = ConnectBanksScreen;
const VerificationStatusScreen = lazy(_c29 = () => import("/src/screens/VerificationStatusScreen.jsx").then((m) => ({ default: m.VerificationStatusScreen })));
_c30 = VerificationStatusScreen;
const DashboardScreen = lazy(_c31 = () => import("/src/screens/DashboardScreen.jsx").then((m) => ({ default: m.DashboardScreen })));
_c32 = DashboardScreen;
// Order MUST match screens.js exactly (index → component)
const SCREEN_COMPONENTS = [
	EligibilityScreen,
	ProductScreen,
	LoanDetailsScreen,
	ProfileScreen,
	IncomeScreen,
	AssetsScreen,
	LiabilitiesScreen,
	ExpensesScreen,
	PrivacyScreen,
	SummaryScreen,
	LendersScreen,
	CreateAccount,
	DocumentsUploadScreen,
	ConnectBanksScreen,
	VerificationStatusScreen,
	DashboardScreen
];
function ScreenFallback() {
	return /* @__PURE__ */ _jsxDEV("div", {
		style: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			minHeight: 200,
			color: "var(--text2)",
			fontSize: 13
		},
		children: "Loading…"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 46,
		columnNumber: 5
	}, this);
}
_c33 = ScreenFallback;
export default function App() {
	_s();
	const { state } = useApp();
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const openSidebar = useCallback(() => setSidebarOpen(true), []);
	const closeSidebar = useCallback(() => setSidebarOpen(false), []);
	const CurrentScreen = SCREEN_COMPONENTS[state.currentScreen] ?? SCREEN_COMPONENTS[0];
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "app",
		children: [/* @__PURE__ */ _jsxDEV(Sidebar, {
			open: sidebarOpen,
			onClose: closeSidebar
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 63,
			columnNumber: 7
		}, this), /* @__PURE__ */ _jsxDEV("div", {
			className: "main-content",
			children: [
				/* @__PURE__ */ _jsxDEV(TopBar, { onMenuClick: openSidebar }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 65,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "screen-area",
					children: /* @__PURE__ */ _jsxDEV(Suspense, {
						fallback: /* @__PURE__ */ _jsxDEV(ScreenFallback, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 67,
							columnNumber: 31
						}, this),
						children: /* @__PURE__ */ _jsxDEV(CurrentScreen, {}, state.currentScreen, false, {
							fileName: _jsxFileName,
							lineNumber: 68,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 67,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 66,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV(FloatingScrollNav, { hidden: sidebarOpen }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 71,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 64,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 62,
		columnNumber: 5
	}, this);
}
_s(App, "hiZinQo4jypaRUkZxnTYUFG3yIs=", false, function() {
	return [useApp];
});
_c34 = App;
var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _c28, _c29, _c30, _c31, _c32, _c33, _c34;
$RefreshReg$(_c, "EligibilityScreen$lazy");
$RefreshReg$(_c2, "EligibilityScreen");
$RefreshReg$(_c3, "ProductScreen$lazy");
$RefreshReg$(_c4, "ProductScreen");
$RefreshReg$(_c5, "LoanDetailsScreen$lazy");
$RefreshReg$(_c6, "LoanDetailsScreen");
$RefreshReg$(_c7, "ProfileScreen$lazy");
$RefreshReg$(_c8, "ProfileScreen");
$RefreshReg$(_c9, "IncomeScreen$lazy");
$RefreshReg$(_c10, "IncomeScreen");
$RefreshReg$(_c11, "AssetsScreen$lazy");
$RefreshReg$(_c12, "AssetsScreen");
$RefreshReg$(_c13, "LiabilitiesScreen$lazy");
$RefreshReg$(_c14, "LiabilitiesScreen");
$RefreshReg$(_c15, "ExpensesScreen$lazy");
$RefreshReg$(_c16, "ExpensesScreen");
$RefreshReg$(_c17, "PrivacyScreen$lazy");
$RefreshReg$(_c18, "PrivacyScreen");
$RefreshReg$(_c19, "SummaryScreen$lazy");
$RefreshReg$(_c20, "SummaryScreen");
$RefreshReg$(_c21, "LendersScreen$lazy");
$RefreshReg$(_c22, "LendersScreen");
$RefreshReg$(_c23, "CreateAccount$lazy");
$RefreshReg$(_c24, "CreateAccount");
$RefreshReg$(_c25, "DocumentsUploadScreen$lazy");
$RefreshReg$(_c26, "DocumentsUploadScreen");
$RefreshReg$(_c27, "ConnectBanksScreen$lazy");
$RefreshReg$(_c28, "ConnectBanksScreen");
$RefreshReg$(_c29, "VerificationStatusScreen$lazy");
$RefreshReg$(_c30, "VerificationStatusScreen");
$RefreshReg$(_c31, "DashboardScreen$lazy");
$RefreshReg$(_c32, "DashboardScreen");
$RefreshReg$(_c33, "ScreenFallback");
$RefreshReg$(_c34, "App");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/App.jsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("B:/axio/axio-react/src/App.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("B:/axio/axio-react/src/App.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "B:/axio/axio-react/src/App.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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QUFrQixNQUFNLGtCQUFrQixrQkFBa0I7Q0FFbEYsT0FDRSx3QkFBQyxPQUFEO0VBQUssV0FBVTtZQUFmLENBQ0Usd0JBQUMsU0FBRDtHQUFTLE1BQU07R0FBYSxTQUFTO0dBQWdCOzs7O1lBQ3JELHdCQUFDLE9BQUQ7R0FBSyxXQUFVO2FBQWY7SUFDRSx3QkFBQyxRQUFELEVBQVEsYUFBYSxhQUFlOzs7OztJQUNwQyx3QkFBQyxPQUFEO0tBQUssV0FBVTtlQUNiLHdCQUFDLFVBQUQ7TUFBVSxVQUFVLHdCQUFDLGdCQUFELEVBQWtCOzs7OztnQkFDcEMsd0JBQUMsZUFBRCxFQUEyQyxFQUF2QixNQUFNOzs7O2NBQWlCO01BQ2xDOzs7OztLQUNQOzs7OztJQUNOLHdCQUFDLG1CQUFELEVBQW1CLFFBQVEsYUFBZTs7Ozs7SUFDdEM7Ozs7O1dBQ0Y7Ozs7Ozs7OztFQUVUIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkFwcC5qc3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGF6eSwgU3VzcGVuc2UsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlQXBwIH0gZnJvbSAnLi9jb250ZXh0L0FwcENvbnRleHQnO1xyXG5pbXBvcnQgeyBTaWRlYmFyIH0gZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9TaWRlYmFyJztcbmltcG9ydCB7IFRvcEJhciB9IGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvVG9wQmFyJztcbmltcG9ydCB7IEZsb2F0aW5nU2Nyb2xsTmF2IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbW1vbi9GbG9hdGluZ1Njcm9sbE5hdic7XG5cclxuY29uc3QgRWxpZ2liaWxpdHlTY3JlZW4gICAgICAgID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vc2NyZWVucy9FbGlnaWJpbGl0eVNjcmVlbicpLnRoZW4obSA9PiAoeyBkZWZhdWx0OiBtLkVsaWdpYmlsaXR5U2NyZWVuIH0pKSk7XHJcbmNvbnN0IFByb2R1Y3RTY3JlZW4gICAgICAgICAgICA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL3NjcmVlbnMvUHJvZHVjdFNjcmVlbicpLnRoZW4obSA9PiAoeyBkZWZhdWx0OiBtLlByb2R1Y3RTY3JlZW4gfSkpKTtcclxuY29uc3QgTG9hbkRldGFpbHNTY3JlZW4gICAgICAgID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vc2NyZWVucy9Mb2FuRGV0YWlsc1NjcmVlbicpLnRoZW4obSA9PiAoeyBkZWZhdWx0OiBtLkxvYW5EZXRhaWxzU2NyZWVuIH0pKSk7XHJcbmNvbnN0IFByb2ZpbGVTY3JlZW4gICAgICAgICAgICA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL3NjcmVlbnMvUHJvZmlsZVNjcmVlbicpLnRoZW4obSA9PiAoeyBkZWZhdWx0OiBtLlByb2ZpbGVTY3JlZW4gfSkpKTtcclxuY29uc3QgSW5jb21lU2NyZWVuICAgICAgICAgICAgID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vc2NyZWVucy9JbmNvbWVTY3JlZW4nKS50aGVuKG0gPT4gKHsgZGVmYXVsdDogbS5JbmNvbWVTY3JlZW4gfSkpKTtcclxuY29uc3QgQXNzZXRzU2NyZWVuICAgICAgICAgICAgID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vc2NyZWVucy9Bc3NldHNTY3JlZW4nKS50aGVuKG0gPT4gKHsgZGVmYXVsdDogbS5Bc3NldHNTY3JlZW4gfSkpKTtcclxuY29uc3QgTGlhYmlsaXRpZXNTY3JlZW4gICAgICAgID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vc2NyZWVucy9MaWFiaWxpdGllc1NjcmVlbicpLnRoZW4obSA9PiAoeyBkZWZhdWx0OiBtLkxpYWJpbGl0aWVzU2NyZWVuIH0pKSk7XHJcbmNvbnN0IEV4cGVuc2VzU2NyZWVuICAgICAgICAgICA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL3NjcmVlbnMvRXhwZW5zZXNTY3JlZW4nKS50aGVuKG0gPT4gKHsgZGVmYXVsdDogbS5FeHBlbnNlc1NjcmVlbiB9KSkpO1xyXG5jb25zdCBQcml2YWN5U2NyZWVuICAgICAgICAgICAgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9zY3JlZW5zL1ByaXZhY3lTY3JlZW4nKS50aGVuKG0gPT4gKHsgZGVmYXVsdDogbS5Qcml2YWN5U2NyZWVuIH0pKSk7XHJcbmNvbnN0IFN1bW1hcnlTY3JlZW4gICAgICAgICAgICA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL3NjcmVlbnMvU3VtbWFyeVNjcmVlbicpLnRoZW4obSA9PiAoeyBkZWZhdWx0OiBtLlN1bW1hcnlTY3JlZW4gfSkpKTtcclxuY29uc3QgTGVuZGVyc1NjcmVlbiAgICAgICAgICAgID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vc2NyZWVucy9MZW5kZXJzU2NyZWVuJykudGhlbihtID0+ICh7IGRlZmF1bHQ6IG0uTGVuZGVyc1NjcmVlbiB9KSkpO1xyXG5jb25zdCBDcmVhdGVBY2NvdW50ICAgICAgICAgICAgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9zY3JlZW5zL0NyZWF0ZUFjY291bnQnKS50aGVuKG0gPT4gKHsgZGVmYXVsdDogbS5DcmVhdGVBY2NvdW50IH0pKSk7XHJcbmNvbnN0IERvY3VtZW50c1VwbG9hZFNjcmVlbiAgICA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL3NjcmVlbnMvRG9jdW1lbnRzVXBsb2FkU2NyZWVuJykudGhlbihtID0+ICh7IGRlZmF1bHQ6IG0uRG9jdW1lbnRzVXBsb2FkU2NyZWVuIH0pKSk7XHJcbmNvbnN0IENvbm5lY3RCYW5rc1NjcmVlbiAgICAgICA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL3NjcmVlbnMvQ29ubmVjdEJhbmtzU2NyZWVuJykudGhlbihtID0+ICh7IGRlZmF1bHQ6IG0uQ29ubmVjdEJhbmtzU2NyZWVuIH0pKSk7XHJcbmNvbnN0IFZlcmlmaWNhdGlvblN0YXR1c1NjcmVlbiA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL3NjcmVlbnMvVmVyaWZpY2F0aW9uU3RhdHVzU2NyZWVuJykudGhlbihtID0+ICh7IGRlZmF1bHQ6IG0uVmVyaWZpY2F0aW9uU3RhdHVzU2NyZWVuIH0pKSk7XHJcbmNvbnN0IERhc2hib2FyZFNjcmVlbiAgICAgICAgICA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL3NjcmVlbnMvRGFzaGJvYXJkU2NyZWVuJykudGhlbihtID0+ICh7IGRlZmF1bHQ6IG0uRGFzaGJvYXJkU2NyZWVuIH0pKSk7XHJcblxyXG4vLyBPcmRlciBNVVNUIG1hdGNoIHNjcmVlbnMuanMgZXhhY3RseSAoaW5kZXgg4oaSIGNvbXBvbmVudClcclxuY29uc3QgU0NSRUVOX0NPTVBPTkVOVFMgPSBbXHJcbiAgRWxpZ2liaWxpdHlTY3JlZW4sICAgICAgICAvLyAgMCAgU3RlcCAxICAgZWxpZ2liaWxpdHlcclxuICBQcm9kdWN0U2NyZWVuLCAgICAgICAgICAgIC8vICAxICBTdGVwIDIgICBwcm9kdWN0XHJcbiAgTG9hbkRldGFpbHNTY3JlZW4sICAgICAgICAvLyAgMiAgU3RlcCAzICAgbG9hbmRldGFpbHNcclxuICBQcm9maWxlU2NyZWVuLCAgICAgICAgICAgIC8vICAzICBTdGVwIDQgICBwcm9maWxlXHJcbiAgSW5jb21lU2NyZWVuLCAgICAgICAgICAgICAvLyAgNCAgU3RlcCA1ICAgaW5jb21lXHJcbiAgQXNzZXRzU2NyZWVuLCAgICAgICAgICAgICAvLyAgNSAgU3RlcCA2ICAgYXNzZXRzXHJcbiAgTGlhYmlsaXRpZXNTY3JlZW4sICAgICAgICAvLyAgNiAgU3RlcCA3ICAgbGlhYmlsaXRpZXNcclxuICBFeHBlbnNlc1NjcmVlbiwgICAgICAgICAgIC8vICA3ICBTdGVwIDggICBleHBlbnNlc1xyXG4gIFByaXZhY3lTY3JlZW4sICAgICAgICAgICAgLy8gIDggIFN0ZXAgOSAgIHByaXZhY3lcclxuICBTdW1tYXJ5U2NyZWVuLCAgICAgICAgICAgIC8vICA5ICBTdGVwIDEwICBzdW1tYXJ5XHJcbiAgTGVuZGVyc1NjcmVlbiwgICAgICAgICAgICAvLyAxMCAgU3RlcCAxMSAgbGVuZGVyc1xyXG4gIENyZWF0ZUFjY291bnQsICAgICAgICAgICAgLy8gMTEgIFN0ZXAgMTIgIHNpZ251cFxyXG4gIERvY3VtZW50c1VwbG9hZFNjcmVlbiwgICAgLy8gMTIgIFN0ZXAgMTMgIGRvY3VtZW50c3VwbG9hZFxyXG4gIENvbm5lY3RCYW5rc1NjcmVlbiwgICAgICAgLy8gMTMgIFN0ZXAgMTQgIGNvbm5lY3RiYW5rc1xyXG4gIFZlcmlmaWNhdGlvblN0YXR1c1NjcmVlbiwgLy8gMTQgIFN0ZXAgMTUgIHZlcmlmaWNhdGlvbnN0YXR1c1xyXG4gIERhc2hib2FyZFNjcmVlbiwgICAgICAgICAgLy8gMTUgIFN0ZXAgMTYgIGRhc2hib2FyZFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gU2NyZWVuRmFsbGJhY2soKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBtaW5IZWlnaHQ6IDIwMCwgY29sb3I6ICd2YXIoLS10ZXh0MiknLCBmb250U2l6ZTogMTMgfX0+XHJcbiAgICAgIExvYWRpbmfigKZcclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcclxuICBjb25zdCB7IHN0YXRlIH0gPSB1c2VBcHAoKTtcclxuICBjb25zdCBbc2lkZWJhck9wZW4sIHNldFNpZGViYXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgb3BlblNpZGViYXIgID0gdXNlQ2FsbGJhY2soKCkgPT4gc2V0U2lkZWJhck9wZW4odHJ1ZSksIFtdKTtcclxuICBjb25zdCBjbG9zZVNpZGViYXIgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRTaWRlYmFyT3BlbihmYWxzZSksIFtdKTtcclxuXHJcbiAgY29uc3QgQ3VycmVudFNjcmVlbiA9IFNDUkVFTl9DT01QT05FTlRTW3N0YXRlLmN1cnJlbnRTY3JlZW5dID8/IFNDUkVFTl9DT01QT05FTlRTWzBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cclxuICAgICAgPFNpZGViYXIgb3Blbj17c2lkZWJhck9wZW59IG9uQ2xvc2U9e2Nsb3NlU2lkZWJhcn0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnRcIj5cclxuICAgICAgICA8VG9wQmFyIG9uTWVudUNsaWNrPXtvcGVuU2lkZWJhcn0gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlbi1hcmVhXCI+XG4gICAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8U2NyZWVuRmFsbGJhY2sgLz59PlxuICAgICAgICAgICAgPEN1cnJlbnRTY3JlZW4ga2V5PXtzdGF0ZS5jdXJyZW50U2NyZWVufSAvPlxuICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8RmxvYXRpbmdTY3JvbGxOYXYgaGlkZGVuPXtzaWRlYmFyT3Blbn0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19