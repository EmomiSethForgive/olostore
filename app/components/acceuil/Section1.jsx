// import styles from "../../style/section1.module.css";
// import Image from "next/image";
// export function Section1() {
//   return (
//     <div className={`w-full flex flex-col gap-5 ${styles.section}`}>
//       {/* hero_section */}
//       <div className="w-[90%] m-auto bg-[#3883A2] flex flex-col gap-4 md:mt-8 mt-4 pb-5 md:pb-8 pt-3 md:pt-8 rounded-3xl ">
//         <div className="flex justify-around md:justify-center md:gap-12 pl-3 pt-3 items-center ">
//           <div className="flex flex-col gap-2 md:gap-6">
//             <h1 className="text-white font-bold text-2xl md:text-5xl lg:text-7xl">
//               O'LO STORE
//             </h1>
//             <div>
//               <p className="text-white text-xl md:text-3xl lg:text-5xl font-bold">
//                 Vos articles <br />à porter <br /> de main
//               </p>
//             </div>
//             <button className="bg-white px-3 md:w-60 md:py-1 md:text-xl rounded-md hover:bg-gray-300 ">
//               Commander
//             </button>
//           </div>
//           {/* Images pour le scrolls */}
//           <div className="flex">
//             <div className="">
//               <Image
//                 src="/assets/phone.svg"
//                 alt="Search Icon"
//                 width={42}
//                 height={42}
//                 className={`w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] md:pt-10 pt-2 hover:scale-110 transition-transform duration-300 ${styles.Image}`}
//               />
//             </div>
//            <div>
//           <Image
//               src="/assets/ordinateurrouge.svg"
//               alt="Search Icon"
//               width={42}
//               height={42}
//               className={`w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] md:pt-10 pt-2 hover:scale-110 transition-transform duration-300 ${styles.Image}`}
//             />
//             </div>
//            <div>
//           <Image
//               src="/assets/ordinateur.svg"
//               alt="Search Icon"
//               width={42}
//               height={42}
//               className={`w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] md:pt-10 pt-2 hover:scale-110 transition-transform duration-300 ${styles.Image}`}
//             />
//             </div>
//             <div>
//           <Image
//               src="/assets/manette.svg"
//               alt="Search Icon"
//               width={42}
//               height={42}
//               className={`w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] md:pt-10 pt-2 hover:scale-110 transition-transform duration-300 ${styles.Image}`}
//             />
//             </div>
//             <div>
//           <Image
//               src="/assets/monte.svg"
//               alt="Search Icon"
//               width={42}
//               height={42}
//               className={`w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] md:pt-10 pt-2 hover:scale-110 transition-transform duration-300 ${styles.Image}`}
//             />
//             </div>
//          <div>
//           <Image
//               src="/assets/livraison.png"
//               alt="Search Icon"
//               width={42}
//               height={42}
//               className={`w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] md:pt-10 pt-2 hover:scale-110 transition-transform duration-300 ${styles.Image}`}
//             />
//             </div>
//           </div>
//         </div>
//         {/* whatsapp */}
//         <div className="flex justify-between sticky top-1 w-full pr-3 md:pr-4">
//           <div></div>
//           <div>
//             <Image
//               src="/assets/wha.svg"
//               alt="Search Icon"
//               width={42}
//               height={42}
//               className={` sticky top-0 ${styles.Image}`}
//             />
//           </div>
//         </div>
//       </div>
//       {/* Promeses */}
//       <div className="flex items-center w-[90%] md:justify-between m-auto overflow-x-auto whitespace-nowrap gap-10 ">
//         <div className="flex items-center gap-2 md:gap-4 lg:gap-5">
//           <Image
//             src="/assets/livraison.png"
//             alt="Search Icon"
//             width={42}
//             height={42}
//             className={`w-[30px] h-[30px] md:w[42px] md:h-[42px] ${styles.Image}`}
//           />
//           <div>
//             <h1 className="md:text-base text-sm font-semibold">Livraison gratuite</h1>
//             <p className="md:text-base text-sm font-semibold">15 000 XAF</p>
//           </div>
//         </div>
//         <div className="flex items-center gap-2 md:gap-4 lg:gap-5">
//           <Image
//             src="/assets/remboursement.png"
//             alt="Search Icon"
//             width={42}
//             height={42}
//             className={`w-[30px] h-[30px] md:w[42px] md:h-[42px] ${styles.Image}`}
//           />
//           <div>
//             <h1 className="md:text-base text-sm font-semibold">100% rembourser</h1>
//             <p className="md:text-base text-sm font-semibold">10 jours</p>
//           </div>
//         </div>
//         <div className="flex items-center gap-2 md:gap-4 lg:gap-5">
//           <Image
//             src="/assets/time.png"
//             alt="Search Icon"
//             width={42}
//             height={42}
//             className={`w-[30px] h-[30px] md:w[42px] md:h-[42px] ${styles.Image}`}
//           />
//           <div>
//             <h1 className="md:text-base text-sm font-semibold">Support 24/7</h1>
//           </div>
//         </div>
//         <div className="flex items-center gap-2 md:gap-4 lg:gap-5">
//           <Image
//             src="/assets/container.png"
//             alt="Search Icon"
//             width={42}
//             height={42}
//             className={`w-[30px] h-[30px] md:w[42px] md:h-[42px] ${styles.Image}`}
//           />
//           <div>
//             <h1 className="md:text-base text-sm font-semibold">Paiement 100% Sécurisé</h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../style/section1.module.css";
import Link from "next/link";

