export const SCREENS = [
  // GET STARTED
  { id: "eligibility",        label: "Eligibility check",    group: "Get started"   }, // 1
  { id: "product",            label: "Product selection",    group: "Get started"   }, // 2
  { id: "loandetails",        label: "Loan details",         group: "Get started"   }, // 3

  // PROFILE
  { id: "profile",            label: "Your profile",         group: "Profile"       }, // 4
  { id: "income",             label: "Income",               group: "Profile"       }, // 5
  { id: "assets",             label: "Assets",               group: "Profile"       }, // 6
  { id: "liabilities",        label: "Liabilities",          group: "Profile"       }, // 7
  { id: "expenses",           label: "Living expenses",      group: "Profile"       }, // 8

  // APPLICATION
  { id: "privacy",            label: "Privacy & consent",    group: "Application"   }, // 9
  { id: "summary",            label: "Final summary",        group: "Application"   }, // 10

  // MATCHING
  { id: "lenders",            label: "Your matches",         group: "Matching"      }, // 11

  // ACCOUNT SETUP
  { id: "signup",             label: "Create account",       group: "Account Setup" }, // 12

  // VERIFICATION
  { id: "documentsupload",    label: "Document uploads",     group: "Verification"  }, // 13
  { id: "connectbanks",       label: "Connect banks",        group: "Verification"  }, // 14
  { id: "verificationstatus", label: "Verification status",  group: "Verification"  }, // 15

  // PORTAL
  { id: "dashboard",          label: "Dashboard",            group: "Portal"        }, // 16
];

/** Returns the 1-based step number for any screen id. */
export function getStep(id) {
  const idx = SCREENS.findIndex((s) => s.id === id);
  return idx === -1 ? 1 : idx + 1;
}

export const TRUST_SIDEBAR = [
  {
    icon: "ShieldCheck",
    text: "Zero credit file impact during matching",
  },
  {
    icon: "Lock",
    text: "Bank-grade 256-bit encryption",
  },
  {
    icon: "Smartphone",
    text: "Electronic only — no pressure calls",
  },
];