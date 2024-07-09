"use client";
import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Products from "@/components/Products";
import Image from "next/image";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <RecoilRoot>
      <main className='min-h-screen bg-background scrollbar-none '>
        <Banner />

        <Products />
      </main>
    </RecoilRoot>
  );
}
