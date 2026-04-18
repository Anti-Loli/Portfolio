import Button from "./components/Button";

export default function Home() {
  return (
    <main className="flex flex-1 justify-center items-center">
      <div className="grid grid-cols-4">
          <Button href = "/work">
            Work 
          </Button>

          <Button className="col-span-2 row-span-2 h-auto w-auto">
            <h1 className="text-6xl mb-24">Hello, I’m Hunter</h1> 
            <p className="text-4xl break-all ">Software Developer</p>
            <p className="text-4xl break-all ">and Correctional Officer</p>
          </Button>

          <Button href = "/links">
            Links 
          </Button>

          <Button href = "/about">
            About 
          </Button>

          <Button href = "/contact">
            Contact 
          </Button>

          <Button>
            Fun Facts
          </Button>

          <Button>
            Dark Mode On/Off
          </Button>

          <Button>
            Sound On/Off
          </Button>
          
          <Button/>
      </div>
    </main>
  );
}
