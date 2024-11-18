// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "./Button";

// export function Section2() {
//   return (
//     <div className="w-full flex flex-col gap-6">
//       <div className="w-[80%] md:w-[90%] m-auto">
//         <h1 className="text-white text-xl md:text-2xl text-bold mt-10 bg-[#3883A2] rounded-md px-2 pl-2 mb-7">
//           Les bonnes affaires
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[1.5fr_1.5fr_3.1fr] gap-4">
//           {/* Première carte */}
          // <div className="flex flex-col bg-[#3883A2]  px-[20px] pt-3 pb-4 max-sm:items-center rounded-2xl shadow-md">
          //   <div>
          //     <Image
          //       src="/assets/phone.svg"
          //       alt="Search Icon"
          //       width={150}
          //       height={150}
          //       className="w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[160px] lg:h-[160px] mt-3 hover:scale-110 transition-transform duration-300"
          //     />
          //   </div>
          //   <p className="text-white font-bold text-xl mt-3">
          //     Téléphone <br /> Samsung A55
          //   </p>
          //   <div className="flex items-center gap-4 mt-1">
          //     <p className="font-bold text-lg text-white">200000</p>
          //     <Image
          //       src="/assets/argent.svg"
          //       alt="Argent Icon"
          //       width={40}
          //       height={30}
          //       className="w-[50px] h-[30px]"
          //     />
          //   </div>
          //   <Button />
          // </div>

//           {/* Deuxième carte */}
//           <div className="flex flex-col bg-[#3883A2] px-[20px] pt-3 pb-4 max-sm:items-center rounded-2xl shadow-md">
//             <div>
//               <Image
//                 src="/assets/vélo.svg"
//                 alt="Search Icon"
//                 width={150}
//                 height={150}
//                 className="w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[160px] mt-3 lg:h-[160px] hover:scale-110 transition-transform duration-300"
//               />
//             </div>
//             <p className="text-white font-bold text-xl mt-3">
//             Vélo <br /> Vtc W-t9
//             </p>
//             <div className="flex items-center gap-4 mt-1">
//               <p className="font-bold text-lg text-white">200000</p>
//               <Image
//                 src="/assets/argent.svg"
//                 alt="Argent Icon"
//                 width={40}
//                 height={30}
//                 className="w-[50px] h-[30px]"
//               />
//             </div>
//             <Button />
//           </div>

//           {/* Troisième carte (plus grande) */}
          // <div className="flex flex-col bg-[#5BA0BC] px-[20px] pt-3 pb-4 max-sm:items-center pb-2 rounded-2xl  shadow-md lg:col-span-1">
          //   <div>
          //     <Image
          //       src="/assets/ordinateurrouge.svg"
          //       alt="Ordinateur Rouge"
          //       width={200}
          //       height={150}
          //       className="w-[180px] h-[140px] md:w-[250px] md:h-[200px] lg:w-[2800px] lg:h-[200px] hover:scale-110 transition-transform duration-300"
          //     />
          //   </div>
          //   <p className="text-white font-bold text-xl mt-3">
          //     Ordinateur <br /> Mac Book M1
          //   </p>
          //   <div className="flex items-center gap-4 mt-1">
          //     <p className="font-bold text-lg text-white">520000</p>
          //     <Image
          //       src="/assets/argent.svg"
          //       alt="Argent Icon"
          //       width={40}
          //       height={30}
          //       className="w-[50px] h-[30px]"
          //     />
          //   </div>
          //   <div className="">
          //     <Button />
          //   </div>
          // </div>
//         </div>
//       </div>
//       {/* 2 sections cartes */}
//       <div className="w-[80%] md:w-[90%] m-auto">
//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[3.1fr_1.5fr_1.5fr] gap-4">
          // {/* Troisième carte (plus grande) */}
          // <div className="flex flex-col bg-[#EAEAEA] px-[20px] pt-3 pb-4 max-sm:items-center pb-2 rounded-2xl  shadow-md lg:col-span-1">
          //   <div>
          //     <Image
          //       src="/assets/herpotte.svg"
          //       alt="Ordinateur Rouge"
          //       width={200}
          //       height={150}
          //       className="w-[180px] h-[140px] md:w-[250px] md:h-[200px] lg:w-[2800px] lg:h-[200px] hover:scale-110 transition-transform duration-300"
          //     />
          //   </div>
          //   <p className="text-black font-bold text-xl mt-3">
          //   Ecouteurs <br /> Samsung Bud
          //   </p>
          //   <div className="flex items-center gap-4 mt-1">
          //     <p className="font-bold text-lg text-black">570000</p>
          //     <Image
          //       src="/assets/argent.svg"
          //       alt="Argent Icon"
          //       width={40}
          //       height={30}
          //       className="w-[50px] h-[30px]"
          //     />
          //   </div>
          //   <div className="">
          //     <Button />
          //   </div>
          // </div>
