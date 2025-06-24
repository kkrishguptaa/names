import { rand, rando, randosort } from "@/utils";
import { colors, size } from "@/utils/constants";
import Name from "./name";

interface NameInterface {
  id: string;
  name: string;
  color: string;
  size: string;
}

export default function Wall({ names }: { names: Array<[string, string]> }) {
  const strips: NameInterface[][] = [];

  const n = [...names, ...names, ...names].sort(randosort);

  for (let i = 0; i < n.length; i += 5) {
    const strip = n.slice(i, i + 5);
    if (strip.length < 5) {
      const remainingNames = n.slice(0, i).concat(n.slice(i + 5));
      while (strip.length < 5) {
        const randomName = rand(remainingNames, [
          `strip-${i}-${strip.length}`,
          strip.length,
        ]);
        remainingNames.splice(remainingNames.indexOf(randomName), 1);
        strip.push(randomName);
      }
    }

    strips.push(
      strip
        .map((name) => ({
          id: name[0],
          name: name[1],
          color: rando(colors, [name[0], n.indexOf(name)]),
          size: rando(size, [name[0], n.indexOf(name)]),
        }))
        .sort(randosort)
    );
  }

  return (
    <div className="hover:*:*:opacity-50 my-8 marquee w-full flex flex-col gap-4 divide-y divide-transparent">
      {strips.map((strip, index) => (
        <div
          key={index}
          className="marquee-track flex flex-row items-center w-full"
        >
          {strip.sort(randosort).map((name, nameIndex) => (
            <Name id={name.id} key={nameIndex}>
              <span className={`${name.color} ${name.size}`}>{name.name}</span>
            </Name>
          ))}
          {strip.sort(randosort).map((name, nameIndex) => (
            <Name id={name.id} aria-hidden="true" key={`1-${nameIndex}`}>
              <span className={`${name.color} ${name.size}`}>{name.name}</span>
            </Name>
          ))}
          {strip.sort(randosort).map((name, nameIndex) => (
            <Name id={name.id} aria-hidden="true" key={`2-${nameIndex}`}>
              <span className={`${name.color} ${name.size}`}>{name.name}</span>
            </Name>
          ))}
        </div>
      ))}
    </div>
  );
}
