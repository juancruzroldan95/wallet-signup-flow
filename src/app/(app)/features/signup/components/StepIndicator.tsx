import { cn } from "@/utils/utils";

interface Step {
  label: string;
}

interface StepIndicatorProps {
  current: number;
  steps?: Step[];
}

export default function StepIndicator({
  current,
  steps = [{ label: "Account" }, { label: "KYC" }, { label: "Finish" }],
}: StepIndicatorProps) {
  return (
    <div className="mt-4 flex items-center justify-evenly gap-4">
      {steps.map((step, index) => {
        const isActive = current === index + 1;
        const isCompleted = current > index + 1;

        return (
          <div key={index}>
            <div className="flex flex-col items-center gap-2">
              <div
                className={cn(
                  "h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium border",
                  isActive
                    ? "bg-yellow-500 text-white border-yellow-500"
                    : isCompleted
                    ? "bg-primary text-white border-primary"
                    : "bg-muted text-muted-foreground border-border"
                )}
              >
                {index + 1}
              </div>
              <span className="text-xs text-muted-foreground">
                {step.label}
              </span>
            </div>

            {index < steps.length - 1 && (
              <div
                className={cn(
                  "h-px w-8",
                  isCompleted ? "bg-primary" : "bg-muted"
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