//           {/* Première carte */}
//           <div className="flex flex-col bg-[#A1A1A1] px-[20px] pt-3 pb-4 max-sm:items-center rounded-2xl  shadow-md">
//             <div>
//               <Image
//                 src="../assets/manette.svg"
//                 alt="Search Icon"
//                 width={150}
//                 height={150}
//                 className="w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[160px] lg:h-[160px] mt-3 hover:scale-110 transition-transform duration-300"
//               />
//             </div>
//             <p className="text-white font-bold text-xl mt-3">
//             Manette <br /> Manette xbox
//             </p>
//             <div className="flex items-center gap-4 mt-1">
//               <p className="font-bold text-lg text-white">200000</p>
//               <Image
//                 src="/assets/argent.svg"
//                 alt="Argent Icon"
//                 width={40}
//                 height={30}
//                 className="w-[50px] h-[30px]"
//               />
//             </div>
//             <Button />
//           </div>

//           {/* Deuxième carte */}
//           <div className="flex flex-col bg-[#2E2E2E] px-[20px] pt-3 pb-4 max-sm:items-center rounded-2xl shadow-md">
//             <div>
//               <Image
//                 src="/assets/phone.svg"
//                 alt="Search Icon"
//                 width={150}
//                 height={150}
//                 className="w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[160px] mt-3 lg:h-[160px] hover:scale-110 transition-transform duration-300"
//               />
//             </div>
//             <p className="text-white font-bold text-xl mt-3">
//             Ordinateur <br /> HP i-core5
//             </p>
//             <div className="flex items-center gap-4 mt-1">
//               <p className="font-bold text-lg text-white">510000</p>
//               <Image
//                 src="/assets/argent.svg"
//                 alt="Argent Icon"
//                 width={40}
//                 height={30}
//                 className="w-[50px] h-[30px]"
//               />
//             </div>
//             <Button />
//           </div>

//         </div>
//       </div>
      
//     </div>
//   );
// }


"use client";

import Image from "next/image";
import { Button } from "./Button";
import { motion } from "framer-motion";

