import { clients } from "@repo/core";
import { LayoutGrid } from "../ui/layout-grid";
import ClientItem from "./ClientItem";
import Title from "@/components/shared/Title";

export default function OurClients() {
  const classes = [
    "md:col-span-2",
    "col-span-1",
    "col-span-1",
    "md:col-span-2",
  ];
  const cards = clients.map((client, i) => {
    return {
      id: client.id,
      content: <ClientItem name={client.name} testimony={client.testimony} />,
      className: classes[i],
      imageUrl: client.imageUrl,
    };
  });

  return (
    <div className="container flex flex-col items-center gap-16">
      <Title
        tag=""
        primary="Who's Boss"
        secondary="Our clients are our bosses! Here, they rule and dismatle, and leave full of style!"
      />

      <div className="h-[900px] w-full">
        <LayoutGrid cards={cards} />
      </div>
    </div>
  );
}
