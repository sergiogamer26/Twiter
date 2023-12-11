import { createClientComponentClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { AuthButton } from "./auth-button-client";
import { cookies } from "next/headers";

export async function AuthButtonserver (){ 
    const supabase = createServerComponentClient({ cookies })
    const {data: { session } } = await supabase.auth.getSession()

    return <AuthButton session={session} />
}