export function Section2() {
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
    <div className="w-full flex flex-col gap-6">
      <div className="w-[80%] md:w-[90%] m-auto">
        <h1 className="text-white text-xl md:text-2xl text-bold mt-10 bg-[#3883A2] rounded-md px-2 pl-2 mb-7">
          Les bonnes affaires
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[1.5fr_1.5fr_3.1fr] gap-6">
          {/* Carte 1 */}
          <motion.div
            key="card-1"
            {...cardAnimation}
            className="flex flex-col bg-[#3883A2] px-[20px] pt-3 pb-4 max-sm:items-center rounded-2xl shadow-md"
          >
            <motion.div {...imageAnimation} className="mt-3">
              <Image src="/assets/phone.svg" alt="Téléphone Samsung A55" width={150} height={150} />
            </motion.div>
            <motion.p className="text-white font-bold text-xl mt-3">Téléphone Samsung A55</motion.p>
            <motion.div className="flex items-center gap-4 mt-1">
              <p className="font-bold text-lg text-white">200000</p>
              <Image src="/assets/argent.svg" alt="Argent Icon" width={40} height={30} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <Button />
            </motion.div>
          </motion.div>

          {/* Carte 2 */}
          <motion.div
            key="card-2"
            {...cardAnimation}
            className="flex flex-col bg-[#3883A2] px-[20px] pt-3 pb-4 max-sm:items-center rounded-2xl shadow-md"
          >
            <motion.div {...imageAnimation} className="mt-3">
              <Image src="/assets/vélo.svg" alt="Vélo Vtc W-t9" width={150} height={150} />
            </motion.div>
            <motion.p className="text-white font-bold text-xl mt-3">Vélo Vtc W-t9</motion.p>
            <motion.div className="flex items-center gap-4 mt-1">
              <p className="font-bold text-lg text-white">200000</p>
              <Image src="/assets/argent.svg" alt="Argent Icon" width={40} height={30} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
              <Button />
            </motion.div>
          </motion.div>

          {/* Carte 3 */}
          {/* <motion.div
            key="card-3"
            {...cardAnimation}
            className="flex flex-col bg-[#5BA0BC] px-[20px] pt-3 pb-4 max-sm:items-center rounded-2xl shadow-md"
          >
            <motion.div {...imageAnimation} className="mt-3">
              <Image src="/assets/ordinateurrouge.svg" alt="Ordinateur Mac Book M1" width={150} height={150} />
            </motion.div>
            <motion.p className="text-white font-bold text-xl mt-3">Ordinateur Mac Book M1</motion.p>
            <motion.div className="flex items-center gap-4 mt-1">
              <p className="font-bold text-lg text-white">520000</p>
              <Image src="/assets/argent.svg" alt="Argent Icon" width={40} height={30} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
              <Button />
            </motion.div>
          </motion.div> */}
             <div className="flex flex-col bg-[#5BA0BC] px-[20px] pt-3 max-sm:items-center pb-2 rounded-2xl  shadow-md lg:col-span-1 transition transform hover:scale-105 duration-300 ">
            <div>
              <Image
                src="/assets/ordinateurrouge.svg"
                alt="Ordinateur Rouge"
                width={200}
                height={150}
                className="w-[180px] h-[140px] md:w-[250px] md:h-[200px] lg:w-[2800px] lg:h-[200px] hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p className="text-white font-bold text-xl mt-3">
              Ordinateur <br /> Mac Book M1
            </p>
            <div className="flex items-center gap-4 mt-1">
              <p className="font-bold text-lg text-white">520000</p>
              <Image
                src="/assets/argent.svg"
                alt="Argent Icon"
                width={40}
                height={30}
                className="w-[50px] h-[30px]"
              />
            </div>
            <div className="shadow-mda transition transform hover:scale-105 duration-300">
              <Button />
            </div>
          </div>

        </div>
      </div>

      <div className="w-[80%] md:w-[90%] m-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[3.1fr_1.5fr_1.5fr] gap-6">
          {/* Carte 4 */}
          {/* <motion.div
            key="card-4"
            {...cardAnimation}
            className="flex flex-col bg-[#EAEAEA] px-[20px] pt-3 pb-4 max-sm:items-center rounded-2xl shadow-md"
          >
            <motion.div {...imageAnimation} className="mt-3">
              <Image src="/assets/herpotte.svg" alt="Écouteurs Samsung Bud" width={150} height={150} className="" />
            </motion.div>
            <motion.p className="text-white font-bold text-xl mt-3">Écouteurs Samsung Bud</motion.p>
            <motion.div className="flex items-center gap-4 mt-1">
              <p className="font-bold text-lg text-white">570000</p>
              <Image src="/assets/argent.svg" alt="Argent Icon" width={40} height={30} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <Button />
            </motion.div>
          </motion.div> */}

             <div className="flex flex-col bg-[#EAEAEA] px-[20px] pt-3 max-sm:items-center pb-2 rounded-2xl  shadow-md lg:col-span-1 transition transform hover:scale-105 duration-300">
            <div>
              <Image
                src="/assets/herpotte.svg"
                alt="Ordinateur Rouge"
                width={200}
                height={150}
                className="w-[180px] h-[140px] md:w-[250px] md:h-[200px] lg:w-[2800px] lg:h-[200px] hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p className="text-black font-bold text-xl mt-3">
            Ecouteurs <br /> Samsung Bud
            </p>
            <div className="flex items-center gap-4 mt-1">
              <p className="font-bold text-lg text-black">570000</p>
              <Image
                src="/assets/argent.svg"
                alt="Argent Icon"
                width={40}
                height={30}
                className="w-[50px] h-[30px]"
              />
            </div>
            <div className="shadow-mda transition transform hover:scale-105 duration-300">
              <Button />
            </div>
          </div>

          {/* Carte 5 */}
          <motion.div
            key="card-5"
            {...cardAnimation}
            className="flex flex-col bg-[#A1A1A1] px-[20px] pt-3 pb-4 max-sm:items-center rounded-2xl shadow-md"
          >
            <motion.div {...imageAnimation} className="mt-3">
              <Image src="/assets/manette.svg" alt="Manette Xbox" width={150} height={150} />
            </motion.div>
            <motion.p className="text-white font-bold text-xl mt-3">Manette Xbox</motion.p>
            <motion.div className="flex items-center gap-4 mt-1">
              <p className="font-bold text-lg text-white">200000</p>
              <Image src="/assets/argent.svg" alt="Argent Icon" width={40} height={30} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
              <Button />
            </motion.div>
          </motion.div>

          {/* Carte 6 */}
          <motion.div
            key="card-6"
            {...cardAnimation}
            className="flex flex-col bg-[#2E2E2E] px-[20px] pt-3 pb-4 max-sm:items-center rounded-2xl shadow-md"
          >
            <motion.div {...imageAnimation} className="mt-3">
              <Image src="/assets/phone.svg" alt="Ordinateur HP i-core5" width={150} height={150} />
            </motion.div>
            <motion.p className="text-white font-bold text-xl mt-3">Ordinateur HP i-core5</motion.p>
            <motion.div className="flex items-center gap-4 mt-1">
              <p className="font-bold text-lg text-white">510000</p>
              <Image src="/assets/argent.svg" alt="Argent Icon" width={40} height={30} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
              <Button />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
