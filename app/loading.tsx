"use client";

import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center pattern">
        <Spinner className="size-16" color="var(--primary)" />
      </div>
    </>
  );
}
