import { rando } from "@/utils";
import { colors } from "@/utils/constants";
import { HomeIcon } from "./home-icon";

export default function Header({
  disclaimer = false,
  name,
  href,
  color,
}: {
  disclaimer?: boolean;
  name: string;
  href: string;
  color?: string;
}) {
  const colorClass = rando(colors, [name, Math.random()]);
  return (
    <header className="mt-8 mb-2">
      <a href={href} className={`hover:underline  ${color || colorClass}`}>
        <h1
          className={`font-headline text-7xl lowercase font-black tracking-tight`}
        >
          {name}
        </h1>
      </a>
      <nav className="flex flex-row gap-8 mt-4">
        <a
          href="/names"
          className={`font-headline ${
            color || colorClass
          } text-3xl lowercase font-bold tracking-tight inline-flex items-center hover:scale-120 transition-transform will-change-transform`}
        >
          <HomeIcon />
        </a>
        <a
          href="/names/list"
          className={`group font-headline ${
            color || colorClass
          } text-3xl lowercase font-bold tracking-tight`}
        >
          <span aria-hidden="true">/</span>
          <span className={`group-hover:underline`}>List</span>
        </a>
      </nav>
      {disclaimer && (
        <div className="mt-4 text-lg text-zinc-200">
          <p className="text-xs">
            People give me nicknames, I decided to put them up on a wall. Some
            of them have their very own pages with lore (click on them, if ye
            dare!) P.S. I'm still in progress of writing up the lores for all of
            them and putting more names up!
          </p>
        </div>
      )}
    </header>
  );
}
