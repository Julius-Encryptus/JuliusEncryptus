"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import { services, team } from "@/lib/constants";
import ServiceButton from "@/components/service";

export default function Index() {
  return (
    <>
      <section
        id="hero"
        className="section min-h-screen relative z-0 bg-primary/10 pattern"
      >
        <div className="absolute top-1/2 left-1/2 -translate-1/2 flex justify-center items-center">
          <div className="min-w-4/5 max-w-250">
            <div className="min-w-70 max-w-75 aspect-square absolute -z-1 top-1/2 left-1/2 -translate-1/2">
              <Image src={"/assets/globe.png"} fill preload alt="" />
            </div>

            <svg
              width="967"
              height="138"
              viewBox="0 0 967 138"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="max-w-full absolute -z-1 top-1/2 left-1/2 -translate-1/2"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M390.452 132.063C678.261 134.862 917.381 104.414 924.542 64.0553C929.146 38.1073 836.745 14.38 693.682 0C856.411 12.4271 966.901 36.6868 966.901 64.5791C966.901 105.128 733.384 138 445.326 138C256.796 138 91.6281 123.919 0 102.821C92.8068 119.304 232.555 130.528 390.452 132.063Z"
                fill="var(--color-accent)"
              />
            </svg>
            <h1 className="font-extrabold text-6xl max-w-164 text-center font-nunito">
              Welcome To <span className="text-primary">Julius Encryptus</span>
            </h1>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-1/2 translate-y-40 flex flex-col justify-center items-center gap-4">
          <p className="font-arial text-xs text-center leading-tight">
            Our mission is to decrypt and analyze messages encrypted by the use
            of a Caesar Cipher to uncover any relevant insights that can inform
            and strengthen our security measures.
          </p>
          <Link href={"/tool"}>
            <Button className="text-sm font-semibold">Get Started</Button>
          </Link>
        </div>
      </section>
      <section id="about" className="section">
        <div className="flex flex-col justify-center items-center gap-6">
          <p className="font-bold max-w-60 text-center font-arial">
            Thank You for Your Interest In Us!
          </p>
          <h2 className="text-2xl font-bold font-nunito max-w-200 text-center">
            <span className="text-amber-400">Runner up</span> in the
            <span className="text-amber-400">
              {" "}
              CyberSecurity Hackathon November 2024
            </span>
            , conducted by Directorate of IT Tripura
          </h2>
          <p className="max-w-250 font-arial text-center text-xs leading-tight">
            The <b>State-Level Cybersecurity Hackathon</b>, organized by the
            <b>Directorate of IT, Government of Tripura</b> at{" "}
            <b>NIT Agartala</b>, brought together students from colleges across
            the state to tackle diverse real-world cybersecurity problem
            statements. The event promoted hands-on learning, innovation, and
            collaboration while strengthening cybersecurity awareness and
            technical skills among young talent in Tripura.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mt-12 align-middle">
            <div className="flex flex-col justify-center items-center gap-2">
              <h6 className="text-amber-400">Our Plan</h6>
              <p className="text-xs text-center text-muted-foreground">
                The problem statement focused on analyzing and solving the
                Caesar Cipher through a comprehensive, user-centric approach.
                The plan involved building a centralized API that performs
                cipher shifting, decryption, and mono-alphabetic (monoword)
                frequency analysis to identify likely plaintext patterns. This
                API powers multiple client interfaces a web application, mobile
                app, and Chrome extension ensuring accessibility across
                platforms. Users can input encrypted text, receive automated
                shift analysis, frequency insights, and probable decryptions in
                real time, enabling both learning and practical cryptanalysis
                through a unified and scalable system.
              </p>
            </div>

            <div className="col-span-1 aspect-video relative">
              <Image src={"/assets/about.svg"} preload fill alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="section bg-accent">
        <div className="grid grid-cols-1 lg:grid-cols-2 align-middle gap-6">
          <div className="flex flex-col justify-center items-start gap-2">
            <h6 className="font-nunito font-bold text-amber-400">
              Services we offer
            </h6>
            <p className="text-xs leading-tight">
              We offer end-to-end cryptanalysis and security tooling services,
              including a robust API for cipher analysis, cross-platform
              solutions across web, mobile, and browser extensions, and advanced
              frequency-based text analysis. Our services focus on
              accessibility, accuracy, and real-time insights to help users
              understand, analyze, and solve classical encryption techniques
              efficiently.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 col-span-1 lg:w-fit gap-2 justify-items-center">
            {services.map((service) => {
              return <ServiceButton service={service} key={service.title} />;
            })}
          </div>
        </div>
      </section>
      <section id="team" className="section bg-primary/50">
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="flex flex-col justify-center items-center gap-2">
            <h6 className="font-nunito font-bold text-amber-400">The Team</h6>
            <h3 className="text-3xl font-nunito font-extrabold text-center max-w-150">
              Meet The Team that Made it Possible
            </h3>
            <p className="font-arial text-xs text-muted-foreground max-w-200 text-center leading-tight">
              Congratulations to the team for your outstanding effort and
              collaboration. Your innovation, technical excellence, and
              dedication turned a challenging idea into a successful solution
              well done on this achievement and keep pushing boundaries
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2">
            {team.map((member) => {
              return (
                <a href={member.profile} key={member.name}>
                  <div className="w-80 h-95 bg-foreground rounded-2xl flex flex-col justify-center items-center gap-6 px-4 py-8 group border-2 hover:border-amber-400">
                    <div className="flex flex-col justify-center items-center gap-2">
                      <Image
                        src={`${member.img}`}
                        width={52}
                        height={52}
                        preload
                        className="rounded-full"
                        alt={`${member.name}`}
                      />
                      <p className="text-xl text-background font-nunito font-bold">
                        {member.name}
                      </p>
                    </div>
                    <div className="text-xs text-center leading-tight text-muted font-arial">
                      {member.description}
                    </div>
                    <div>
                      <Button
                        variant={"link"}
                        className="text-xs font-arial group-hover:underline"
                      >
                        Read More
                      </Button>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
