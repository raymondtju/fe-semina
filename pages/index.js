import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import CardEvent from "@/components/CardEvent";
import { getData } from "@/utils/fetchData";
import Brand from "@/components/Brand";
import Stories from "@/components/Stories";
import Statistics from "@/components/Statistics";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  console.log(props.data);
  return (
    <>
      <Head>
        <title>Semina</title>
        <meta name="description" content="Semina nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Brand />
      <CardEvent
        data={props.data}
        title="Featured Events"
        subTitle="Grow Today"
      />
      <Stories />
      <Statistics />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await getData("api/v1/events");
  const result = res.data;

  // Pass data to the page via props
  return {
    props: { data: result },
  };
}
