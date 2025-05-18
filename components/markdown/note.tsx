import { cn } from "@/lib/utils";
import clsx from "clsx";
import { PropsWithChildren } from "react";

type NoteProps = PropsWithChildren & {
  title?: string;
  type?: "note" | "danger" | "warning" | "success";
};

export default function Note({
  children,
  title = "Note",
  type = "note",
}: NoteProps) {
  const noteClassNames = clsx(
    "border rounded-md p-4",
    {
      // Note (neutral)
      "bg-stone-50 text-stone-900 dark:bg-stone-900/30 dark:text-stone-100 border-stone-200 dark:border-stone-800":
        type === "note",

      // Danger (red)
      "bg-red-100 text-red-900 dark:bg-red-950 dark:text-red-100 border-red-300 dark:border-red-800":
        type === "danger",

      // Warning (orange/amber)
      "bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-100 border-amber-300 dark:border-amber-800":
        type === "warning",

      // Success (green)
      "bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-100 border-emerald-300 dark:border-emerald-800":
        type === "success",
    }
  );


  return (
    <div
      className={cn(
        "border rounded-md px-5 mt-5 mb-7 text-sm tracking-wide",
        noteClassNames
      )}
    >
      <p className="font-bold">{title}:</p>
      <div className="-mt-1">{children}</div>
    </div>
  );
}
