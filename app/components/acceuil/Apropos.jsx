import Image from "next/image";

export function Apropos() {
  return (
    <div className="w-full">
      <div className="w-[90%] m-auto flex flex-col gap-12 mb-8 items-center px-4 py-4 rounded-t-2xl  bg-gradient-to-b from-[#8BB6C9] via-[#8BB6C9] to-[#FFFFFF]">
        <h1 className="font-bold md:text-3xl text-2xl">A propos</h1>
        {/* <div> */}
        <div className="flex w-full overflow-x-auto whitespace-nowrap gap-6 md:justify-between">
          {/* Apropos1 */}
          <div className="flex flex-col gap-3 items-center">
            <Image
              src="/assets/apropos1.svg"
              alt="Search Icon"
              width={42}
              height={42}
              className={`w-50 h-[50px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]`}
            />
            <div className="flex flex-col gap-3 items-center">
              <h2 className="text-lg font-bold">
                Expérience d'achat interactive
              </h2>
              <p className="text-[#1E1E1E] text-base flex text-center ">
                Chez Olo Store, nous savons que chaque <br></br>client est
                unique, c'est pourquoi nous avons <br></br> conçu une expérience
                d'achat interactive <br></br> qui vous engage à chaque étape de
                votre <br></br> parcours.
              </p>
            </div>
          </div>
          {/* Apropos2 */}
          <div className="flex flex-col gap-3 items-center">
            <Image
              src="/assets/apropos2.svg"
              alt="Search Icon"
              width={42}
              height={42}
              className={`w-50 h-[50px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]`}
            />
            <div className="flex gap-3 flex-col items-center">
              <h2 className="text-lg font-bold">Large choix de produits</h2>
              <p className="text-[#1E1E1E] text-base flex text-center ">
                Chez Olo Store, nous sommes fiers de vous <br></br> offrir un
                vaste assortiment de produits qui<br></br> répondent à tous vos
                besoins et envies.
              </p>
            </div>
          </div>
          {/* Apropos3 */}
          <div className="flex flex-col gap-3 items-center">
            <Image
              src="/assets/apropos3.svg"
              alt="Search Icon"
              width={42}
              height={42}
              className={`w-50 h-[50px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]`}
            />
            <div className="flex flex-col gap-3 items-center">
              <h2 className="text-lg font-bold">Accessibilité 24/7</h2>
              <p className="text-[#1E1E1E] text-base flex text-center ">
                Notre plateforme est accessible 24 heures <br></br> sur 24, 7
                jours sur 7, vous permettant de <br></br> naviguer et
                d'effectuer vos achats à tout <br></br> moment, où que vous
                soyez.
              </p>
            </div>
          </div>
        </div>
        {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.85217284235!2d9.445044649999998!3d0.41622585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x107f3b647fa9ea09%3A0x7314a12de1932d03!2sOgoou%C3%A9%20Labs!5e0!3m2!1sfr!2sga!4v1731919481513!5m2!1sfr!2sga"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="md:h-[400px] "
          ></iframe> */}
        {/* </div> */}
      </div>
    </div>
  );
}
