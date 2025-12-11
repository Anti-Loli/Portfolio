import ProfileButton from "../components/ProfileButton";

export default function XboxProfile({ username }: { username: string }) {
  return (
    <main className="bg-white shadow-lg rounded-xl p-6 justify-center items-start h-auto max-h-[80vh] w-auto w-max-7/12 mx-auto my-auto flex gap-x-4">
        <div className="grid grid-flow-row grid-rows-4 gap-4 justify-items-center -mr-2 auto-rows-auto"> 
          <div className=" px-5"> 
            <ProfileButton> Professional </ProfileButton>
            </div> 
            <div className=" outline-2 px-12">List of stuff</div> 
            <div className=" outline-2 px-10">Education info</div> 
            </div> 
            
            <div className="grid grid-flow-row grid-rows-4 gap-4 justify-items-center -ml-2"> 
              <div className=" px-16"> 
                <ProfileButton href = "/about(personal)"> Personal </ProfileButton> 
                </div> 
            <div className="outline-2 grid grid-flow-col grid-cols-2"> Name Profession Current Job </div> 
            <div className=" outline-2 px-16">Tools List</div> 
        </div> 
      </main>


  );
}