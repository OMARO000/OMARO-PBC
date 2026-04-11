import { NextRequest, NextResponse } from "next/server";
import { hashAccountNumber } from "@/lib/account";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { number } = await req.json();
    if (!number || typeof number !== "string") {
      return NextResponse.json({ error: "Invalid account number." }, { status: 400 });
    }

    const hash = await hashAccountNumber(number);

    const { error } = await supabase
      .from("omaro_accounts")
      .insert({ account_hash: hash });

    if (error) {
      if (error.code === "23505") {
        // Unique violation — number already registered (astronomically unlikely)
        return NextResponse.json({ error: "Account already exists." }, { status: 409 });
      }
      return NextResponse.json({ error: "Failed to create account." }, { status: 500 });
    }

    const res = NextResponse.json({ ok: true });
    res.cookies.set("omaro_account", number, {
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365, // 1 year
    });
    return res;
  } catch {
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}
