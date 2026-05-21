"use client";

import { useMemo, useState } from "react";
import useSWR from "swr";
import {
  TrendingUp,
  SquareX,
  Search,
  ShieldCheck,
  ShieldX,
  ChevronRight,
  Sparkles,
} from "lucide-react";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  ChartContainer,
  ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
} from "recharts";

type Result = {
  ans: string;
  quantities: {
    freq: Record<string, number>;
    mean: number;
    mode: string;
    median: number;
    std_dev: number;
    shift: number;
  };
};

const chartConfig = {
  count: {
    label: "Count",
    color: "var(--primary)",
  },
} satisfies ChartConfig;

const makeChartData = (freq: Record<string, number>) => {
  return Object.entries(freq).map(([letter, count]) => ({
    letter,
    count,
  }));
};

function ResultCard({
  result,
  probable,
}: {
  result: Result;
  probable: boolean;
}) {
  const chartData = useMemo(
    () => makeChartData(result.quantities.freq),
    [result.quantities.freq],
  );

  return (
    <Card
      className={`overflow-hidden border transition-all duration-300 hover:shadow-xl ${
        probable
          ? "border-emerald-500/20 bg-emerald-500/5"
          : "border-red-500/20 bg-red-500/5"
      }`}
    >
      <CardHeader className="space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              {probable ? (
                <ShieldCheck className="h-5 w-5 text-emerald-500" />
              ) : (
                <ShieldX className="h-5 w-5 text-red-500" />
              )}

              <Badge
                variant={probable ? "default" : "destructive"}
                className="rounded-full"
              >
                Shift {result.quantities.shift}
              </Badge>
            </div>

            <CardTitle className="max-w-xl break-words text-xl leading-relaxed">
              {result.ans}
            </CardTitle>

            <CardDescription>
              Frequency & statistical analysis of the deciphered output.
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">
            Mean {result.quantities.mean.toPrecision(2)}
          </Badge>

          <Badge variant="secondary">
            Median {result.quantities.median.toPrecision(2)}
          </Badge>

          <Badge variant="secondary">
            Mode {result.quantities.mode.toUpperCase()}
          </Badge>

          <Badge variant="secondary">
            Std Dev {result.quantities.std_dev.toPrecision(2)}
          </Badge>
        </div>

        <Collapsible>
          <CollapsibleTrigger asChild>
            <Button
              variant="outline"
              className="group w-full justify-between rounded-xl"
            >
              View Detailed Analysis
              <ChevronRight className="h-4 w-4 transition-transform group-data-[state=open]:rotate-90" />
            </Button>
          </CollapsibleTrigger>

          <CollapsibleContent className="pt-5">
            <Card className="border-border/50 bg-background/70 backdrop-blur">
              <CardContent className="p-4">
                <div className="h-[320px] w-full">
                  <ChartContainer
                    config={chartConfig}
                    className="h-full w-full"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={chartData}>
                        <CartesianGrid vertical={false} strokeDasharray="3 3" />

                        <XAxis
                          dataKey="letter"
                          tickLine={false}
                          axisLine={false}
                          tickMargin={8}
                        />

                        <ChartTooltip
                          cursor={false}
                          content={<ChartTooltipContent hideLabel />}
                        />

                        <Bar
                          dataKey="count"
                          fill="#ffffff"
                          radius={[8, 8, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>

      <CardFooter>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <TrendingUp className="h-4 w-4" />
          Statistical pattern recognition completed
        </div>
      </CardFooter>
    </Card>
  );
}

