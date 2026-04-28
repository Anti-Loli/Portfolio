import Project from "../components/Project";

export default function Talimentals(){
  return (
    <main className="flex flex-1 justify-center items-stretch h-screen bg-center bg-cover">
         <Project
            imageSource="/GamderWBPic2.png"
            downloadURL="/nopage"
            repoURL="https://github.com/Anti-Loli/Gameder"
            title="Gamder"
            description="A React Native recreation of Tinder but for video games. Find the next game of your dreams or a game to play for the night."
            toolsUsed={["React", "React Native", "Visual Studio Code"]}
            languagesUsed={["JavaScript"]}
         />
    </main>
  );
}