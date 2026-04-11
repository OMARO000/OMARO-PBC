import { NextRequest, NextResponse } from "next/server";

// TODO: install stripe package and set STRIPE_SECRET_KEY env var
// import Stripe from "stripe";
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { amountCents } = await req.json();

    if (!amountCents || typeof amountCents !== "number" || amountCents < 50) {
      return NextResponse.json({ error: "Invalid amount." }, { status: 400 });
    }

    // TODO: replace stub with real Stripe Checkout session
    // const session = await stripe.checkout.sessions.create({
    //   payment_method_types: ["card"],
    //   line_items: [{
    //     price_data: {
    //       currency: "usd",
    //       product_data: { name: "OMARO Donation" },
    //       unit_amount: amountCents,
    //     },
    //     quantity: 1,
    //   }],
    //   mode: "payment",
    //   success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/donate/thank-you`,
    //   cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/donate`,
    // });
    // return NextResponse.json({ url: session.url });

    return NextResponse.json(
      { error: "Stripe not yet configured. Set STRIPE_SECRET_KEY and uncomment the Stripe code." },
      { status: 503 }
    );
  } catch {
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}
