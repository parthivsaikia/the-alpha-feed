import { CheckCheck } from "lucide-react";

export default function CheckedSentence({
  emoji,
  sentence,
}: {
  emoji: string;
  sentence: string;
}) {
  return (
    <div className="flex  justify-between lg:justify-center p-4 items-center gap-8 w-full lg:w-5/6">
      <p>{emoji}</p>
      <p>{sentence}</p>
    </div>
  );
}
