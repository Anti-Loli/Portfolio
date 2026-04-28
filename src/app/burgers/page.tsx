import Project from "../components/Project";

export default function burgers(){
  return (
    <main className="flex flex-1 justify-center items-stretch h-screen bg-center bg-cover" style={{backgroundImage: `url(/BurgerSC.png)`}}>
         <Project
            imageSource="/BurgerBG.png"
            downloadURL="https://shadestudiosgames.itch.io/bald-eagle-burgers"
            repoURL="https://github.com/StevenM2020/BulletHellGameJam"
            title="Bald Eagle Burgers: the Fight for American Independence"
            description="This is a group project made after college graduation with the intent of learning Unreal C++ and remote workflows. It is a bullet hell arcade shooter where the player is a Bald Eagle helping fight for American Independence by shooting cheeseburgers at the British"
            toolsUsed={["Unreal 5", "Github", "Visual Studio"]}
            languagesUsed={["C++", "Unreal Blueprints"]}
         />
    </main>
  );
}