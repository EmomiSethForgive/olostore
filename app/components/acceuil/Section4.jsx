import Image from "next/image";
import { Button } from "./Button";

export function Section4() {
  return (
    <div className="w-full">
      <div className="w-[90%] m-auto ">
        <div className="md:flex bg-[#27282B] max-sm:gap-4 max-sm:px-2 max-sm:items-center rounded-3xl md:justify-center lg:justify-between py-3 mb-8">
          <div className="md:flex items-center">
          <div className="">
            <Image
              src="/assets/logo.svg"
              alt="Search Icon"
              width={42}
              height={42}
              className={`w-full h-[150px] md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px]`}
            />
          </div>
          <div className="">
            <Image
              src="/assets/giftvidéo.gif"
              alt="Search Icon"
              width={42}
              height={42}
              className={`w-full h-[300px] md:w-[300px] md:h-[230px] lg:w-[450px] lg:h-[260px]`}
            />
          </div>
          </div>
          <div className="md:mt-36 md:pr-6 lg:pr-16 mt-3 ">
            <h2 className="text-white font-semibold text-xl md:text-2xl mb-1 md:ml-4">Télévision</h2>
            <h3 className="text-white font-semibold text-xl md:text-2xl mb-1 md:ml-4">Samsung Bud</h3>
            <p className="text-[#8CC63F] font-semibold text-lg md:text-xl mb-2 md:ml-4">120000</p>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}
