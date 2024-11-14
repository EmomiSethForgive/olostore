                                                                        import Image from "next/image";

export function Cat() {
  return (
  
    <div className="w-full mt-10">
        <div className="flex items-center justify-center w-[90%] m-auto py-2">
            <div className="flex gap-4 overflow-x-auto p-2 max-w-full scrollbar-hide">
            <button className="bg-[#3883A2] hover:bg-[#0F4156] text-white font-bold py-2 px-4 rounded-lg w-[248px] h-[35px] flex items-center justify-center">
                Voir toutes les catégories
            </button>
            <button className="border border-[#3883A2] bg-white hover:bg-gray-300 text-[#3883A2] font-bold py-2 px-4 rounded-lg w-[248px] h-[35px] flex items-center justify-center">
                Informatique
            </button>
            <button className="border border-[#3883A2] bg-white hover:bg-gray-300 text-[#3883A2] font-bold py-2 px-4 rounded-lg w-[248px] h-[35px] flex items-center justify-center">
                Sport
            </button>
            <button className="border border-[#3883A2] bg-white hover:bg-gray-300 text-[#3883A2] font-bold py-2 px-4 rounded-lg w-[248px] h-[35px] flex items-center justify-center">
                Littérature
            </button>
            <button className="border border-[#3883A2] bg-white hover:bg-gray-300 text-[#3883A2] font-bold py-2 px-4 rounded-lg w-[248px] h-[35px] flex items-center justify-center">
                Auto-Moto
            </button>
            </div>
        </div>
    </div>

    
  );
}
