export default function Pill({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-lg bg-red-400 px-3 py-1 mx-2 text-sm font-medium text-zinc-950 ${className}`}
    >
      {text}
    </span>
  );
}