export default function Tool() {
  const [value, setValue] = useState("");
  const [trigger, setTrigger] = useState(false);

  const fetcher = async ([url, cipher]: [string, string]) => {
    const formData = new FormData();
    formData.append("cipher", cipher);

    const res = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    return res.json();
  };

  const { data, isLoading } = useSWR(
    trigger && value ? ["/api", value] : null,
    fetcher,
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-amber-500/10" />

      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-amber-500/20 blur-3xl" />

      <section className="container relative z-10 mx-auto max-w-7xl px-6 py-28">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <Badge className="rounded-full px-4 py-1">
            Caesar Cipher Analyzer
          </Badge>

          <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-6xl">
            Intelligent Cipher
            <span className="bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
              {" "}
              Decryption Tool
            </span>
          </h1>

          <p className="max-w-2xl text-muted-foreground">
            Analyze encrypted messages using shift analysis, frequency
            distribution, and statistical cryptography insights.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-[420px_1fr]">
          {/* LEFT PANEL */}
          <Card className="sticky top-24 h-fit overflow-hidden border-primary/20 bg-background/80 backdrop-blur">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-primary/10 p-3">
                  <Search className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <CardTitle>Input Cipher</CardTitle>
                  <CardDescription>
                    Paste encrypted text below
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-5">
              <Textarea
                rows={16}
                placeholder="Enter encrypted text here..."
                value={value}
                onChange={(e) => {
                  setValue(e.target.value.toLowerCase());
                  setTrigger(false);
                }}
                className="resize-none rounded-2xl border-primary/20 bg-muted/40 text-sm leading-7"
              />

              <Button
                disabled={!value || isLoading}
                onClick={() => setTrigger(true)}
                className="h-12 w-full rounded-2xl text-base font-semibold shadow-lg shadow-primary/20"
              >
                {isLoading ? (
                  <Spinner />
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Start Deciphering
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* RIGHT PANEL */}
          <div className="space-y-10">
            {!data ? (
              <Card className="flex min-h-[600px] items-center justify-center border-dashed bg-background/70 backdrop-blur">
                <CardContent className="flex flex-col items-center gap-4 py-20 text-center">
                  {isLoading ? (
                    <Spinner />
                  ) : (
                    <>
                      <div className="rounded-full bg-primary/10 p-5">
                        <Search className="h-8 w-8 text-primary" />
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold">
                          Waiting for Analysis
                        </h3>

                        <p className="max-w-md text-muted-foreground">
                          Your deciphered responses and frequency analysis will
                          appear here after processing.
                        </p>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            ) : (
              <>
                {/* PROBABLE */}
                <section className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-emerald-500/10 p-3">
                      <ShieldCheck className="h-5 w-5 text-emerald-500" />
                    </div>

                    <div>
                      <h2 className="text-3xl font-black">
                        Probable Responses
                      </h2>

                      <p className="text-muted-foreground">
                        Highly likely decrypted outputs
                      </p>
                    </div>
                  </div>

                  {data?.response?.corr?.length > 0 ? (
                    <div className="grid gap-6">
                      {data.response.corr.map((result: Result) => (
                        <ResultCard
                          key={result.ans}
                          result={result}
                          probable
                        />
                      ))}
                    </div>
                  ) : (
                    <Card className="border-dashed">
                      <CardContent className="flex flex-col items-center gap-4 py-16 text-center">
                        <SquareX className="h-10 w-10 text-red-500" />

                        <div>
                          <h4 className="text-lg font-semibold">
                            No probable results
                          </h4>

                          <p className="text-sm text-muted-foreground">
                            No matching outputs were detected in this category.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </section>

                {/* IMPROBABLE */}
                <section className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-red-500/10 p-3">
                      <ShieldX className="h-5 w-5 text-red-500" />
                    </div>

                    <div>
                      <h2 className="text-3xl font-black">
                        Improbable Responses
                      </h2>

                      <p className="text-muted-foreground">
                        Less likely decryptions generated by analysis
                      </p>
                    </div>
                  </div>

                  {data?.response?.incorr?.length > 0 ? (
                    <div className="grid gap-6">
                      {data.response.incorr.map((result: Result) => (
                        <ResultCard
                          key={result.ans}
                          result={result}
                          probable={false}
                        />
                      ))}
                    </div>
                  ) : (
                    <Card className="border-dashed">
                      <CardContent className="flex flex-col items-center gap-4 py-16 text-center">
                        <SquareX className="h-10 w-10 text-red-500" />

                        <div>
                          <h4 className="text-lg font-semibold">
                            No improbable results
                          </h4>

                          <p className="text-sm text-muted-foreground">
                            No low-confidence outputs were detected.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </section>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}