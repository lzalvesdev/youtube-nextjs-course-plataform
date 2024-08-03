import Image from "next/image";
import Link from "next/link";

export const Card = (id: any) => {
  return (
    <Link href={`/cursos/454`} className="sm:hover:no-underline">
      <article className="flex gap-4 flex-col p-2 rounded sm:hover:bg-primary">
        <Image
          className="aspect-video object-cover rounded-3xl"
          width={1000}
          height={0}
          draggable={false}
          alt={"Curso"}
          src={"https://i.ytimg.com/vi/bP47qRVRqQs/hqdefault.jpg"}
        />

        <h4 className="font-extrabold text-lg">Titulo</h4>
        <p className="line-clamp-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus quasi explicabo temporibus amet dolorum officiis numquam, pariatur iure delectus totam aliquid eveniet accusamus fuga modi consequatur dolores sit nulla excepturi!</p>
      </article>
    </Link>
  );
};