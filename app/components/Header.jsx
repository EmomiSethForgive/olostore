// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "motion/react";
// import { useEffect } from "react";

// export function Header() {
//   useEffect(() => {
//     const controls = animate([
//       [scope.current, { x: "100%" }],
//       ["li", { opacity: 1 }]
//     ])

//     controls.speed = 0.8

//     return () => controls.stop()
//   }, [])
//   return (
//     <div className="w-full sticky top-0 z-50">
//       <header className=" w-[90%] m-auto py-1 md:py-2 bg-[#3883A2] rounded-lg mt-4 md:pr-6 pr-3 justify-between flex items-center">
//         <div>
//           <Image
//             className="w-20 md:w-30"
//             src="../assets/logo.svg"
//             alt="logo"
//             width={100}
//             height={100}
//             //   priority
//           />
//         </div>
//         <div className="relative flex items-center">
//         <input
//             type="text"
//             placeholder="Rechercher vos produits"
//             className="md:pl-4 pl-1 md:pr-32 md:py-2 py-1 pr-1 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           {/* <Image
//             src="../assets/recherche.svg"
//             alt="Search Icon"
//             width={22}
//             height={22}
//             className="absolute md:left-[302px] left-[180px] md:w-8 h-5 w-5 md:h-8 text-gray-400"
//           /> */}
//         </div>
//         <div className="md:hidden lg:hidden">
//           <Image
//             className="md:hidden"
//             src="../assets/burger.svg"
//             alt="log"
//             width={22}
//             height={22}
//           />
//         </div>
//         <ul ref={scope}>
//         <Link href="/" className="text-white text-sm max-sm:hidden md:text-lg">Acceuil</Link>
//           <Link href="./produit" className="text-white text-sm max-sm:hidden md:text-lg">
//             Produits
//           </Link>
//     </ul>
//         <ul className="flex gap-10 max-sm:hidden">
//           <Link href="/" className="text-white text-sm max-sm:hidden md:text-lg">Acceuil</Link>
//           <Link href="./produit" className="text-white text-sm max-sm:hidden md:text-lg">
//             Produits
//           </Link>
//         </ul>
//       </header>
//     </div>
//   );
// }

"use client";
// import React, { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { motion } from 'framer-motion'; // Importation correcte de framer-motion

// export function Header() {
//   // État pour gérer l'ouverture/fermeture du menu burger
//   const [isOpen, setIsOpen] = useState(false);

//   // Fonction pour ouvrir/fermer le menu
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="w-full sticky top-0 z-50">
//       <header className="w-[90%] m-auto py-1 md:py-2 bg-[#3883A2] rounded-lg mt-4 md:pr-6 pr-3 justify-between flex items-center">
//         {/* Logo */}
//         <div>
//           <Image
//             className="w-20 md:w-30"
//             src="../assets/logo.svg"
//             alt="logo"
//             width={100}
//             height={100}
//           />
//         </div>
        
//         {/* Champ de recherche */}
//         <div className="relative flex items-center">
//           <input
//             type="text"
//             placeholder="Rechercher vos produits"
//             className="md:pl-4 pl-1 md:pr-32 md:py-2 py-1 pr-1 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
        
//         {/* Menu burger */}
//         <div className="md:hidden" onClick={toggleMenu}>
//           <Image
//             src="../assets/burger.svg"
//             alt="Menu Burger"
//             width={22}
//             height={22}
//           />
//         </div>

//         {/* Menu classique (desktop) */}
//         <ul className="flex gap-10 max-sm:hidden">
//           <Link href="/" className="text-white text-sm md:text-lg">Acceuil</Link>
//           <Link href="./produit" className="text-white text-sm md:text-lg">Produits</Link>
//         </ul>

//         {/* Menu mobile (burger) */}





import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BurgerMenu from './BurgerMenu'; // Importation du composant BurgerMenu

export function Header() {
  // État pour gérer l'ouverture/fermeture du menu burger
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour ouvrir/fermer le menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full sticky top-0 z-50">
      <header className="w-[90%] m-auto py-1 md:py-2 bg-[#3883A2] rounded-lg mt-4 md:pr-6 pr-3 justify-between flex items-center">
        {/* Logo */}
        <div>
          <Image
            className="w-20 md:w-30"
            src="../assets/logo.svg"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
        
        {/* Champ de recherche */}
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Rechercher vos produits"
            className="md:pl-4 pl-1 md:pr-32 md:py-2 py-1 pr-1 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        {/* Menu burger */}
        <div className="md:hidden cursor-pointer hover:scale-105 transition-transform" onClick={toggleMenu}>
          <Image
            src="../assets/burger.svg"
            alt="Menu Burger"
            width={22}
            height={22}
          />
        </div>

        {/* Menu classique (desktop) */}
        <ul className="flex gap-10 max-sm:hidden">
          <Link href="/" className="text-white text-sm md:text-lg">Acceuil</Link>
          <Link href="./produit" className="text-white text-sm md:text-lg">Produits</Link>
        </ul>

        {/* Affichage du menu burger lorsque isOpen est vrai */}
        <BurgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      </header>
    </div>
  );
}
