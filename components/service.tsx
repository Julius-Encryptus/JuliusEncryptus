"use client";

import { Button } from "@/components/ui/button";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { LucideProps } from "lucide-react";
import { CornerUpRight } from "lucide-react";

export default function ServiceButton({
  service,
}: {
  service: {
    title: string;
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
    action: () => void;
  };
}) {
  return (
    <Button
      variant={"secondary"}
      onClick={service.action}
      className="w-60 h-40 group border-t-2 border-primary relative z-0"
    >
      <div className="flex flex-col justify-start items-start gap-2 w-full h-full py-4">
        <div className="*:fill-primary *:stroke-primary *:w-24 *:h-24 text-base">
          {<service.icon size={24}/>}
        </div>
        <div className="max-w-40 font-nunito text-xl font-bold text-start text-wrap">
          {service.title}
        </div>
        <div className="absolute z-10 bottom-4 right-4 h-10 aspect-square bg-primary group-hover:bg-primary/80 flex justify-center items-center">
          <CornerUpRight />
        </div>
      </div>
    </Button>
  );
}
