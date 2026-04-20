import Project from "../components/Project";

export default function TimeForce(){
  return (
    <main className="flex flex-1 justify-center items-stretch h-screen bg-center bg-cover" style={{backgroundImage: `url(/TimeForceWBPic.png)`}}>
         <Project
            imageSource="/TimeForceSC.png"
            downloadURL="https://hunter-hawkman.itch.io/power-rangers-timeforce-quantum-quest"
            repoURL="/nopage"
            title="Power Rangers Time Force: Quantum Quest"
            description="A project I made. IN A CAVE!!! WITH A BOX OF SCRAPS!!!"
            toolsUsed={["Unity", "Github", "Visual Studio"]}
            languagesUsed={["C#"]}
         />
    </main>
  );
}