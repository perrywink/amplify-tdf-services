"use client"

import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import React from "react";
import Link from "next/link";
import { Authenticator } from "@aws-amplify/ui-react";

Amplify.configure(outputs);

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <Navbar>
            <button onClick={signOut} className="btn btn-outline btn-nav-sm">
              Sign out
            </button>
          </Navbar>
          {children}
        </main>
      )}
    </Authenticator>
  );
}

function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" href="/">
          Data Foundry Services
        </Link>
      </div>
      <div className="flex-none">{children}</div>
    </div>
  );
}
