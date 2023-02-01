import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Semina</title>
        <meta name="description" content="Semina nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </>
  );
}
