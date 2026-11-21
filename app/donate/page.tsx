import type { Metadata } from "next";
import DonateClient from "./DonateClient";

export const metadata: Metadata = {
  title: "Donate",
  description: "Support OMARO's work on IRIS: no ads, and nothing about you sold.",
};

export default function DonatePage() {
  return <DonateClient />;
}
