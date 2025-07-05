import { cn } from "~/lib/utils";
import { AnimatedGradientText } from "components/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";

export function CreatorsText() {
  return (
    <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_hsl(var(--primary)/0.12)] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_hsl(var(--primary)/0.25)]">
      <span
        className={cn(
          "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[hsl(var(--primary)/0.5)] via-[hsl(var(--accent)/0.5)] to-[hsl(var(--secondary)/0.5)] bg-[length:300%_100%] p-[1px]",
        )}
        style={{
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "destination-out",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "subtract",
          WebkitClipPath: "padding-box",
        }}
      />
      🎉{" "}
      <hr className="mx-2 h-4 w-px shrink-0 bg-[hsl(var(--muted-foreground))]" />
      <AnimatedGradientText className="text-sm font-medium">
        Built by creators, for creators
      </AnimatedGradientText>
      <ChevronRight className="ml-1 size-4 stroke-[hsl(var(--muted-foreground))] transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
    </div>
  );
}
