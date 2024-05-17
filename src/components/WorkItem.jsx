
export default function WorkItem({year,title, location, duration, details}) {
  return (
    <div className="flex flex-col md:flex-row items-start border-stone-200 relative">
    <div className="absolute w-3 h-3 bg-slate-50 rounded-full mt-1.5 -left-1.5 border-white"></div>
    <div className="ml-4 mb-4 md:mb-0">
      <p className="flex flex-wrap gap-4 items-center text-xs md:text-sm">
        <span className="inline-block px-2 py-1 font-semibold text-white bg-[#f58c0b] rounded-md">{year}</span>
        <span className="text-lg font-semibold text-[#f59e0b]">{title}</span>
        <span className="my-1 text-sm font-normal leading-none text-stone-400">{location}</span>
        <span>{duration}</span>
      </p>
      <p className="my-2 text-base font-normal text-stone-500">{details}</p>
    </div>
  </div>
  )
}

