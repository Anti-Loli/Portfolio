"use client"

import ContactPage from "../components/ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata ={
  title: "Contact"
};


export default function Contact(){
  
  return (
    <main className="flex flex-1 justify-center items-center h-screen">
         <ContactPage/>
    </main>
  );
}