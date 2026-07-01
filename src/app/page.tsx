import Button from "./components/Button";
import IconButton from "./components/IconButton";
import type { Metadata } from "next";

export const metadata: Metadata ={
  title: "Home"
};


export default function Home() {
  return (
    <main className="flex flex-1 justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
          <IconButton imageSource = "/ButtonIcons/disc.png" href = "/work">
            Work 
          </IconButton>

          <button className="col-span-1 xl:col-span-2 row-span-1 xl:row-span-2 h-auto w-auto bg-[#107C10] text-white font-bold rounded-lg text-base m-3">
            <h1 className="text-3xl md:text-4xl xl:text-6xl mb-12 xl:mb-24">Hello, I’m Hunter</h1> 
            <p className="text-2xl xl:text-4xl break-all ">Software Developer</p>
            <p className="text-2xl xl:text-4xl break-all ">and Unit Secretary</p>
          </button>

          <IconButton imageSource = "/ButtonIcons/link.png" href = "/links">
            Links 
          </IconButton>

          <IconButton imageSource = "/ButtonIcons/person.png" href = "/about">
            About 
          </IconButton>

          <IconButton imageSource = "/ButtonIcons/mailbox.png" href = "/contact">
            Contact 
          </IconButton>

          {/*
          <IconButton imageSource = "/ButtonIcons/book.png">
            Fun Facts 
          </IconButton>

          <IconButton imageSource = "/ButtonIcons/dark-mode.png">
            Dark Mode On/Off 
          </IconButton>

          <IconButton imageSource = "/ButtonIcons/sound.png">
            Sound On/Off
          </IconButton>
          */}
          <Button/>
          <Button/>
          <Button/>
          <Button/>
      </div>
    </main>
  );
}
