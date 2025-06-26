import clsx from "clsx";

interface AnimeCharacter {
  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
    };
  };
  name: string;
  name_kanji: string;
  nicknames: string[];
  favorites: number;
  about: string;
}

export default async function AnimeCharacter({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  const apiUrl = `https://api.jikan.moe/v4/characters/${id}`;

  const data = await fetch(apiUrl)
    .then((r) => r.json())
    .then((res) => res.data as AnimeCharacter);

  if (!data) {
    throw new Error(`Character ${id} not found`);
  }

  return (
    <div
      className={clsx(
        `flex flex-row flex-wrap items-center gap-8 bg-zinc-800 p-4 rounded-lg max-w-max`,
        className
      )}
    >
      <a href={data.url} target="_blank" rel="noopener noreferrer">
        <img
          src={data.images.webp.image_url}
          alt={data.name}
          className="rounded-lg max-w-[200px] w-full mt-0"
        />
      </a>
      <div className="space-y-4">
        <h2 className="text-lg font-bold">{data.name}</h2>
        <p className="text-sm text-zinc-200">{data.name_kanji}</p>
        <p className="text-sm prose text-gray-200">{data.about}</p>
      </div>
    </div>
  );
}
