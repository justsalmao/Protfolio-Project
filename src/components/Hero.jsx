import { TypeAnimation } from "react-type-animation";
import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

export default function Hero() {
  return (
    <div id="hero" className="relative">
      <img
        className="w-full h-screen object-cover"
        src="https://images.unsplash.com/photo-1682687982360-3fbab65f9d50?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/20"> </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-7xl font-bold font-excon hover:scale-125 hover:text-[#f59e0b]"> Layan Rami</h1>
        <h2 className="text-4xl mb-4px mt-4">
          I'm a <br/>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Master Scuba Diver",
              1000, // wait 1s 
              "Certified Diving Trainer",
              1000,
              "Open Water Lover",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{fontSize: "1em", display: "inline-block", color:"#f59e0b", fontFamily:"outfit" }}
            repeat={Infinity}
          />
        </h2>
        <div className=" flex justify-between items-center mx-auto w-full max-w-[200px] mt-4">
            <FaTwitter className="cursor-pointer 500 hover:scale-150" size={20}/>
            <FaFacebookF className="cursor-pointer hover:scale-150" size={20}/>
            <FaInstagram className="cursor-pointer hover:scale-150" size={20}/>
            <FaLinkedinIn className="cursor-pointer hover:scale-150" size={20}/>
        </div>
      </div>
    </div>
  );
}
