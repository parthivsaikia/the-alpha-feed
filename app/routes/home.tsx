import { Button } from "~/components/ui/button";
import { ShineBorder } from "components/magicui/shine-border";
import { SparklesText } from "components/magicui/sparkles-text";
import { CreatorsText } from "~/components/animatedText";
import axios from "axios";
import { homePageData } from "~/lib/data";
import {
  SearchCheck,
  BrainCircuit,
  CalendarCheckIcon,
  Check,
} from "lucide-react";
import type { Route } from "./+types/home";
import { Input } from "~/components/ui/input";
import { Form, useNavigation } from "react-router";
import { Avatar, AvatarImage } from "~/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import CheckedSentence from "~/components/checkedSentence";
import { Link } from "react-router";
import SuccessMessageAfterFormSubmission from "~/components/successMessage";
import { useState } from "react";
import { AnimatedGradientText } from "components/magicui/animated-gradient-text";

export async function clientAction({ request }: Route.ClientActionArgs) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const response = await axios.post("https://formspree.io/f/manjzwzg", data);
  return response.data;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Alpha Feed - Stop Guessing, Start Trending" },
    {
      name: "description",
      content:
        "AI-powered trend detection for creators. Get viral content ideas 7 days before trends peak.",
    },
    {
      property: "og:title",
      content: "The Alpha Feed - Stop Guessing, Start Trending",
    },
    {
      property: "og:description",
      content:
        "AI-powered trend detection for creators. Get viral content ideas 7 days before trends peak.",
    },
  ];
}

