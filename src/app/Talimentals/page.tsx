import Project from "../components/Project";

export default function Talimentals(){
  return (
    <main className="flex justify-center items-stretch h-screen bg-center bg-contain" style={{backgroundImage: `url(/TalimentalsWBPic.png)`}}>
         <Project
            imageSource="/Steven.jpg"
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