import type { Metadata } from "next";
import AccountClient from "./AccountClient";

export const metadata: Metadata = {
  title: "Account",
  description: "Create or access your OMARO account.",
};

export default function AccountPage() {
  return <AccountClient />;
}
