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

    const { data, error } = await supabase
      .from("omaro_accounts")
      .select("id")
      .eq("account_hash", hash)
      .single();

    if (error || !data) {
      return NextResponse.json({ error: "Account number not found." }, { status: 401 });
    }

    const res = NextResponse.json({ ok: true });
    res.cookies.set("omaro_account", number.replace(/\s/g, ""), {
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365,
    });
    return res;
  } catch {
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}
