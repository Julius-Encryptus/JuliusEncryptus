"use client";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import useSWR from "swr";
import { Spinner } from "@/components/ui/spinner";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartContainer,
  ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, SquareX } from "lucide-react";

const makeChartData = (freq: Record<string, number>) => {
  return Object.keys(freq).map((key) => {
    return {
      letter: key,
      count: freq[key],
    };
  });
};

const chartConfig = {
  count: {
    label: "letter",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

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

export default function Tool() {
  const [value, setValue] = useState("");
  const [trigger, setTrigger] = useState(false);

  const fetcher = async ([url, cipher]: [string, string]) => {
    const formData = new FormData();
    formData.append("cipher", value);

    const res = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  };

  const { data, error, isLoading } = useSWR(
    trigger && value ? ["/api", value] : null,
    fetcher,
  );

  return (
    <section className="section pt-32! min-h-screen bg-primary/10 pattern">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        <div className="flex flex-col gap-2">
          <Textarea
            className="bg-accent! border-primary resize-none font-nunito text-xs"
            placeholder="Enter the encrypted text here"
            rows={20}
            onChange={(e) => {
              setValue(e.target.value.toLowerCase());
              setTrigger(false);
            }}
          />
          <Button onClick={() => setTrigger(true)} disabled={isLoading}>
            {!isLoading ? "Start Deciphering" : <Spinner />}
          </Button>
        </div>
        <div className="min-h-screen flex flex-col justify-start gap-4">
          {!data ? (
            <>
              <div className="flex min-h-screen justify-center items-center rounded-2xl bg-accent">
                {isLoading ? (
                  <Spinner />
                ) : (
                  <>
                    <h6 className="text-xs font-nunito">
                      Results will show up here
                    </h6>
                  </>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col justify-start gap-2 h-[50vh] overflow-y-scroll">
                <h6 className="font-nunito font-extrabold text-amber-400">
                  Probable Responses
                </h6>
                {data && data?.response && (
                  <>
                    {(data?.response?.corr).length > 0 ? (
                      data?.response?.corr.map((res: Result) => {
                        return (
                          <div
                            className="bg-primary px-4 py-2 rounded-2xl relative w-full"
                            key={res.ans}
                          >
                            <div className="flex flex-col justify-center gap-2">
                              <div className="text-xs text-muted font-sem">
                                Deciphered Text
                              </div>
                              <div className="flex justify-between text-sm">
                                <p className="max-w-1/2">{res.ans}</p>
                              </div>
                              <Collapsible>
                                <CollapsibleTrigger asChild>
                                  <Button
                                    className="absolute top-6 right-4 text-xs font-nunito text-foreground"
                                    variant={"link"}
                                  >
                                    View Analysis
                                  </Button>
                                </CollapsibleTrigger>

                                <CollapsibleContent className="w-full">
                                  <Card className="bg-foreground">
                                    <CardHeader>
                                      <CardTitle className="text-background font-nunito">
                                        {res.ans}
                                      </CardTitle>
                                      <CardDescription className="text-xs font-nunito">
                                        Shift / Key value {res.quantities.shift}
                                      </CardDescription>
                                    </CardHeader>
                                    <CardContent className="w-full aspect-video">
                                      <ChartContainer
                                        config={chartConfig}
                                        className="w-full h-full"
                                      >
                                        <BarChart
                                          accessibilityLayer
                                          data={makeChartData(
                                            res.quantities.freq,
                                          )}
                                        >
                                          <CartesianGrid vertical={false} />
                                          <XAxis
                                            dataKey={"letter"}
                                            tickLine={false}
                                            tickMargin={1}
                                            axisLine={false}
                                          />
                                          <ChartTooltip
                                            cursor={false}
                                            content={
                                              <ChartTooltipContent hideLabel />
                                            }
                                          />
                                          <Bar
                                            dataKey={"count"}
                                            fill="var(--color-count)"
                                            radius={8}
                                          />
                                        </BarChart>
                                      </ChartContainer>
                                    </CardContent>
                                    <CardFooter className="flex flex-col justify-start items-start gap-2">
                                      <div className="text-xs text-muted flex items-center gap-2">
                                        Trends <TrendingUp />
                                      </div>
                                      <div className="flex flex-wrap justify-start gap-2">
                                        <Badge className="text-xs font-nunito">
                                          Mean{" "}
                                          {res.quantities.mean.toPrecision(2)}
                                        </Badge>
                                        <Badge className="text-xs font-nunito">
                                          Median{" "}
                                          {res.quantities.median.toPrecision(2)}
                                        </Badge>
                                        <Badge className="text-xs font-nunito">
                                          Mode{" "}
                                          {res.quantities.mode.toUpperCase()}{" "}
                                        </Badge>
                                      </div>
                                    </CardFooter>
                                  </Card>
                                </CollapsibleContent>
                              </Collapsible>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <>
                        <div className="flex flex-col justify-center items-center gap-2 h-full w-full bg-accent border rounded-2xl">
                          <SquareX fill="red" />
                          <p className="text-xs">No Results in this category</p>
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>

              <div className="flex flex-col justify-start gap-2 h-[50vh] overflow-y-scroll">
                <h6 className="font-nunito font-extrabold text-amber-400">
                  Improbable Responses
                </h6>
                {data && data?.response && (
                  <>
                    {(data?.response?.incorr).length > 0 ? (
                      <>
                        {data?.response?.incorr.map((res: Result) => {
                          return (
                            <div
                              className="bg-destructive px-4 py-2 rounded-2xl relative w-full"
                              key={res.ans}
                            >
                              <div className="flex flex-col justify-center gap-2">
                                <div className="text-xs text-muted-foreground font-sem">
                                  Deciphered Text
                                </div>
                                <div className="flex justify-between text-sm">
                                  <p className="max-w-1/2">{res.ans}</p>
                                </div>
                                <Collapsible>
                                  <CollapsibleTrigger asChild>
                                    <Button
                                      className="absolute top-6 right-4 text-xs font-nunito text-foreground"
                                      variant={"link"}
                                    >
                                      View Analysis
                                    </Button>
                                  </CollapsibleTrigger>

                                  <CollapsibleContent className="w-full">
                                    <Card className="bg-foreground">
                                      <CardHeader>
                                        <CardTitle className="text-background font-nunito">
                                          {res.ans}
                                        </CardTitle>
                                        <CardDescription className="text-xs font-nunito">
                                          Shift / Key value{" "}
                                          {res.quantities.shift}
                                        </CardDescription>
                                      </CardHeader>
                                      <CardContent className="w-full aspect-video">
                                        <ChartContainer
                                          config={chartConfig}
                                          className="w-full h-full"
                                        >
                                          <BarChart
                                            accessibilityLayer
                                            data={makeChartData(
                                              res.quantities.freq,
                                            )}
                                          >
                                            <CartesianGrid vertical={false} />
                                            <XAxis
                                              dataKey={"letter"}
                                              tickLine={false}
                                              tickMargin={1}
                                              axisLine={false}
                                            />
                                            <ChartTooltip
                                              cursor={false}
                                              content={
                                                <ChartTooltipContent
                                                  hideLabel
                                                />
                                              }
                                            />
                                            <Bar
                                              dataKey={"count"}
                                              fill="var(--color-count)"
                                              radius={8}
                                            />
                                          </BarChart>
                                        </ChartContainer>
                                      </CardContent>
                                      <CardFooter className="flex flex-col justify-start items-start gap-2">
                                        <div className="text-xs text-muted flex items-center gap-2">
                                          Trends <TrendingUp />
                                        </div>
                                        <div className="flex flex-wrap justify-start gap-2">
                                          <Badge
                                            className="text-xs font-nunito"
                                            variant={"destructive"}
                                          >
                                            Mean{" "}
                                            {res.quantities.mean.toPrecision(2)}
                                          </Badge>
                                          <Badge
                                            className="text-xs font-nunito"
                                            variant={"destructive"}
                                          >
                                            Median{" "}
                                            {res.quantities.median.toPrecision(
                                              2,
                                            )}
                                          </Badge>
                                          <Badge
                                            className="text-xs font-nunito"
                                            variant={"destructive"}
                                          >
                                            Mode{" "}
                                            {res.quantities.mode.toUpperCase()}{" "}
                                          </Badge>
                                        </div>
                                      </CardFooter>
                                    </Card>
                                  </CollapsibleContent>
                                </Collapsible>
                              </div>
                            </div>
                          );
                        })}{" "}
                      </>
                    ) : (
                      <>
                        <div className="flex flex-col justify-center items-center gap-2 h-full w-full bg-accent border rounded-2xl">
                          <SquareX fill="red" />
                          <p className="text-xs">No Results in this category</p>
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
