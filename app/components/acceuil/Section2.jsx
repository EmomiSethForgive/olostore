import Link from "next/link";

export function Section2() {
  return (
    <div className="w-full mt-10 text-2xl font-black gap-3 ">
      <div className="w-full pl-48 w-[90%] flex items-around ">
        <button class="text-sm bg-[#3883A2]  hover:bg-gray-300 text-white font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px]">
          Les bonnes affaires
        </button>
      </div>
      <div class=" flex mt-10 flex-wrap items-center justify-between w-[80%] m-auto py-1 md:py-2 gap-3 custom2:justify-around ">
        <div class="min-300:max-600:w-full bg-[#3883A2] p-3 rounded-[20px] text-center w-[400px] h-[450px] hover:scale-105 transition-transform duration-300 shadow-lg  max-2xl:w-[250px] max-xl:w-[45%] max-md:w-full  z-10">
          <div class="flex items-center justify-center">
            <img
              src="../assets/1372-samsung-galaxy-a55-5g-8-256gb-azul-libre-review-removebg-preview 2.svg"
              alt="Téléphone Samsung A55"
              class="w-30 h-60 "
            />
          </div>
          <div>
            <p class="text-black font-bold">Telephone</p>
            <p class="text-white font-bold text-lg">Samsung A55</p>
            <p class="text-white text-xl mb-2  flex justify-around">
              220 000{" "}
              <p class="text-red-500 text-xl mb-2 line-through ">230 000 </p>{" "}
            </p>
            <button class=" text-sm bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px]">
              Commander
            </button>
          </div>
        </div>

        <div class="min-300:max-600:w-full bg-[#3883A2] p-3 rounded-[20px] text-center  w-[400px] h-[450px] hover:scale-105 transition-transform duration-300 shadow-lg max-2xl:w-[250px]  max-xl:w-[45%]  max-md:w-full  custom3:w-[250px] custom5:w-full">
          <div class="flex items-center justify-center">
            <img
              src="../assets/vélo.svg"
              alt="Téléphone Samsung A55"
              class="w-30 h-60 "
            />
          </div>
          <div>
            <p class="text-black font-bold ">Vélo</p>
            <p class="text-white font-bold text-lg">Vtc Z35</p>
            <p class="text-white text-xl mb-2  flex justify-around">
              70 000{" "}
              <p class="text-red-500 text-xl mb-2 line-through ">75 000 </p>{" "}
            </p>
            <button class="bg-white text-sm hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px]">
              Commander
            </button>
          </div>
        </div>

        <div class="min-300:max-600:w-full bg-[#8EC0D4] p-3 rounded-[20px] text-center  w-[700px] h-[450px] hover:scale-105 transition-transform duration-300 shadow-lg min-300:max-600:w-[300px] max-2xl:w-[500px]  max-xl:w-full max-md:w-full  custom5:w-full ">
          <div class="flex justify-end mr-8 small:justify-center">
            <img
              src="../assets/ordinateurrouge.svg"
              alt="Téléphone Samsung A55"
              class="w-30 h-60 ml-42"
            />
          </div>
          <div class="flex justify-start flex-col ml-8 small:ml-0">
            <p class="max-2xl:w-full text-black w-[33%]  font-bold min-300:max-600:w-full">
              Ordinateur
            </p>
            <p class="max-2xl:w-full text-white font-bold w-[33%]  text-lg min-300:max-600:w-[100%]">
              Mac book M1
            </p>
            <p class="max-2xl:w-full custom3:w-full text-white text-xl mb-2 w-[33%] flex justify-around min-300:max-600:w-[100%] custom5:w-[50%]">
              500 0000{" "}
              <p class="text-red-500 text-xl mb-2 line-through ">520 000 </p>{" "}
            </p>
            <button class="max-2xl:w-full bg-white text-sm hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px] small:ml-5">
              Commander
            </button>
          </div>
        </div>

        {/* <div class="bg-[#3883A2] p-4 rounded-[20px] text-center w-[300px] h-[400px] hover:scale-105 transition-transform duration-300 shadow-lg">
        <div>
            <img src="../assets/pc1.svg" alt="Téléphone Samsung A55" class="w-30 h-60 " />
          </div>
          <div>
          <p class="text-black font-bold">Pc</p>
            <p class="text-white font-bold text-lg">Mac Book M1</p>
            <p class="text-white text-xl mb-2">350 000</p>
            <Link href="../../article"  className="bg-white text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px] ">
          
            Commander
          
          </Link>
          </div>
        </div> */}
      </div>

      <div className="w-full gap-3">
        <div class="gap-3 flex flex-wrap items-center justify-between w-[80%] m-auto py-1 md:py-2 ">
          <div class="min-300:max-600:w-full bg-[#B4B5B0] p-3 rounded-[20px] text-center w-[700px] h-[450px] hover:scale-105 transition-transform duration-300 shadow-lg  min-300:max-600:w-[300px] max-2xl:w-[500px] max-xl:w-full max-md:w-full   ">
            <div class="flex justify-end mr-8">
              <img
                src="../assets/herpotte.svg"
                alt="Téléphone Samsung A55"
                class="w-30 h-60 "
              />
            </div>
            <div class="flex justify-end mr-8 flex-col">
              <p class="text-black  w-[30%] font-bold min-300:max-600:w-[100%]">
                Ecouteurs
              </p>
              <p class="text-white  w-[30%] font-bold text-lg min-300:max-600:w-[100%]">
                Samsung Bud
              </p>
              <p class="max-2xl:w-[80%] custom3:w-full text-white text-xl mb-2  w-[30%] flex justify-around min-300:max-600:w-[100%] custom5:w-[50%]">
                430 000{" "}
                <p class="text-red-500 text-xl mb-2 line-through ">450 000 </p>{" "}
              </p>
              <button class=" text-sm bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px] small:ml-5">
                Commander
              </button>
            </div>
          </div>

          <div class="min-300:max-600:w-full bg-[#B4B5B0] p-3 rounded-[20px] text-center  w-[400px] h-[450px] hover:scale-105 transition-transform duration-300 shadow-lg max-2xl:w-[250px] max-xl:w-[45%] max-md:w-full  custom3:w-[250px] custom5:w-full">
            <div class="flex items-center justify-center"> 
              <img
                src="../assets/manette.svg"
                alt="Téléphone Samsung A55"
                class="w-30 h-60 "
              />
            </div>
            <div>
              <p class="text-black font-bold">Manette</p>
              <p class="text-white font-bold text-lg">Manette xbox</p>
              <p class="text-white text-xl mb-2  flex justify-around">
                50 000{" "}
                <p class="text-red-500 text-xl mb-2 line-through ">60 000 </p>{" "}
              </p>
              <button class="text-sm bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px]">
                Commander
              </button>
            </div>
          </div>

          <div class="min-300:max-600:w-full bg-[#B4B5B0] p-3 rounded-[20px] text-center w-[400px] h-[450px] hover:scale-105 transition-transform duration-300 shadow-lg max-2xl:w-[250px] max-xl:w-[45%] max-md:w-full  custom3:w-[250px] custom5:w-full">
            <div class="flex items-center justify-center">
              <img
                src="../assets/pc1.svg"
                alt="Téléphone Samsung A55"
                class="w-30 h-60 "
              />
            </div>
            <div>
              <p class="text-black font-bold">Ecran</p>
              <p class="text-white font-bold text-lg">Samsung A55</p>
              <p class=" text-white text-xl mb-2  flex justify-around">
                210 000{" "}
                <p class="text-red-500 text-xl mb-2 line-through ">240 000 </p>{" "}
              </p>
              <button class="text-sm bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px]">
                Commander
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
