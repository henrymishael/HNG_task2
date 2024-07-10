"use client";
import { Poppins } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Banner from "@/components/Banner"
import store from "../store/store";

import "./globals.css";
import { RecoilRoot } from "recoil";
import { Provider } from "react-redux";

const poppins = Poppins({
  weight: ["400", "700"], // Specify the weights you need
  subsets: ["latin"], // Specify the subsets you need
  display: "swap", // Optional: adjust font display strategy
});

const metadata = {
  title: "Yindira",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang='en'>
        <body
          className={`${poppins.className} max-w-[1400px] flex flex-col justify-center `}
        >
          <Header />

          <div className=''>{children}</div>
          <Footer />
        </body>
      </html>
    </Provider>
  );
}
