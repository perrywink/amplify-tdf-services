"use client";

import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from "@aws-amplify/ui-react";
import React from "react";

Amplify.configure(outputs);

export default function AuthLayout({children} : {children: React.ReactNode}) {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <nav>
            <button onClick={signOut}>Sign out</button>
          </nav>
          {children}
        </main>
      )}
    </Authenticator>
  );
}