export default function Home({ actionData }: Route.ComponentProps) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const isFormSubmitting =
    navigation.state === "submitting" && navigation.formMethod === "POST";

  const earlyAccessBenefits = [
    "50% off first year",
    "Direct influence on features we build",
    "Private creator community",
    "1-on-1 onboarding",
  ];

  return (
    <div className="p-8 mx-auto flex flex-col gap-8 items-center lg:w-4/5">
      {/*
      <header className="flex items-center justify-between ">
        <div>The Alpha Feed</div>
        <Button>Join the waitlist</Button>
      </header>
			*/}
      <section className="text-center flex flex-col gap-4 lg:gap-8">
        <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
          Stop <span className="text-accent">Guessing</span>, Start{" "}
          <span className="text-secondary">Trending</span>
        </h1>

        <h2 className="text-2xl font-semibold text-muted-foreground">
          Get AI-powered trend insights 7 days before they explode
        </h2>
        <CreatorsText />
        <h2 className="text-xl text-muted-foreground">
          The AI co-pilot that turns trends into hits and comments into
          insights. We find the next viral hit so you can focus on creating.
        </h2>
        <Card className="w-5/6 mx-auto relative overflow-hidden">
          <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
          <CardContent className="flex flex-col items-center justify-center gap-4 font-bold">
            <p>🔥 Spot viral trends before your competitors </p>
            <p>⚡ Get ready-to-use scripts, hooks, and content ideas</p>{" "}
            <p>⏰ Save 5+ hours of scrolling every week</p>
          </CardContent>
        </Card>

        {/* Early Access Benefits Section - Improved */}
        <Card className="w-5/6 mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl text-card-foreground">
              Get Early Access
            </CardTitle>
            <CardDescription className="text-muted-foreground text-base">
              Join our exclusive early access program
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {earlyAccessBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-background/50 rounded-lg border border-border/50"
                >
                  <div className="flex-shrink-0">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <span className="text-card-foreground font-medium text-sm">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {actionData === undefined && (
          <div className="flex flex-col gap-4 lg:gap-8">
            <Form
              className="flex flex-col gap-4 lg:flex-row lg:gap-8"
              method="post"
            >
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="bg-background border-border"
              />
              <Button
                type="submit"
                className={`bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer `}
                disabled={isSubmitting}
              >
                Get Early Access
                {isSubmitting && (
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 me-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                )}
              </Button>
            </Form>
            <SparklesText className="text-secondary font-semibold text-md">
              Join 50 creators getting first access. Free to signup. No spam
              ever
            </SparklesText>
          </div>
        )}
        {actionData && <SuccessMessageAfterFormSubmission />}
      </section>{" "}
      <section className="text-center flex flex-col gap-4 lg:gap-8">
        <h2 className="text-3xl font-semibold text-center text-foreground">
          Monitoring the Platforms that matter
        </h2>
        <div className="flex gap-4 p-4 items-center justify-around">
          <Avatar className="bg-accent h-12 w-auto p-2">
            <AvatarImage src="/tiktok-color-icon.webp" />
            <AvatarFallback className="text-accent-foreground">
              TK
            </AvatarFallback>
          </Avatar>
          <Avatar className="bg-accent h-12 w-auto p-2">
            <AvatarImage src="/reddit-icon.webp" />
            <AvatarFallback className="text-accent-foreground">
              TK
            </AvatarFallback>
          </Avatar>
          <Avatar className="bg-accent h-12 w-auto p-2">
            <AvatarImage src="/x-social-media-logo-icon.webp" />
            <AvatarFallback className="text-accent-foreground">
              TK
            </AvatarFallback>
          </Avatar>
          <Avatar className="bg-accent h-12 w-auto p-2">
            <AvatarImage src="/youtube-color-icon.webp" />
            <AvatarFallback className="text-accent-foreground">
              TK
            </AvatarFallback>
          </Avatar>
        </div>
      </section>
      <section className="text-center flex flex-col gap-4 w-full lg:gap-8">
        <h1 className="text-3xl font-semibold text-center text-foreground">
          Your unfair advantage in three steps
        </h1>
        <div className="flex flex-col gap-4 justify-center lg:flex-row">
          <Card className="w-full flex flex-col justify-center mx-auto gap-4 h-72 bg-card border-border">
            <CardHeader>
              <CardTitle className="flex flex-col gap-4 text-left text-card-foreground">
                <SearchCheck className="text-primary" />
                <p>Find Trends before they peak</p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-left text-muted-foreground">
                Our AI scans millions of data points across social media 24/7.
                We identify the memes, sounds, and formats that are just
                starting to gain momentum, giving you a critical head start.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="w-full flex flex-col justify-center mx-auto gap-4 h-72 bg-card border-border">
            <CardHeader>
              <CardTitle className="flex flex-col gap-4 text-left text-card-foreground">
                <BrainCircuit className="text-primary" />
                <p>Get Actionable Creative Briefs</p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-left text-muted-foreground">
                We don't just give you a link. We deliver a full content
                package: a breakdown of the trend, a ready-to-use video script,
                and examples of what's working so you can create with
                confidence.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="w-full flex flex-col justify-center mx-auto gap-4 h-72 bg-card border-border">
            <CardHeader>
              <CardTitle className="flex flex-col gap-4 text-left text-card-foreground">
                <CalendarCheckIcon className="text-primary" />
                <p>Save Hours of Scrolling</p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-left text-muted-foreground">
                Stop wasting time endlessly searching for inspiration. Wake up
                to a concise, powerful email with your daily 'Alpha Feed,' ready
                to turn into your next hit video.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="text-center flex flex-col gap-4 w-full lg:gap-8">
        <Card className="flex flex-col w-full bg-card border-border">
          <CardHeader>
            <CardTitle className="text-3xl text-card-foreground">
              You're Not Lacking Creativity - You're Lacking Intel
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-stretch">
            <ul className="flex flex-col gap-4 items-center justify-center">
              {homePageData.map((data) => (
                <CheckedSentence
                  emoji={data.emoji}
                  sentence={data.text}
                  key={data.text}
                />
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>
      <section className="text-center flex flex-col gap-4 w-full lg:gap-8">
        <h1 className="text-3xl font-semibold text-foreground">
          The Next Big Trend Won't Wait. Will You?
        </h1>
        <p className="text-muted-foreground">
          Join the waitlist today to lock in early access. Be the first to know
          when The Alpha Feed goes live.
        </p>
        {actionData === undefined && (
          <Form
            className="flex flex-col gap-4 lg:flex-row lg:gap-8"
            method="post"
          >
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="your.email@example.com"
              className="bg-background border-border"
            />
            <Button
              className={`bg-primary text-primary-foreground hover:bg-primary/90 `}
              type="submit"
              disabled={isSubmitting}
            >
              Reserve My Spot
              {isSubmitting && (
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-4 h-4 me-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
              )}
            </Button>
          </Form>
        )}
        {actionData && <SuccessMessageAfterFormSubmission />}
      </section>
      <footer className="text-center">
        <div>
          <p className="text-muted-foreground">
            © 2025 The Alpha Feed. All Rights Reserved.
          </p>
          <p className="text-muted-foreground">
            A project by{" "}
            <Link
              to={`https://x.com/_saikiaparthiv_`}
              preventScrollReset
              className="text-primary underline hover:text-primary/80"
            >
              Parthiv Saikia
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
