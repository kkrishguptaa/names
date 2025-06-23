import { rando } from "@/utils";
import { colors } from "@/utils/constants";
import { HomeIcon } from "./home-icon";

export default function Header({
  name,
  href,
  color,
}: {
  name: string;
  href: string;
  color?: string;
}) {
  const colorClass = rando(colors, [name, Math.random()]);
  return (
    <header className="my-8">
      <a
        href={href}
        className={`hover:underline decoration-${color || colorClass}`}
      >
        <h1
          className={`font-headline text-${color || colorClass} text-7xl ${
            href === "/" ? "italics" : ""
          } lowercase font-black tracking-tight`}
        >
          {name}
        </h1>
      </a>
      <nav className="flex flex-row gap-8 my-8">
        <a
          href="/"
          className={`font-headline text-${
            color || colorClass
          } text-3xl italic lowercase font-bold tracking-tight inline-flex items-center hover:scale-120 transition-transform will-change-transform`}
        >
          <HomeIcon />
        </a>
        <a
          href="/list"
          className={`group font-headline text-${
            color || colorClass
          } text-3xl italic lowercase font-bold tracking-tight`}
        >
          <span aria-hidden="true">/</span>
          <span
            className={`group-hover:underline decoration-${
              color || colorClass
            }`}
          >
            List
          </span>
        </a>
      </nav>
    </header>
  );
}
