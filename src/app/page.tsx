import { Card } from "@/components/card/Card";

export default function PageHome() {
  return (
    <main className="bg-background">
      <Card
        href="/cusos/444"
        image="https://i.ytimg.com/vi/bP47qRVRqQs/hqdefault.jpg"
        title="Titulo"
        description={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus quasi explicabo temporibus amet dolorum officiis numquam, pariatur iure delectus totam aliquid eveniet accusamus fuga modi consequatur dolores sit nulla excepturi!`}
      />
    </main>
  );
}
