import Project from "../components/Project";

export default function TimeForce(){
  return (
    <main className="flex flex-1 justify-center items-stretch h-screen bg-center bg-cover">
         <Project
            imageSources={["/TimeForceBG.png", "/TimeForceBG2.png", "/TimeForceBG3.png", "/TimeForceBG4.png", "/TimeForceBG5.png", "/TimeForceBG6.png"]}
            downloadURL="https://hunter-hawkman.itch.io/power-rangers-timeforce-quantum-quest"
            repoURL="/nopage(GitHub)"
            title="Power Rangers Time Force: Quantum Quest"
            description="A two week assignment I turned into a fangame for fun. Play as the Quantum ranger from Power Rangers Time Force and escape from  a cave of mutants with the quantum morpher."
            toolsUsed={["Unity", "Github", "Visual Studio", "LibreSprite"]}
            languagesUsed={["C#"]}
         />
    </main>
  );
}