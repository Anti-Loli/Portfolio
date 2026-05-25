"use client"

import Image from 'next/image'
import { resolve } from 'path';
import { FormEvent } from 'react';
import { useState } from 'react';
import type { Metadata } from "next";

export const metadata: Metadata ={
  title: "Contact"
};


export default function ContactPage(){
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) 
  {
    e.preventDefault();//prevents page from reloading

    const data = {
        name: name,
        email: email,
        message: message,
    };
    
    console.log(data);

    const response = await fetch("/api/contact", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
    });

    if(response.ok)
    {
      console.log("Form submitted: ", data);
      //user feedback
    }
    //error handeling  
  }
  
  return (
        <main className="bg-white shadow-lg rounded-xl p-6 justify-center items-start mx-auto my-auto">
          <div className="grid grid-cols-2 gap-6">
            {/*Left green info side*/}
            <div className="flex flex-col gap-4"> 
              <p className="text-5xl text-center">Contact Page</p>
                      
              <div className="text-3xl text-center">
                <p>The best way to contact me is via email.</p>
                <p>Feel free to email me at the address below,</p>
                <p>or fill out the provided form.</p>
              </div>
                      

                <p className="text-3xl text-center">
                HunterHockman@outlook.com
              </p>
                          
                <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                    <label className='text-2xl'>Name: <input className='outline-2' type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" minLength={5} maxLength={50} required /></label>
                    <label className='text-2xl'>Email: <input className='outline-2' type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" required/></label>
                    <label className='text-2xl'>Message: <textarea className='outline-2 w-96' name="message" value={message} onChange={(e) => setMessage(e.target.value)} maxLength={200} required/></label>

                    <button type ="submit" className = "bg-[#107C10] text-white text-3xl">
                       Send email
                    </button> 
                </form>          
                </div> 
                    
            {/*Right profile side*/}
            <div className="flex flex-col gap-4 bg-gray-500"> 
                <div className="row-span-4 bg-gray-500 text-white"> 
                  <div className="text-xl bg-orange-500">Hunter Hockman</div>
                    <div className="grid grid-flow-col bg-white text-black"> 
                    <Image
                      src="/ProfilePicture.jpg"
                      alt="Profile picture of the website owner"
                      width={125}
                      height={75}
                    /> 
          
                    <ul className="text-left  text-xl">
                      <li>Software Developer with a</li>
                      <li>Specialty in game and simulation programming</li>
                      <li>Correctional Officer for the FBOP</li>
                    </ul>
                  </div>
          
                    <div className="text-2xl pl-2.5 pt-2"> Maryland</div>
          
                    <div className="text-2xl leading-10 pl-2.5"> 
                    <ul>
                        <li> Tools: Unreal Engine, Unity 2D/3D, Blender, Visual Studio 2022,</li>
                        <li> Visual Studio Code, Notion, GameMaker Studio 2, MySQL Workbench,  </li>    
                        <li> Github, Ubuntu</li>
                    </ul>
          
                    <ul>
                        <li> Development: C++, C#, .NET,  Java, JavaScript, Next.JS,  </li>
                        <li> HTML, CSS, PHP, React, React Native, Python, Linux, </li>
                        <li> x86 64-bit Assembly</li>
                    </ul>                
                    </div>
                </div>
            </div> 
            </div>
        </main>
        
  );
}