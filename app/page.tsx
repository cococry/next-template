"use client"
import React from 'react';
import BooksPage from "@/components/BooksPage";
import AboutTheAuthor from "@/components/AboutTheAuthor";
import HomePage from "@/components/HomePage";
import ContactPage from "@/components/ContactPage";
import Footer from "@/components/FooterComp";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 bg-white">
    <img className="w-[300px] rounded-lg shadow-lg" src="/images/gigachad.gif"/>
      <h1 className="font-bold font-poppins">Next.js Template</h1>
      <p className="font-inter text-neutral-900 mt-[-10px]">By Cococry</p>

    </main>
  );
}

