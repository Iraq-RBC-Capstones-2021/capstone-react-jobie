import Head from "next/head";
import Header from "../components/Header";
import HeaderImage from "../assets/img_home.png";
import Image from "next/image";
import SearchButton from "../components/Home/SearchButton";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  function bot() {}
  return (
    <div className=" ">
      <Head>
        <title>Jobie</title>
        <link rel="icon" href="/icon_Logo.ico" />
      </Head>
      <Header
        title="10,254 Jobs"
        title2="Are Listed Here!"
        subtitle="Find your dream job now"
        light={false}
        img={HeaderImage}
      >
        <SearchButton />
      </Header>
    </div>
  );
}
