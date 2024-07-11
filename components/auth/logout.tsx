"use client";

import { signOut } from "aws-amplify/auth";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  return (
    <button
      onClick={async () => {
        await signOut();
        router.push("/login");
      }}
      className="btn btn-outline"
    >
      Sign out
      <LogOutIcon className="w-4 h-4"/>
    </button>
  );
}