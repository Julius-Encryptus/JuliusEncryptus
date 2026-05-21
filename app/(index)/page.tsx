"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { services, team } from "@/lib/constants";
import ServiceButton from "@/components/service";

export default function Index() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden border-b">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-amber-500/10" />

        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-amber-400/20 blur-3xl" />

        <div className="container relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center gap-8"
          >
            <Badge className="rounded-full px-4 py-1 text-sm">
              Cybersecurity • Cryptanalysis • AI Powered
            </Badge>

            <div className="relative flex items-center justify-center">
              <div className="absolute h-[350px] w-[350px] rounded-full bg-primary/20 blur-3xl" />

              <div className="relative h-[220px] w-[220px] md:h-[320px] md:w-[320px]">
                <Image
                  src="/assets/globe.png"
                  fill
                  priority
                  alt="Globe"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="mx-auto max-w-5xl text-5xl font-black tracking-tight md:text-7xl">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
                  Julius Encryptus
                </span>
              </h1>

              <p className="mx-auto max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                We decrypt and analyze Caesar Cipher encrypted messages to
                uncover meaningful insights and strengthen cybersecurity
                intelligence through modern cryptanalysis tooling.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/tool">
                <Button
                  size="lg"
                  className="rounded-xl px-8 shadow-lg shadow-primary/25"
                >
                  Get Started
                </Button>
              </Link>

              <Link href="#about">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-xl"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="container mx-auto max-w-7xl px-6 py-28"
      >
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <Badge
                variant="secondary"
                className="rounded-full px-4 py-1"
              >
                About Us
              </Badge>

              <h2 className="text-4xl font-black leading-tight md:text-5xl">
                Runner Up at the{" "}
                <span className="text-amber-400">
                  Cybersecurity Hackathon 2024
                </span>
              </h2>

              <p className="leading-7 text-muted-foreground">
                The State-Level Cybersecurity Hackathon organized by the
                Directorate of IT, Government of Tripura at NIT Agartala brought
                together innovative student teams to solve real-world
                cybersecurity challenges using practical and scalable solutions.
              </p>
            </div>

            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl">Our Vision</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4 text-sm leading-7 text-muted-foreground">
                <p>
                  Our platform focuses on solving Caesar Cipher and
                  monoalphabetic cryptographic challenges through intelligent
                  shift detection and frequency analysis.
                </p>

                <p>
                  The ecosystem includes a centralized API powering a web app,
                  mobile application, and Chrome extension for accessible,
                  real-time cryptanalysis across platforms.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 to-amber-400/20 blur-2xl" />

            <Card className="relative overflow-hidden rounded-3xl border-primary/20 bg-background/80 backdrop-blur">
              <CardContent className="p-0">
                <div className="relative aspect-video w-full">
                  <Image
                    src="/assets/about.svg"
                    fill
                    alt="About"
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-y bg-muted/40">
        <div className="container mx-auto max-w-7xl px-6 py-28">
          <div className="mb-14 flex flex-col items-center gap-4 text-center">
            <Badge className="rounded-full px-4 py-1">
              Services
            </Badge>

            <h2 className="max-w-3xl text-4xl font-black md:text-5xl">
              Powerful Cryptanalysis Tools & Services
            </h2>

            <p className="max-w-2xl text-muted-foreground">
              Cross-platform cipher analysis solutions designed for speed,
              accessibility, and real-time insights.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <ServiceButton service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section
        id="team"
        className="container mx-auto max-w-7xl px-6 py-28"
      >
        <div className="mb-16 flex flex-col items-center gap-4 text-center">
          <Badge className="rounded-full px-4 py-1">
            The Team
          </Badge>

          <h2 className="max-w-3xl text-4xl font-black md:text-5xl">
            Meet the People Behind Julius Encryptus
          </h2>

          <p className="max-w-2xl text-muted-foreground">
            A passionate team of developers and innovators working together to
            create impactful cybersecurity solutions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {team.map((member, index) => (
            <motion.a
              key={member.name}
              href={member.profile}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full rounded-3xl border-border/50 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl">
                <CardContent className="flex h-full flex-col items-center gap-6 p-8 text-center">
                  <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-primary/20">
                    <Image
                      src={member.img}
                      fill
                      alt={member.name}
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">
                      {member.name}
                    </h3>

                    <p className="text-sm leading-7 text-muted-foreground">
                      {member.description}
                    </p>
                  </div>

                  <Button
                    variant="ghost"
                    className="mt-auto rounded-xl group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-amber-400/10" />

        <div className="container relative z-10 mx-auto max-w-5xl px-6 py-24 text-center">
          <div className="space-y-6">
            <Badge className="rounded-full px-4 py-1">
              Start Exploring
            </Badge>

            <h2 className="text-4xl font-black md:text-6xl">
              Ready to Decode the Unknown?
            </h2>

            <p className="mx-auto max-w-2xl text-muted-foreground">
              Analyze encrypted messages, test cipher shifts, and uncover hidden
              patterns with our intelligent cryptanalysis platform.
            </p>

            <Link href="/tool">
              <Button
                size="lg"
                className="mt-4 rounded-2xl px-10 shadow-lg shadow-primary/25"
              >
                Launch Tool
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}