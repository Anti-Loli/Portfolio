import ProfileButton from "../components/ProfileButton";
import Image from 'next/image'

export default function XboxProfile({ username }: { username: string }) {
  return (
    <main className="bg-white shadow-lg rounded-xl min(p-6, 8%) justify-center items-start h-auto max-h-[80dvh] w-auto mx-auto my-auto flex gap-x-4">
         
         {/*Left green info side*/}
        <div className="grid grid-flow-row grid-rows-4 gap-4 justify-items-center auto-rows-auto"> 
          <div> 
            <ProfileButton> Professional </ProfileButton>
            </div> 
              <div className=" outline-2 p-10  bg-[#107C10] text-white">Hi I’m Hunter a software developer with specialties in game and simulation programming.  I... 
              <ul>
                  <li>design and develop gameplay mechanics in Unity and/or Unreal Engine,</li>
                  <li>develop desktop applications using .NET,</li>
                  <li>create game design documents,</li>
                  <li>create and manage databases, and</li>
                  <li>do front and backend web development</li>
              </ul> 

                Education

              <ul>
                  <li>Bachelor’s of Science in Game and Simulation Programming with Minor in Mathematics</li> 
                  <li>(Graduated Cum Laude 2024)</li>
               </ul> 
              </div> 
        </div> 
         
         {/*Right profile side*/}
        <div className="grid grid-flow-row grid-rows-4 gap-4 justify-items-center auto-rows-auto"> 
              <div> 
                <ProfileButton href = "/about(personal)"> Personal </ProfileButton> 
                </div> 
            <div className="outline-2"> 
              <div className=" bg-gray-500 text-white">Hunter Hockman</div>
              <div className="grid grid-flow-col grid-cols-2">
                <Image
                  src="/ProfilePicture.jpg"
                  alt="Profile picture of the website owner"
                  width={100}
                  height={75}
                /> 

                <ul>
                  <li>Software Developer with a</li>
                  <li>Specialty in game and simulation programming</li> 
                  <li>Correctional Officer for the FBOP</li>
                </ul>
              </div>

              <div className=" bg-gray-500 text-white">Maryland</div>

              <div className=" bg-gray-500 text-white">
                Tools List
                <ul>
                    <li>Tools: Unreal Engine, Unity 2D/3D, Blender, Visual Studio 2022, Visual Studio Code,</li>
                    <li>Notion, GameMaker Studio 2, MySQL Workbench, Ubuntu, Github</li>
                </ul>

                <ul>
                    <li>Development: C++, C#, .NET,  Java, JavaScript,</li>
                    <li>HTML, CSS, PHP, React, React Native, Python,</li>
                    <li>Linux, x86 64-bit Assembly</li>
                </ul>
              </div>
            </div>
        </div> 
      </main>


  );
}