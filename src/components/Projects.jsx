import caveImg from "./cave-diving.png"
import wreckImg from "./wreck-diving.png"
import sharkImg from "./shark-diving.png"
import reefImg from "./reef-diving.jpg"
import ProjectItem from "./ProjectItem"

export default function Projects() {
   return (
     <div id='projects' className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
<h1 className=" font-excon text-4xl font-bold text-center text-[#001b5e]"> Diving Expertise </h1>
<p className="text-center py-8"> 
Fusce eu porta augue. Aenean vel eros sem. Vivamus eleifend risus ut mi tincidunt condimentum. In tempor odio et scelerisque molestie. Vestibulum eu vulputate augue. In ullamcorper dui ac sem porttitor, consequat iaculis purus blandit. Maecenas libero nisl, consectetur eu pharetra vel, aliquam maximus massa. Ut convallis lacinia leo a efficitur. Curabitur at aliquet nisi.
</p>
<div className="grid lg:grid-cols-2 gap-12">
  <ProjectItem img={caveImg}  title='Cave Diving'/>
  <ProjectItem img={wreckImg} title='Wreck Diving'/>
  <ProjectItem img={sharkImg} title='Shark Diving'/>
  <ProjectItem img={reefImg} title='Reef Diving'/>
</div>
     </div>
   )
 }
 