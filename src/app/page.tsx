import Button from "./components/Button";
import IconButton from "./components/IconButton";

export default function Home() {
  return (
    <main className="flex flex-1 justify-center items-center">
      <div className="grid grid-cols-4">
          <IconButton imageSource = "/ButtonIcons/disc.png" href = "/work">
            Work 
          </IconButton>

          <Button className="col-span-2 row-span-2 h-auto w-auto">
            <h1 className="text-6xl mb-24">Hello, I’m Hunter</h1> 
            <p className="text-4xl break-all ">Software Developer</p>
            <p className="text-4xl break-all ">and Correctional Officer</p>
          </Button>

          <IconButton imageSource = "/ButtonIcons/link.png" href = "/links">
            Links 
          </IconButton>

          <IconButton imageSource = "/ButtonIcons/person.png" href = "/about">
            About 
          </IconButton>

          <IconButton imageSource = "/ButtonIcons/mailbox.png" href = "/contact">
            Work 
          </IconButton>

          <IconButton imageSource = "/ButtonIcons/book.png">
            Fun Facts 
          </IconButton>

          <IconButton imageSource = "/ButtonIcons/dark-mode.png">
            Dark Mode On/Off 
          </IconButton>

          <IconButton imageSource = "/ButtonIcons/sound.png">
            Sound On/Off
          </IconButton>
          
          <Button/>
      </div>
    </main>
  );
}
