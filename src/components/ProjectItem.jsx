export default function ProjectItem({ img, title }) {
  return (
    <div className="relative flex flex-col items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] ">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:flex flex-col items-center justify-center absolute inset-0">
        <h3 className="font-excon text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <div className="flex flex-col items-center justify-center mt-4">
          <a href="/">
            <button className="text-center p-3 rounded-lg bg-[#f59e0b] text-gray-700 font-bold cursor-pointer text-lg">
              Discover
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
