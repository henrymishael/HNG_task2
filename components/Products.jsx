"use client";
import React, { useState } from "react";
import Search from "./Search";
import Categories from "./Categories";
import Dress from "./Dress";
import Top from "./Top";
import Activewear from "./Activewear";
import Button from "./Button";
import Outwear from "./Outwear";
// import productList from "@/productList";
import Footer from "./Footer";

const Products = () => {
  const [view, setView] = useState("Dresses");
  return (
    <section className='flex flex-col px-5 md:px-10'>
      <div className='flex flex-col xl:flex-row xl:justify-between  '>
        <Categories view={view} setView={setView} />
        <Search />
      </div>
      <div className=''>
        {view === "Dresses" && (
          <div className=''>
            <Dress view={view} setView={setView} />
          </div>
        )}
        {view === "Top" && <Top view={view} setView={setView} />}
        {view === "Button" && <Button view={view} setView={setView} />}
        {view === "Outwear" && <Outwear view={view} setView={setView} />}
        {view === "Activewear" && <Activewear view={view} setView={setView} />}
      </div>
    </section>
  );
};

export default Products;
