import Image from "next/image";
import { Section1 } from "./components/acceuil/Section1";
import { Header } from "./components/Header";
import { Cat } from "./components/produits/Cat";
import { Section3 } from "./components/acceuil/Section3";
// import { Articles: } from "./components/produits/Articles";
import { Section2 } from "./components/acceuil/Section2";
import { Ogou } from "./components/acceuil/Ogou";
import { Footer } from "./components/Footer";
import { Section4 } from "./components/acceuil/Section4";
import { Apropos } from "./components/acceuil/Apropos";
// import { MapEmbed } from "./components/acceuil/MapEmbed";

export default function Home() {
  return (
  <>
    <Header/>
    <Section1/>
    <Section2 />
    <Ogou />
    <Section3 />
    <Section4 />
    <Apropos />
    {/* <MapEmbed /> */}
    <Footer />
    </>
  );
}
