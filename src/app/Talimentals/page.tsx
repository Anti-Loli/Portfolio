import Project from "../components/Project";

export default function Talimentals(){
  return (
    <main className="flex flex-1 justify-center items-stretch h-screen bg-center bg-cover" style={{backgroundImage: `url(/TalimentalsSC.png)`}}>
         <Project
            imageSource="/TalimentalsBG2.png"
            downloadURL="https://hunter-hawkman.itch.io/talimentals"
            repoURL="https://github.com/Anti-Loli/Gameder"
            title="Tailmentals"
            description="A semester long group project to create a prototype from a previously made design document. The game is a monster battler RPG similar to Pokemon."
            toolsUsed={["Unity", "Github"]}
            languagesUsed={["C#"]}
         />
    </main>
  );
}