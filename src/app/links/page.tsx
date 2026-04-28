import Button from "../components/Button";

export default function Links(){
    return (
    <main className="flex flex-1 justify-center items-center h-screen">
      <div className="grid grid-cols-4">
        
        <Button href = "https://www.linkedin.com/in/hunter-hockman/">
          LinkedIn 
        </Button>

        <Button href = "https://github.com/Anti-Loli">
          GitHub 
        </Button>

        <Button  href = "https://hunter-hawkman.itch.io/">
          Itch.io 
        </Button>

        <Button>
             
        </Button>

        <Button href = "/contact">
          Send an email 
        </Button>

        <Button>
             
        </Button>

        <Button>
            
        </Button>

        <Button>
            
        </Button>
      </div>
    </main>
  );
}