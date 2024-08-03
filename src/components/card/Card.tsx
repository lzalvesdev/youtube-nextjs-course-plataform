import Image from "next/image";
import Link from "next/link";

interface ICardProps {
  href: string;
  image: string;
  title: string;
  description: string;
}

export const Card = ({ href, image, title, description }: ICardProps) => {
  return (
    <Link href={href} className="sm:hover:no-underline">
      <article className="flex gap-4 flex-col p-2 rounded sm:hover:bg-primary">
        <Image
          className="aspect-video object-cover rounded-3xl"
          width={1000}
          height={0}
          draggable={false}
          alt={title}
          src={image}
        />

        <h4 className="font-extrabold text-lg">Titulo</h4>
        <p className="line-clamp-3">{description}</p>
      </article>
    </Link>
  );
};