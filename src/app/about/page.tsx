import ProfileButton from "../components/ProfileButton";
import Image from 'next/image'
import type { Metadata } from "next";

export const metadata: Metadata ={
  title: "About"
};

export default function About(){
    return (
    
    <main className="flex flex-1 justify-center items-center">
      <div className="bg-white shadow-lg rounded-xl p-6 mx-auto my-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/*Left green info side*/}
                <div className="flex flex-col gap-4"> 
                  <div> 
                    <ProfileButton className="w-72 lg:w-84 xl:w-192 h-24 !text-black bg-white rounded-lg text-base block m-3"> Professional </ProfileButton>
                  </div> 
                      <div className="outline-2 px-4 py-10 bg-[#107C10] text-white"> 
                        
                        <p className="text-xl">Hi I’m Hunter, a software developer with specialties in web and application development.</p>
                        <p className="text-xl">I... </p>
                        
                      <ul className="list-disc pl-4 text-lg leading-8">
                          <li>do front and backend web development in React,</li>
                          <li>develop gameplay mechanics and systems in Unity or Unreal,</li>
                          <li>develop desktop and mobile applications in React or .NET, and</li>
                          <li>create and manage database systems.</li>
                      </ul> 
      
                        <div className="font-bold text-2xl">Education</div>
      
                      <ul className="text-lg  leading-8.5">
                          <li>Bachelor’s of Science in Game and Simulation Programming </li>
                          <li>with Minor in Mathematics</li>
                          <li>(Graduated Cum Laude 2024)</li>
                      </ul> 
                      </div> 
                </div> 
                
                {/*Right profile side*/}
                <div className="flex flex-col gap-4"> 
                      <div> 
                        <ProfileButton href = "/about(personal)"> Personal </ProfileButton> 
                      </div> 
                    <div className="row-span-4 bg-gray-500 text-white"> 
                      <div className="text-2xl">Hunter Hockman</div>
                      <div className="grid grid-flow-col bg-white text-black"> 
                        <Image
                          src="/ProfilePicture.jpg"
                          alt="Profile picture of the website owner"
                          width={125}
                          height={75}
                        /> 
      
                        <ul className="text-left  text-xl">
                          <li>Software Developer with</li>
                          <li>Specialties in web and application development</li>
                          <li>Currently a Unit Secretary for the BOP</li>
                        </ul>
                      </div>
      
                      <div className="text-2xl pl-2.5 pt-2"> Maryland</div>
      
                      <div className="text-xl leading-8.5 pl-2.5"> 
                        <ul>
                            <li>Programming Languages: C#, C++, JavaScript, TypeScript, Java, Python</li>
                            <li>Frontend frameworks: React, React Native, Next.js, Tailwind CSS</li>
                            <li>Backends & APIs: Node.js, REST APIs, Resend API</li>
                            <li>Databases: MySQL</li>
                            <li>Game Engines: Unity, Unreal Engine</li>
                            <li>Tools & Platforms: Git, GitHub, Visual Studio, VS Code, Blender, Figma, Vercel</li>
                        </ul>
                      </div>
                    </div>
                </div> 
              </div>
            </div>
    </main>
  );
}