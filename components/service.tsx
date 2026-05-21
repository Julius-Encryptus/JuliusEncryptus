"use client";

import { motion } from "framer-motion";
import {
  ForwardRefExoticComponent,
  RefAttributes,
} from "react";

import {
  ArrowUpRight,
  LucideProps,
} from "lucide-react";

import { Button } from "@/components/ui/button";

type Service = {
  title: string;
  description?: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> &
      RefAttributes<SVGSVGElement>
  >;
  action: () => void;
};

export default function ServiceButton({
  service,
}: {
  service: Service;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="w-full"
    >
      <Button
        variant="ghost"
        onClick={service.action}
        className="group relative h-[260px] w-full overflow-hidden rounded-3xl border border-border/50 bg-background/70 p-0 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-primary/30 hover:bg-background"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-amber-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Top Border Glow */}
        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-amber-400" />

        {/* Content */}
        <div className="relative z-10 flex h-full w-full flex-col justify-between p-7">
          {/* Icon */}
          <div className="flex items-start justify-between">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-inner">
              <Icon className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
              <ArrowUpRight className="h-5 w-5" />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-3 text-left">
            <h3 className="text-2xl font-black leading-tight tracking-tight">
              {service.title}
            </h3>

            <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
              {service.description ||
                "Advanced cryptanalysis and intelligent cipher tooling built for modern cybersecurity workflows."}
            </p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-border/50 pt-4">
            <span className="text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
              Explore Service
            </span>

            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          </div>
        </div>
      </Button>
    </motion.div>
  );
}