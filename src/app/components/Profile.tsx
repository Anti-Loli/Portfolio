import Button from "../components/Button";

export default function XboxProfile({ username }: { username: string }) {
  return (
    <main className="justify-center items-center h-screen mx-auto flex gap-x-4 rounded-xl bg-white p-6 shadow-lg">
        <div className="grid grid-flow-row grid-rows-4 gap-4 justify-items-center -mr-2"> 
          <div className="col-span-18 px-5"> 
            <Button> Professional </Button>
            </div> 
            <div className="col-span-18 outline-2 px-12">List of stuff</div> 
            <div className="col-span-18 outline-2 px-10">Education info</div> 
            </div> 
            
            <div className="grid grid-flow-row grid-rows-4 gap-4 justify-items-center -ml-2"> 
              <div className="col-span-16 px-16"> 
                <Button href = "/about(personal)"> Personal </Button> 
                </div> 
            <div className="col-span-15 outline-2 grid grid-flow-col grid-cols-2"> Name Profession Current Job </div> 
            <div className="col-span-16 outline-2 px-16">Tools List</div> 
        </div> 
      </main>


  );
}