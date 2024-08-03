import { Card } from "../card/Card";

export const Section = () => {
  return (
    <section className="flex flex-col gap-4 px-4">
      <h2 className="font-bold text-xl">Section titulo</h2>

      <ul className="flex flex-col gap-2">
        <li>
          <Card
            href="/cusos/444"
            image="https://i.ytimg.com/vi/bP47qRVRqQs/hqdefault.jpg"
            title="Titulo"
            description={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus quasi explicabo temporibus amet dolorum officiis numquam, pariatur iure delectus totam aliquid eveniet accusamus fuga modi consequatur dolores sit nulla excepturi!`}
          />
        </li>
        <li>
          <Card
            href="/cusos/444"
            image="https://i.ytimg.com/vi/bP47qRVRqQs/hqdefault.jpg"
            title="Titulo"
            description={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus quasi explicabo temporibus amet dolorum officiis numquam, pariatur iure delectus totam aliquid eveniet accusamus fuga modi consequatur dolores sit nulla excepturi!`}
          />
        </li>
      </ul>
    </section>
  );
}