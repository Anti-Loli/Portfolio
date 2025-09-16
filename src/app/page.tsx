import Button from "./components/Button";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      
      <div>
      <Button href = "/work">
        Work 
      </Button>

      <Button href = "/about">
        About 
      </Button>

      <Button>
        Fun Facts
      </Button>
      </div>
      
      <div>
      <Button>
        Hello, I’m Hunter Software Developer and Correctional Officer
      </Button>

      <Button>
        Dark Mode On/Off
      </Button>

      <Button>
        Sound On/Off
      </Button>
      </div>
      
      <div>
      <Button href = "/links">
        Links 
      </Button>

      <Button href = "/contact">
        Contact 
      </Button>

      <Button>
        .
      </Button> 
      </div>
      
      
    </main>
  );
}
