"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
// import { PlusIcon } from "@heroicons/24/outline";

export function BurgerMenu ({ isOpen, toggleMenu }){
  return (
    <motion.ul
      initial={{ opacity: 0, x: '-100%' }} // Position initiale hors de l'écran
      animate={{
        opacity: isOpen ? 1 : 0,
        x: isOpen ? 0 : '-100%', // Déplacer l'élément de gauche à droite
      }}
      transition={{ duration: 0.5 }}
      className=" z-50 absolute top-0 left-0 w-full bg-[#3883A2] py-4 flex flex-col items-center space-y-4"
    >
        
      {/* Bouton retour */}
      {/* <button
        onClick={toggleMenu}
        className="text-white text-lg mb-4"
      >
        Retour
      </button> */}
      <div className="md:hidden cursor-pointer hover:scale-105 transition-transform" onClick={toggleMenu}>
          <Image
            src="../assets/plus.svg"
            alt="Menu Burger"
            width={35}
            height={35}
          />
        </div>
    

{/* <PlusIcon class="h-6 w-6 text-gray-500" /> */}

      
      <Link href="/" className="text-white text-lg" onClick={toggleMenu}>Acceuil</Link>
      <Link href="./produit" className="text-white text-lg" onClick={toggleMenu}>Produits</Link>
    </motion.ul>
  );
};

// export default;
