import { tools } from "../data";

const Project = () => {
  return (
    <div>
      <div className="w-full flex flex-wrap items-center justify-center gap-10 lg:gap-20">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="flex gap-2 items-center bg-white rounded-md shadow-lg px-12 py-5 hover:animate-pulse"
          >
            <img src={tool.icon} className="w-10 h-10" />
            <p className=" text-black text-2xl font-semibold">{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
