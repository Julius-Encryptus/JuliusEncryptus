"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <section className="bg-primary/10 pattern pt-32 px-8 lg:px-32 pb-20 min-h-screen flex flex-col md:flex-row justify-center items-center gap-2">
        <div className="flex flex-col justify-center items-start gap-4 w-full h-fit">
          <h3 className="text-6xl text-left font-extrabold font-nunito">
            It looks like,
            <span className="text-amber-400"> you are lost</span>
          </h3>
          <Link href={"/"}>
            <Button className="rounded-none text-sm font-extrabold p-6 font-nunito">
              Get Back
            </Button>
          </Link>
        </div>
        <div className="relative w-full aspect-square">
          <Image src="/assets/not-found.svg" alt="" fill={true} />
        </div>
      </section>
    </>
  );
}
