export default function Name({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={`/~/${id}`}
      className="font-name transition-transform transition-opacity hover:scale-120! hover:opacity-100! text-xl text-white"
    >
      {children}
    </a>
  );
}
