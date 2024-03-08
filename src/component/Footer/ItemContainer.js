import Items from "./Items";
import { LINKS, TOURS, SERVICES, SUPPORT } from "./Menu";

const itemscontainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Items Links={LINKS} title="LINKS" />
      <Items Links={TOURS} title="TOURS" />
      <Items Links={SERVICES} title="SERVICES" />
      <Items Links={SUPPORT} title="SUPPORT" />
    </div>
  );
};

export default itemscontainer;
