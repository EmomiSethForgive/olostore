import Image from "next/image";
export function Ogou(){
    return (<div className="w-full flex justify-center mt-10 mb-10">
        <div className="w-[80%]">
            <Image
            className=" w-full h-full "
            src="../assets/ogou.svg"
            alt="log"
            width={100}
            height={100}
          />
        </div>
        </div>
    )
}