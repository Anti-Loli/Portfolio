import Image from 'next/image'

export default function Contact(){
  return (
    <main className="flex justify-center items-center h-screen">
          <div className="bg-white shadow-lg rounded-xl p-6 justify-center items-start mx-auto my-auto">
                  <div className="grid grid-cols-2 gap-6">
                    {/*Left green info side*/}
                    <div className="flex flex-col gap-4"> 
                      <p className="text-5xl text-center">Contact</p>
                      
                      <div className="text-3xl text-center">
                        <p>The best way to contact me is via email.</p>
                        <p>Feel free to email me at the address below,</p>
                        <p>or fill out the provided form.</p>
                      </div>
                      

                      <p className="text-3xl text-center">
                        HunterHockman@outlook.com
                      </p>
                          
                      <label className='text-2xl'>Name: <input className='outline-2' type="text" name="name" required /></label>
                      <label className='text-2xl'>Email: <input className='outline-2' type="text" name="email" required/></label>
                      <label className='text-2xl'>Message: <input className='outline-2' type="text" name="message" required/></label>

                      <button className = "bg-[#107C10] text-white text-3xl">
                        Send me an email
                      </button> 
                    </div> 
                    
                    {/*Right profile side*/}
                    <div className="flex flex-col gap-4"> 
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
                </div>
        </main>
  );
}