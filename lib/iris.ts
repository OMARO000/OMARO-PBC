// IRIS's parts by their public names, and where it runs. One list for the home page and /iris.
export const LAYERS: { name: string; what: string; status?: string }[] = [
  { name: "Your rights", what: "What each privacy policy and terms let a company do with your data: sell it, train AI on it, keep it, delete it, and more." },
  { name: "What this page runs", what: "Which companies a page or an app contacts, and what its scripts do while you use it." },
  { name: "Read the code", what: "For apps and sites with public code, what that code does with your data, in plain words." },
  { name: "Page Control", what: "Block one company on one site, refuse cookie walls, and tell every site not to sell or share your data." },
  { name: "Infrastructure", what: "Your connection: your network, DNS and VPN, and which company owns each address your apps talk to." },
  { name: "Company record", what: "What a company has been found to do, from a permanent public record.", status: "coming" },
];

export const CHANNELS: { name: string; status: string }[] = [
  { name: "Firefox add-on", status: "in testing" },
  { name: "Linux app", status: "in testing" },
  { name: "GrapheneOS app", status: "next" },
];
