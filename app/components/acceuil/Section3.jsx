// 

"use client";

import Image from "next/image";
import { Button } from "./Button";
import { motion } from "framer-motion";
import Link from "next/link";

export function Section3() {
  // Définir l'animation des cartes
  const cardAnimation = {
    initial: { opacity: 0, y: 50, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1 },
    whileHover: {
      scale: 1.05,
      rotate: 1,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
    },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  const imageAnimation = {
    whileHover: { rotate: 10, scale: 1.1 },
    transition: { type: "spring", stiffness: 200 },
  };

  return (
    <div className="w-full">
      {/* 2 sections cartes */}
      <div className="w-[80%] md:w-[90%] m-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 mb-8 lg:grid-cols-[1.5fr_1.5fr_1.5fr_1.5fr] gap-4">
          {/* Carte 1 */}
          <motion.div
            key="card-1"
            {...cardAnimation}
            className="flex flex-col bg-[#56584E] pb-7 px-[20px] pt-3 max-sm:pb-3 max-sm:items-center rounded-2xl shadow-md"
          >
            <motion.div {...imageAnimation}>
              <Image
                src="../assets/monte.svg"
                alt="Montre Whatch 5 pro"
                width={150}
                height={150}
                className="w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[160px] lg:h-[160px] mt-3"
              />
            </motion.div>
            <p className="text-white font-bold text-xl mt-3">
              Montre <br /> Whatch 5 pro
            </p>
            <div className="flex items-center gap-4 mt-1">
              <p className="font-bold text-lg text-black">200000</p>
            </div>
            <Link
                  href={`/article/1`} 
                 
                ><Button />
                </Link> 
          </motion.div>

          {/* Carte 2 */}
          <motion.div
            key="card-2"
            {...cardAnimation}
            className="flex flex-col bg-[#82847D] px-[20px] pt-3 max-sm:pb-3 max-sm:items-center rounded-2xl shadow-md"
          >
            <motion.div {...imageAnimation}>
              <Image
                src="../assets/ordinateur.svg"
                alt="Ordinateur HP"
                width={150}
                height={150}
                className="w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[160px] lg:h-[160px] mt-3"
              />
            </motion.div>
            <p className="text-white font-bold text-xl mt-3">
              Ordinateur <br /> HP
            </p>
            <div className="flex items-center gap-4 mt-1">
              <p className="font-bold text-lg text-black">200000</p>
            </div>
            <Link
                  href={`/article/9`} 
                 
                ><Button />
                </Link> 
          </motion.div>

          {/* Carte 3 */}
          <motion.div
            key="card-3"
            {...cardAnimation}
            className="flex flex-col bg-[#B4B5B0] px-[20px] pt-3 max-sm:pb-3 max-sm:items-center rounded-2xl shadow-md"
          >
            <motion.div {...imageAnimation}>
              <Image
                src="../assets/manette.svg"
                alt="Téléphone Samsung A55"
                width={150}
                height={150}
                className="w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[160px] lg:h-[160px] mt-3"
              />
            </motion.div>
            <p className="text-white font-bold text-xl mt-3">
              Téléphone <br /> Samsung A55
            </p>
            <div className="flex items-center gap-4 mt-1">
              <p className="font-bold text-lg text-black">200000</p>
            </div>
            <Link
                  href={`/article/7`} 
                 
                ><Button />
                </Link> 
          </motion.div>

          {/* Carte 4 */}
          <motion.div
            key="card-4"
            {...cardAnimation}
            className="flex flex-col bg-[#F5F5F4] px-[20px] pt-3 max-sm:pb-3 max-sm:items-center rounded-2xl shadow-md"
          >
            <motion.div {...imageAnimation}>
              <Image
                src="/assets/phonejaune.svg"
                alt="Samsung A55"
                width={150}
                height={150}
                className="w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[160px] lg:h-[160px] mt-3"
              />
            </motion.div>
            <p className="text-black font-bold text-xl mt-3">
              Samsung <br /> A55
            </p>
            <div className="flex items-center gap-4 mt-1">
              <p className="font-bold text-lg text-black">510000</p>
            </div>
            <Link
                  href={`/article/5`} 
                 
                ><Button />
                </Link> 
          </motion.div>
        </div>
      </div>

      {/* Deuxième section de cartes */}
      <div className="w-[95%] md:w-[90%] mb-8 m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[4.1fr_4.1fr] gap-6">
          {/* Carte 5 */}
          <motion.div
            key="card-5"
            {...cardAnimation}
            className="flex flex-col bg-[#5E8EA1] px-[20px] pt-3 max-sm:pb-3 max-sm:items-center rounded-2xl shadow-md"
          >
            <motion.div {...imageAnimation}>
              <Image
                src="../assets/ordinoir.svg"
                alt="Ordinateur HP"
                width={150}
                height={150}
                className="w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[278px] lg:h-[200px] mt-3"
              />
            </motion.div>
            <p className="text-white font-bold text-xl mt-3">
              Ordinateur <br /> HP
            </p>
            <div className="flex items-center gap-4 mt-1">
              <p className="font-bold text-lg text-white">200000</p>
            </div>
            <Link
                  href={`/article/3`} 
                 
                ><Button />
                </Link> 
          </motion.div>

          {/* Carte 6 */}
          <motion.div
            key="card-6"
            {...cardAnimation}
            className="flex flex-col bg-[#076389] px-[20px] pt-3 pb-3 max-sm:pb-3 max-sm:items-center rounded-2xl shadow-md"
          >
            <motion.div {...imageAnimation}>
              <Image
                src="/assets/écran.svg"
                alt="Ecran Plasma Samsung 32 pouces"
                width={150}
                height={150}
                className="w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[270px] lg:h-[200px] mt-3"
              />
            </motion.div>
            <p className="text-white font-bold text-xl mt-3">
              Ecran plasma <br /> Samsung 32 pouces
            </p>
            <div className="flex items-center gap-4 mt-1">
              <p className="font-bold text-lg text-white">510000</p>
            </div>
            <Button />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
