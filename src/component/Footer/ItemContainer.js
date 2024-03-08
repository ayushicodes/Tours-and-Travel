import Items from "./Items";
import { LINKS, POPULARTOURS, SERVICES, SUPPORT } from "./Menu";

const itemscontainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Items Links={LINKS} title="LINKS" />
      <Items Links={POPULARTOURS} title="POPULARTOURS" />
      <Items Links={SERVICES} title="SERVICES" />
      <Items Links={SUPPORT} title="SUPPORT" />
    </div>
  );
};

export default itemscontainer;
