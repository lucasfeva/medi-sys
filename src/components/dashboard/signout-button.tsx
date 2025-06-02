"use client";

import { useRouter } from "next/navigation";

import { authClient } from "@/lib/auth-client";

import { Button } from "../ui/button";

export default function SignOutButton() {
  const router = useRouter();
  return (
    <Button
      onClick={() =>
        authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              router.push("/authentication");
            },
          },
        })
      }
    >
      Sair
    </Button>
  );
}