export function Section1() {
  const images = [
    "/assets/phone.svg",
    "/assets/ordinateurrouge.svg",
    "/assets/ordinateur.svg",
    "/assets/manette.svg",
    "/assets/monte.svg",
    "/assets/ordinoir.svg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFirstText, setShowFirstText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Défilement automatique des images toutes les 3 secondes
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Animation des textes
    const textTimers = [
      setTimeout(() => setShowFirstText(true), 900), // Apparition du 1er texte après 500ms
      setTimeout(() => setShowSecondText(true), 1400), // Apparition du 2e texte après 1500ms
      setTimeout(() => setShowButton(true), 2300),
    ];

    return () => {
      clearInterval(interval);
      textTimers.forEach(clearTimeout); // Nettoyage des timeouts
    };
  }, [images.length]);

  return (
    <div className={`w-full flex flex-col gap-5 ${styles.section}`}>
      {/* hero_section */}
      <div className="w-[90%] m-auto bg-[#3883A2] flex flex-col gap-4 md:mt-8 pb-5 md:pb-8 pt-3 md:pt-8 rounded-b-3xl mt-1 md:rounded-3xl">
        <div className="flex justify-around md:justify-center md:gap-12 pl-3 pt-3 items-center">
          {/* Texte */}
          <div className="flex flex-col gap-2 md:gap-6">
            <h1
              className={`text-white font-bold text-2xl md:text-5xl lg:text-7xl transition-opacity duration-1000 ${
                showFirstText ? "opacity-100" : "opacity-0"
              }`}
            >
              O&apos;LO STORE
            </h1>
            <div>
              <p
                className={`text-white text-xl md:text-3xl lg:text-5xl font-bold transition-opacity duration-1000 ${
                  showSecondText ? "opacity-100" : "opacity-0"
                }`}
              >
                Vos articles <br /> à porter <br /> de main
              </p>
            </div>
            <Link
              href={`/produit`} // Lien dynamique vers chaque produit avec son ID
             
            >
              <button
                className={`bg-white px-3 md:w-60 md:py-1 md:text-xl rounded-md hover:bg-gray-300 transition-opacity duration-1000 ${
                  showButton ? "opacity-100" : "opacity-0"
                }`}
              >
                Commander
              </button>
            </Link>
          </div>
          {/* Carrousel des images */}
          <div className="relative w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] overflow-hidden">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Image ${index}`}
                width={350}
                height={350}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
        {/* whatsapp */}
        <div className="flex justify-between sticky top-1 w-full pr-3 md:pr-4">
          <div></div>
          <div>
            <Image
              src="/assets/wha.svg"
              alt="Search Icon"
              width={42}
              height={42}
              className={` sticky top-0 ${styles.Image}`}
            />
          </div>
        </div>
      </div>
      {/* Promeses */}
      <div className="flex items-center w-[90%] md:justify-between m-auto overflow-x-auto whitespace-nowrap gap-10 ">
        <div className="flex items-center gap-2 md:gap-4 lg:gap-5">
          <Image
            src="/assets/livraison.png"
            alt="Search Icon"
            width={42}
            height={42}
            className={`w-[30px] h-[30px] md:w[42px] md:h-[42px] ${styles.Image}`}
          />
          <div>
            <h1 className="md:text-base text-sm font-semibold">
              Livraison gratuite
            </h1>
            <p className="md:text-base text-sm font-semibold">15 000 XAF</p>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-4 lg:gap-5">
          <Image
            src="/assets/remboursement.png"
            alt="Search Icon"
            width={42}
            height={42}
            className={`w-[30px] h-[30px] md:w[42px] md:h-[42px] ${styles.Image}`}
          />
          <div>
            <h1 className="md:text-base text-sm font-semibold">
              100% rembourser
            </h1>
            <p className="md:text-base text-sm font-semibold">10 jours</p>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-4 lg:gap-5">
          <Image
            src="/assets/time.png"
            alt="Search Icon"
            width={42}
            height={42}
            className={`w-[30px] h-[30px] md:w[42px] md:h-[42px] ${styles.Image}`}
          />
          <div>
            <h1 className="md:text-base text-sm font-semibold">Support 24/7</h1>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-4 lg:gap-5">
          <Image
            src="/assets/Container.png"
            alt="Search Icon"
            width={42}
            height={42}
            className={`w-[30px] h-[30px] md:w[42px] md:h-[42px] ${styles.Image}`}
          />
          <div>
            <h1 className="md:text-base text-sm font-semibold">
              Paiement 100% Sécurisé
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";

// export function Section1() {
//   const images = [
//     "/assets/phone.svg",
//     "/assets/livraison.png",
//     "/assets/another-image.png", // Ajoute d'autres images ici
//   ];
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change l'image toutes les 3 secondes
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="w-[90%] m-auto bg-[#3883A2] flex flex-col gap-4 md:mt-8 mt-4 pb-5 md:pb-8 pt-3 md:pt-8 rounded-3xl">
//       <div className="flex justify-around md:justify-center md:gap-12 pl-3 pt-3 items-center">
//         <div className="flex flex-col gap-2 md:gap-6">
//           <h1 className="text-white font-bold text-2xl md:text-5xl lg:text-7xl">
//             O&apos;LO STORE
//           </h1>
//           <div>
//             <p className="text-white text-xl md:text-3xl lg:text-5xl font-bold">
//               Vos articles <br />à porter <br /> de main
//             </p>
//           </div>
//           <button className="bg-white px-3 md:w-60 md:py-1 md:text-xl rounded-md hover:bg-gray-300">
//             Commander
//           </button>
//         </div>
//         {/* Carrousel d'images */}
//         <div className="relative w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] overflow-hidden">
//           <Image
//             src={images[currentImageIndex]}
//             alt={`Image ${currentImageIndex + 1}`}
//             width={350}
//             height={350}
//             className="w-full h-full object-contain transition-opacity duration-500"
//           />
//         </div>
//       </div>
//       {/* WhatsApp */}
//       <div className="flex justify-between sticky top-1 w-full pr-3 md:pr-4">
//         <div></div>
//         <div>
//           <Image
//             src="/assets/wha.svg"
//             alt="WhatsApp Icon"
//             width={42}
//             height={42}
//             className="sticky top-0"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
