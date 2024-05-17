import WorkItem from "./WorkItem";

const data = [
  {
    year: 2020,
    title: "Master Scuba Diver",
    location: "Bali, Indonesia",
    duration: "3 Years",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed tellus turpis. Pellentesque quis pulvinar neque. Proin lorem leo, accumsan a arcu maximus, hendrerit malesuada leo. Ut sodales et eros et maximus.",
  },
  {
    year: 2017,
    title: "Scuba Diver Instructor",
    location: "Perhentian, Malaysia",
    duration: "3 Years",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed tellus turpis. Pellentesque quis pulvinar neque. Proin lorem leo, accumsan a arcu maximus, hendrerit malesuada leo. Ut sodales et eros et maximus.",
  },
  {
    year: 2015,
    title: "Open Water Scuba Diver",
    location: "Koh Tao, Thailand",
    duration: "2 Years",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed tellus turpis. Pellentesque quis pulvinar neque. Proin lorem leo, accumsan a arcu maximus, hendrerit malesuada leo. Ut sodales et eros et maximus.",
  },
  {
    year: 2012,
    title: "Junior Scuba Diver",
    location: "Phuket, Thailand",
    duration: "4 Years",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed tellus turpis. Pellentesque quis pulvinar neque. Proin lorem leo, accumsan a arcu maximus, hendrerit malesuada leo. Ut sodales et eros et maximus.",
  },
];

export default function Work() {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-excon font-bold text-center text-[#001b5e] mb-6">About Me</h1>

      {data.map((item, index) => (
        <WorkItem
          key={index}
          year={item.year}
          location={item.location}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
}
