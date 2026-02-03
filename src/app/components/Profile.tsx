import ProfileButton from "../components/ProfileButton";
import Image from 'next/image'

export default function XboxProfile({ username }: { username: string }) {
  return (
    <main className="bg-white shadow-lg rounded-xl p-6 justify-center items-start h-auto max-h-[80dvh] w-auto mx-auto my-auto flex gap-x-4">
         
         {/*Left green info side*/}
        <div className="grid grid-flow-col grid-rows-6 justify-items-center"> 
          <div> 
            <ProfileButton> Professional </ProfileButton>
            </div> 
              <div className=" outline-2 px-4 py-10 bg-[#107C10] text-white row-span-4 text-lg">Hi I’m Hunter a software developer with specialties in game and simulation programming.  I... 
              <ul>
                  <li>design and develop gameplay mechanics in Unity and/or Unreal Engine,</li>
                  <li>develop desktop applications using .NET,</li>
                  <li>create game design documents,</li>
                  <li>create and manage databases, and</li>
                  <li>do front and backend web development</li>
              </ul> 

                <div className="font-bold text-lg">Education</div>

              <ul>
                  <li>Bachelor’s of Science in Game and Simulation Programming with Minor in Mathematics</li> 
                  <li>(Graduated Cum Laude 2024)</li>
               </ul> 
              </div> 
        </div> 
         
         {/*Right profile side*/}
        <div className="grid grid-flow-col grid-rows-5 justify-items-center "> 
              <div> 
                <ProfileButton href = "/about(personal)"> Personal </ProfileButton> 
              </div> 
            <div className="row-span-4 bg-gray-500 text-white"> {/*Try setting the length and width to set values instead of based on content. Make sure they scale and aren't hard numbers*/}
              <div className="text-xl">Hunter Hockman</div>
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

              <div className="text-xl">Maryland</div>

              <div className="text-xl leading-12.5"> 
                Tools List
                <ul>
                    <li>Tools: Unreal Engine, Unity 2D/3D, Blender, Visual Studio 2022,</li>
                    <li>Visual Studio Code, Notion, GameMaker Studio 2, MySQL Workbench, Github, Ubuntu</li>
                </ul>

                <ul>
                    <li>Development: C++, C#, .NET, Java, HTML, CSS, PHP, React, React Native, </li>
                    <li>Next.JS, JavaScript, Typescript, Python, Linux, x86 64-bit Assembly</li>
                </ul>
              </div>
            </div>
        </div> 
      </main>


  );
}