// FilterRange.tsx
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  actions: {
    prev: () => void;
    next: () => void;
  };
  currentValue: string;
  disabledPrev?: boolean;
  disabledNext?: boolean;
};

export default function FilterRange({
  actions,
  currentValue,
  disabledPrev = false,
  disabledNext = false,
}: Props) {
  return (
    <div className="w-full flex items-center justify-end gap-2">
      <button
        onClick={actions.prev}
        disabled={disabledPrev}
        className="px-4 py-1 bg-[#56bbe3] border-2 border-[#56bbe3] text-white rounded-full hover:bg-[#3891b4] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <span className="text-md text-neutral-800 dark:text-neutral-200 text-center w-full min-[498px]:w-fit font-semibold border-2 border-[#56bbe3] px-4 py-1 rounded-full">
        {currentValue}
      </span>
      <button
        onClick={actions.next}
        disabled={disabledNext}
        className="px-4 py-1 bg-[#56bbe3] border-2 border-[#56bbe3] text-white rounded-full hover:bg-[#3891b4] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
