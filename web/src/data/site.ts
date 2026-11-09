export const appUrl: string =
  import.meta.env.PUBLIC_APP_URL || "http://localhost:3000/dashboard";

export const appBaseUrl = appUrl.replace(/\/dashboard\/?$/, "");

export const blocks = [
  "Logo",
  "Header",
  "Heading",
  "Text",
  "Button",
  "Image",
  "Banner",
  "Card",
  "Callout",
  "Columns",
  "List",
  "Links",
  "Socials",
  "Meta",
  "Divider",
  "Spacer",
  "Footer",
];

export const features = [
  {
    title: "Canvas",
    body: "Add a logo, heading, text, and a button. Every block shares the same gutter, so a from-scratch email stays aligned.",
  },
  {
    title: "Campaigns",
    body: "Draft, preview, and send from one place. The editor writes table-based HTML that inbox clients can actually render.",
  },
  {
    title: "Audience",
    body: "Keep contacts in lists, then pick who receives the next send without leaving the workspace.",
  },
  {
    title: "Templates",
    body: "Save layouts you like and reuse them. Start from a security notice, a code email, a product update, or a blank page.",
  },
];

export const presets = [
  { id: "basic", name: "Simple letter", detail: "Logo, heading, paragraph, button, footer" },
  { id: "security", name: "Security alert", detail: "Accent bar, headline, sections" },
  { id: "code", name: "Sign-in code", detail: "Logo rule and a code box" },
  { id: "product", name: "Product update", detail: "Color field, banner, card" },
  { id: "renewal", name: "Renewal notice", detail: "Button and labeled details" },
] as const;

export type PresetId = (typeof presets)[number]["id"];

export const steps = [
  {
    title: "Open a canvas",
    body: "Start empty or pick a layout. New blocks inherit the email alignment, accent color, and side margin.",
  },
  {
    title: "Stack the letter",
    body: "Headings sit tight on body copy. Buttons follow text. Footers get a little more air. You do not fight the gap.",
  },
  {
    title: "Send from campaigns",
    body: "The same document becomes HTML for the inbox. Colors, radius, and alignment travel with the theme.",
  },
];

export const surfaces = [
  { name: "Dashboard", path: "/dashboard", note: "Activity and recent sends" },
  { name: "Campaigns", path: "/campaigns", note: "Write and ship letters" },
  { name: "Editor", path: "/editor", note: "The block canvas" },
  { name: "Subscribers", path: "/subscribers", note: "People and lists" },
  { name: "Templates", path: "/templates", note: "Reusable layouts" },
  { name: "Media", path: "/media", note: "Images for your letters" },
  { name: "Analytics", path: "/analytics", note: "Opens, clicks, and sends" },
  { name: "Settings", path: "/settings", note: "Workspace defaults" },
].map((item) => ({ ...item, href: `${appBaseUrl}${item.path}` }));
