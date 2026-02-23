import ProfileButton from "../components/ProfileButton";
import Image from 'next/image'

export default function XboxProfile({ username }: { username: string }) {
  return (
    <main className="bg-white shadow-lg rounded-xl p-6 justify-center items-start mx-auto my-auto">
        <div className="grid grid-cols-2 gap-6">
          {/*Left green info side*/}
          <div className="flex flex-col gap-4"> 
            <div> 
              <ProfileButton className="w-192 h-24 !text-black bg-white rounded-lg cursor-pointer text-base block m-3"> Professional </ProfileButton>
              </div> 
                <div className="outline-2 px-4 py-10 bg-[#107C10] text-white"> 
                  
                  <p className="text-xl">Hi I’m Hunter, a software developer with specialties in game and simulation programming.</p>
                  <p className="text-xl">I... </p>
                  
                <ul className="list-disc pl-4 text-lg leading-8">
                    <li>design and develop gameplay mechanics in Unity and/or Unreal Engine,</li>
                    <li>develop desktop applications using .NET,</li>
                    <li>create game design documents,</li>
                    <li>create and manage databases, and</li>
                    <li>do frontend web development with React and Next.JS</li>
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