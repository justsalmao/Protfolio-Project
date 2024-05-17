import { useState } from "react"
export default function Contact() {


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const name = formData.get('name');
  //   const email = formData.get('email');
  //   const subject = formData.get('subject');
  //   const message = formData.get('message');

  //   if (!name || !email || !subject || !message) {
  //     alert('Please fill out all required fields.');
  //     return;
  //   }
  // };

  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 font-excon"> 
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">Contact Me</h1>
      <form action="https://getform.io/f/zbzkwgva" method="POST" encType="multipart/form-data">
        <div className=" w-full grid md:grid-cols-2 lg:grid-cols-2 gap-3  py-2">
          <div className="w-full flex flex-col md:col-span-1 lg:col-span-1 py-2">
            <label className="uppercase text-sm font-bold py-2">Name</label>
            <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="name"/>
          </div>
          <div className="flex flex-col md:col-span-2 lg:col-span-2 py-2">
            <label className="uppercase text-sm font-bold py-2">Phone</label>
            <input className="  border-2 rounded-lg p-3 flex border-gray-300 " type="text" name="phone"/>
          </div>
          <div className="flex flex-col md:col-span-2 lg:col-span-4 py-2">
            <label className="uppercase text-sm font-bold py-2">Email</label>
            <input className="  border-2 rounded-lg p-3 flex border-gray-300 w-full " type="email" name="email"/>
          </div>
          <div className="flex flex-col md:col-span-2 lg:col-span-4 py-2">
            <label className="uppercase text-sm font-bold py-2">Subject</label>
            <input className="  border-2 rounded-lg p-3 flex border-gray-300 w-full " type="text" name="subject"/>
          </div>
          <div className="flex flex-col md:col-span-2 lg:col-span-4 py-2">
            <label className="uppercase text-sm font-bold py-2 ">Message</label>
            <textarea className=" border-2 rounded-lg p-3 border-gray-300 w-full " rows="10" name="message"> </textarea>
          </div>
          <button className="bg-[#f59e0b] text-gray-100 mt-4 w-[30%] p-4 rounded-lg md:col-span-2 lg:col-span-4 font-bold place-self-center hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300">
            Send
          </button>
        </div>
      </form>
    </div>
  )
}
