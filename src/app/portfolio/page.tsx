import Project from "../components/Project";

export default function Portfolio(){
    return(
        <main className="flex flex-1 justify-center items-stretch h-screen bg-center bg-cover">
                 <Project
                    imageSources={["/Portfolio/PortfolioBG.png", "/Portfolio/PortfolioBG2.png", "/Portfolio/PortfolioBG3.png", "/Portfolio/PortfolioBG4.png", "/Portfolio/PortfolioBG5.png", "/Portfolio/PortfolioBG6.png"]}
                    downloadURL="/nopage"
                    repoURL="https://github.com/Anti-Loli/Portfolio"
                    title="My Portfolio Website"
                    description="The very website you are currently browsing. A portfolio website built form the ground up with Next.js for the purpose of displaying my work as a software developer."
                    toolsUsed={["React", "Next.js", "Tailwind CSS", "VS Code", "GitHub"]}
                    languagesUsed={["TypeScript"]}
                 />
            </main>
    )
}