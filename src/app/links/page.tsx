import Button from "../components/Button";
import IconButton from "../components/IconButton";


export default function Links(){
    return (
    <main className="flex flex-1 justify-center items-center h-screen">
      <div className="grid grid-cols-4">
        
        <IconButton imageSource = "/ButtonIcons/linkedin.png" href = "https://www.linkedin.com/in/hunter-hockman/">
          LinkedIn 
        </IconButton>

        <IconButton imageSource = "/ButtonIcons/github.png" href = "https://github.com/Anti-Loli">
          GitHub 
        </IconButton>

        <IconButton imageSource = "/ButtonIcons/itch-io.png" href = "https://hunter-hawkman.itch.io/">
          Itch.io 
        </IconButton>

        <Button>
             
        </Button>

        <IconButton imageSource = "/ButtonIcons/send-email.png" href = "/contact">
          Send an Email 
        </IconButton>

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