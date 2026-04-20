import Project from "../components/Project";

export default function chaos(){
  return (
    <main className="flex flex-1 justify-center items-stretch h-screen bg-center bg-cover" style={{backgroundImage: `url(/ChaosWBPic.jpg)`}}>
         <Project
            imageSource="/Steven.jpg"
            downloadURL="https://hunter-hawkman.itch.io/chaos-at-circus-babys"
            repoURL="https://github.com/Anti-Loli/Capstone"
            title="Chaos at Circus Baby's"
            description="Unreal VR game that was also my college capstone project."
            toolsUsed={["Unreal 5", "Github", "Visual Studio", "Oculus Quest 2"]}
            languagesUsed={["C++", "Unreal Blueprints"]}
         />
    </main>
  );
}