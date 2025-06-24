import { getCollection } from "astro:content";

export default async function Footer() {
  const count = await getCollection("names").then((names) => names.length);
  return (
    <footer className="bg-zinc-800 text-white py-6">
      <main className="px-[10vw] gap-4 flex flex-row flex-wrap justify-between items-center">
        <article className="flex flex-col gap-4">
          <p className="text-2xl font-bold">{count} names so far.</p>
        </article>
        <article className="flex flex-col gap-4">
          <p>
            <a
              className="hover:underline decoration-wavy text-red-400 transition text-lg"
              href="https://github.com/kkrishguptaa/names/issues/new"
            >
              give me another name!
            </a>
          </p>
        </article>
      </main>
    </footer>
  );
}
