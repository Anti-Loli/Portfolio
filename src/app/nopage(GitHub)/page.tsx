"use client"

import IconButton from "../components/IconButton";
import { useRouter } from "next/navigation";

export default function NoPageGitHub(){

  const router = useRouter();

  return (
    <main className="flex flex-1 flex-col justify-center items-center h-screen bg-center bg-cover">
         <p className="flex text-white text-2xl lg:text-5xl items-center text-center tracking-wide pb-12">Sorry <br/> This project doesn&apos;t have a GitHub Repo page. <br/> Please click the provided button to go back to the previous page.</p>

        <IconButton imageSource="/ButtonIcons/back.png" onClick={router.back}>Back</IconButton>

    </main>
  );
}