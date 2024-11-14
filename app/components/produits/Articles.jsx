import Image from "next/image";
import Link from "next/link";

export function Articles() {
  return (
    <div className="w-full ">
      <div class="flex flex-wrap items-center justify-center w-[90%] m-auto py-1 md:py-2 gap-8">

        <div class="bg-[#3883A2] p-4 rounded-[20px] text-center w-[300px] h-[400px] hover:scale-100 transition-transform duration-300 shadow-lg shadow-slate-400">
          <div>
            <img src="../assets/monte.svg" alt="Téléphone Samsung A55" class="w-30 h-60 " />
          </div>
          <div>
          <p class="text-black font-bold">Momtre</p>
            <p class="text-white font-bold text-lg">Whatch se5</p>
            <p class="text-white text-xl mb-2">85 000</p>
            <button class="bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px]">Commander</button>
          </div>
        </div>

        <div class="bg-[#3883A2] p-4 rounded-[20px] text-center w-[300px] h-[400px] hover:scale-105 transition-transform duration-300 shadow-lg">
          <div>
            <img src="../assets/vélo.svg" alt="Téléphone Samsung A55" class="w-30 h-60 " />
          </div>
          <div>
          <p class="text-black font-bold ">Vélo</p>
            <p class="text-white font-bold text-lg">Vtc Z35</p>
            <p class="text-white text-xl mb-2">70 000</p>
            <button class="bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px]">Commander</button>
          </div>
        </div>

        <div class="bg-[#3883A2] p-4 rounded-[20px] text-center w-[300px] h-[400px] hover:scale-105 transition-transform duration-300 shadow-lg">
          <div>
            <img src="../assets/écran.svg" alt="Téléphone Samsung A55" class="w-30 h-60 " />
          </div>
          <div>
          <p class="text-black font-bold">Tv</p>
            <p class="text-white font-bold text-lg">Tv Lg 55</p>
            <p class="text-white text-xl mb-2">350 000</p>
            <button class="bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px]">Commander</button>
          </div>
        </div>

        <div class="bg-[#3883A2] p-4 rounded-[20px] text-center w-[300px] h-[400px] hover:scale-105 transition-transform duration-300 shadow-lg">
        <div>
            <img src="../assets/pc1.svg" alt="Téléphone Samsung A55" class="w-30 h-60 " />
          </div>
          <div>
          <p class="text-black font-bold">Pc</p>
            <p class="text-white font-bold text-lg">Mac Book M1</p>
            <p class="text-white text-xl mb-2">350 000</p>
            <Link href="../../article"  className="bg-white text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px] ">
          {/* <button>  */}
            Commander
          {/* </button> */}
          </Link>
          </div>
        </div>

        <div class="bg-[#B4B5B0] p-4 rounded-[20px] text-center w-[300px] h-[400px] hover:scale-105 transition-transform duration-300 shadow-lg">
        <div>
            <img src="../assets/baff.svg" alt="Téléphone Samsung A55" class="w-30 h-60 " />
          </div>
          <div>
          <p class="text-black font-bold">Enceinte</p>
            <p class="text-white font-bold text-lg">JBL 360</p>
            <p class="text-white text-xl mb-2">40 000</p>
            <button class="bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px]">Commander</button>
          </div>
        </div>

        <div class="bg-[#B4B5B0] p-4 rounded-[20px] text-center w-[300px] h-[400px] hover:scale-105 transition-transform duration-300 shadow-lg">
          <div>
          <img src="../assets/phone.svg" alt="Téléphone Samsung A55" class="w-30 h-60 " />
          </div>
          <div>
          <p class="text-black font-bold">Telephone</p>
            <p class="text-white font-bold text-lg">Samsung A55</p>
            <p class="text-white text-xl mb-2">220 000</p>
            <button class="bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px]">Commander</button>
          </div>
        </div>

        <div class="bg-[#B4B5B0] p-4 rounded-[20px] text-center w-[300px] h-[400px] hover:scale-105 transition-transform duration-300 shadow-lg">
          <div>
            <img src="../assets/phonejaune.svg" alt="Téléphone Samsung A55" class="w-30 h-60 " />
          </div>
          <div>
          <p class="text-black font-bold">Telephone</p>
            <p class="text-white font-bold text-lg">Pochette A55</p>
            <p class="text-white text-xl mb-2">2 000</p>
            <button class="bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px]">Commander</button>
          </div>
        </div>

        <div class="bg-[#B4B5B0] p-4 rounded-[20px] text-center w-[300px] h-[400px] hover:scale-105 transition-transform duration-300 shadow-lg">
          <div>
            <img src="../assets/ordinateurrouge.svg" alt="Téléphone Samsung A55" class="w-30 h-60 " />
          </div>
          <div>
          <p class="text-black font-bold">Pc</p>
            <p class="text-white font-bold text-lg">Mac Book M2</p>
            <p class="text-white text-xl mb-2">220 000</p>
            <button class="bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px]">Commander</button>
          </div>
        </div>
        
        <div class="bg-[#3883A2] p-4 rounded-[20px] text-center w-[300px] h-[400px] hover:scale-105 transition-transform duration-300 shadow-lg">
          <div>
            <img src="../assets/manette.svg" alt="Téléphone Samsung A55" class="w-30 h-60 " />
          </div>
          <div>
          <p class="text-black font-bold">Pc</p>
            <p class="text-white font-bold text-lg">Xbox SerieS</p>
            <p class="text-white text-xl mb-2">23 500</p>
            <button class="bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px]">Commander</button>
          </div>
        </div>
        
        <div class="bg-[#3883A2] p-4 rounded-[20px] text-center w-[300px] h-[400px] hover:scale-105 transition-transform duration-300 shadow-lg">
        <div>
            <img src="../assets/écran.svg" alt="Téléphone Samsung A55" class="w-30 h-60 " />
          </div>
          <div>
          <p class="text-black font-bold">Tv</p>
            <p class="text-white font-bold text-lg">Tv Lg 55</p>
            <p class="text-white text-xl mb-2">350 000</p>
            <button class="bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px]">Commander</button>
          </div>
        </div>

        <div class="bg-[#3883A2] p-4 rounded-[20px] text-center w-[300px] h-[400px] hover:scale-105 transition-transform duration-300 shadow-lg">
          <div>
            <img src="../assets/ordinoir.svg" alt="Téléphone Samsung A55" class="w-30 h-60 " />
          </div>
          <div>
          <p class="text-black font-bold">Pc</p>
            <p class="text-white font-bold text-lg">Asus Rog 4</p>
            <p class="text-white text-xl mb-2">485 000</p>
            <button class="bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px]">Commander</button>
          </div>
        </div>
        
        <div class="bg-[#3883A2] p-4 rounded-[20px] text-center w-[300px] h-[400px] hover:scale-105 transition-transform duration-300 shadow-lg">
          <div>
            <img src="../assets/monte.svg" alt="Téléphone Samsung A55" class="w-30 h-60 " />
          </div>
          <div>
          <p class="text-black font-bold">Momtre</p>
            <p class="text-white font-bold text-lg">Whatch se5</p>
            <p class="text-white text-xl mb-2">85 000</p>
            <button class="bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px]">Commander</button>
          </div>
        </div>
        
        <div class="bg-[#B4B5B0] p-4 rounded-[20px] text-center w-[300px] h-[400px] hover:scale-105 transition-transform duration-300 shadow-lg">
        <div>
            <img src="../assets/vélo.svg" alt="Téléphone Samsung A55" class="w-30 h-60 " />
          </div>
          <div>
          <p class="text-black font-bold">Vélo</p>
            <p class="text-white font-bold text-lg">Vtc Z35</p>
            <p class="text-white text-xl mb-2">70 000</p>
            <button class="bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px]">Commander</button>
          </div>
        </div>

        <div class="bg-[#B4B5B0] p-4 rounded-[20px] text-center w-[300px] h-[400px] hover:scale-105 transition-transform duration-300 shadow-lg">
          <div>
            <img src="../assets/phone.svg" alt="Téléphone Samsung A55" class="w-30 h-60 " />
            </div>
            <div>
            <p class="text-black font-bold">Telephone</p>
              <p class="text-white font-bold text-lg">Samsung A55</p>
              <p class="text-white text-xl mb-2">220 000</p>
              <button class="bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px]">Commander</button>
            </div>
        </div>

        <div class="bg-[#B4B5B0] p-4 rounded-[20px] text-center w-[300px] h-[400px] hover:scale-105 transition-transform duration-300 shadow-lg">
          <div>
            <img src="../assets/pc1.svg" alt="Téléphone Samsung A55" class="w-30 h-60 " />
          </div>
          <div>
          <p class="text-black font-bold">Telephone</p>
            <p class="text-white font-bold text-lg">Samsung A55</p>
            <p class="text-white text-xl mb-2">220 000</p>
            <Link href="../../article"  className="bg-white text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px] ">
          {/* <button>  */}
            Commander
          {/* </button> */}
          </Link>
          </div>
        </div>

        <div class="bg-[#B4B5B0] p-4 rounded-[20px] text-center w-[300px] h-[400px] hover:scale-105 transition-transform duration-300 shadow-lg">
          <div>
              <img src="../assets/phonejaune.svg" alt="Téléphone Samsung A55" class="w-30 h-60 " />
            </div>
            <div>
            <p class="text-black font-bold">Telephone</p>
              <p class="text-white font-bold text-lg">Pochette A55</p>
              <p class="text-white text-xl mb-2">2 000</p>
              <button class="bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px]">Commander</button>
            </div>
        </div>
        
      </div>

      </div>
      

  );
}

