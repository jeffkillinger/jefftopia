type TagProps = {
  label: string;
};

export function Tag({ label }: TagProps) {
  return (
    <span className="inline-flex rounded-full border border-stone-300/70 bg-stone-100/70 px-2.5 py-1 text-xs font-medium text-stone-700 dark:border-stone-700 dark:bg-stone-800/80 dark:text-stone-200">
      {label}
    </span>
  );
}
