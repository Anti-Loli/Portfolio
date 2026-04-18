import Project from "../components/Project";

export default function Talimentals(){
  return (
    <main className="flex flex-1 justify-center items-stretch h-screen bg-center bg-cover" style={{backgroundImage: `url(/TalimentalsSC.png)`}}>
         <Project
            imageSource="/TalimentalsBG.png"
            downloadURL="https://hunter-hawkman.itch.io/talimentals"
            repoURL="https://github.com/Anti-Loli/Gameder"
            title="Tailmentals"
            description="A group project I made. IN A CAVE!!! WITH A BOX OF SCRAPS!!!"
            toolsUsed={["Unity", "Github"]}
            languagesUsed={["C#"]}
         />
    </main>
  );
}