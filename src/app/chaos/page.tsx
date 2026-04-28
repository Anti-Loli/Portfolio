import Project from "../components/Project";

export default function chaos(){
  return (
    <main className="flex flex-1 justify-center items-stretch h-screen bg-center bg-cover" style={{backgroundImage: `url(/)`}}>
         <Project
            imageSource="/Steven.jpg"
            downloadURL="https://hunter-hawkman.itch.io/chaos-at-circus-babys"
            repoURL="https://github.com/Anti-Loli/Capstone"
            title="Chaos at Circus Baby's"
            description="My college capstone project. A VR escape room set in the FNAF universe where the player must solve the puzzles as fast as they can to escape before they are hunted."
            toolsUsed={["Unreal 5", "Github", "Visual Studio", "MySQL"]}
            languagesUsed={["C++", "Unreal Blueprints", "HTML", "CSS", "PHP", "SQL"]}
         />
    </main>
  );
}