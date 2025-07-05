import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Confetti } from "components/magicui/confetti";
export default function SuccessMessageAfterFormSubmission() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center relative">
      <p>Thanks for joining us. You're on the list. We'll be in touch soon</p>
      <Confetti className="absolute" />
      {
        <DotLottieReact
          src="/success.lottie"
          autoplay
          height={5}
          width={5}
          className="h-10"
        />
      }
    </div>
  );
}
