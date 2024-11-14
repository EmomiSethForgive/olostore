import Image from "next/image";

export function Articlespub() {
  return (

    <div className="w-full">
    <div className="flex items-center justify-center w-[85%] m-auto py-1 md:py-2">
      <div className="bg-[#27282B] p-4 rounded-[20px] w-full h-[400px] flex justify-between items-center">
        
        <div className="flex-shrink-0 m-[5%]">
          <img src="../assets/baff.svg" alt="Téléphone Samsung A55" className="w-30 h-60" />
        </div>
        
        <div className=" flex flex-col justify-center items-end h-full m-[5%]">
          <div className="mb-4">
            <p className="text-white text-center font-extrabold">Eceinte JBL</p>
            <p className="text-white text-center font-extrabold text-lg">JBL Hot-Spot W4z</p>
            <p className=" text-[#8CC63F] font-bold text-center text-bold">220 000</p>
          </div>
          <button className="bg-white text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px] ">
            Commander
          </button>
        </div>
        
      </div>
    </div>
  </div>
  


  );
}

