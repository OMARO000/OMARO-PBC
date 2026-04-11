import type { Metadata } from "next";
import DonateClient from "./DonateClient";

export const metadata: Metadata = {
  title: "Donate",
  description: "Support the OMARO mission — no ads, no investors, no extraction.",
};

export default function DonatePage() {
  return <DonateClient />;
}
