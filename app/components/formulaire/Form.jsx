"use client"; // Assure-toi que le composant est rendu côté client

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; // Utilisation de useSearchParams au lieu de useRouter
import Link from "next/link";

export function Form() {
  // Utilisation de useSearchParams pour récupérer les paramètres de l'URL
  const searchParams = useSearchParams();
  
  // On définit des états pour gérer les données 'name' et 'price' depuis l'URL
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    // Une fois le composant monté côté client, on récupère les données
    const productName = searchParams.get("name");
    const productPrice = searchParams.get("price");
    
    if (productName && productPrice) {
      setName(productName);
      setPrice(productPrice);
    }
  }, [searchParams]); // Déclenche lorsque les paramètres de l'URL changent

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-lg md:text-2xl mt-6 font-bold text-[#3883A2]">
        Formulaire de commande
      </h1>
      <form className="md:flex w-[90%] mt-4 m-auto md:justify-between max-sm:items-center max-sm:flex-col gap-4">
        {/* Premier bloc de saisie */}
        <div className="md:w-[50%] w-full md:pl-8 gap-4 pl-2 pr-2 flex flex-col">
          <div className="flex flex-col gap-2">
            <label htmlFor="firstName">Nom</label>
            <input
              className="border-x-[3px] pl-4 bg-transparent border-y-[3px] md:w-[90%] md:h-14 h-8 w-full rounded-md border-[#3883A2]"
              type="text"
              id="firstName"
              name="firstName"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="firstName">Prénom</label>
            <input
              className="border-x-[3px] pl-4 bg-transparent border-y-[3px] md:w-[90%] w-full md:h-14 h-8 rounded-md border-[#3883A2]"
              type="text"
              id="firstName"
              name="firstName"
            />
          </div>

          <div>
            <label htmlFor="productName">Nom du produit</label>
            <input
             className="border-x-[3px] pl-4 bg-transparent border-y-[3px] md:w-[90%] w-full md:h-14 h-8 rounded-md border-[#3883A2]"
              type="text"
              id="productName"
              name="productName"
              value={name || ''}
              readOnly
            />
          </div>

          <div className="flex flex-col ">
            <label htmlFor="productPrice">Prix</label>
            <input
             className="border-x-[3px] pl-4 bg-transparent border-y-[3px] md:w-[90%] w-full md:h-14 h-8 rounded-md border-[#3883A2]"
              type="text"
              id="productPrice"
              name="productPrice"
              value={price || ''}
              readOnly
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="transactionNumber">Numéro de transaction Airtel Money/Mobi Cash</label>
            <input
              className="border-x-[3px] pl-4 bg-transparent border-y-[3px] md:w-[90%] w-full md:h-14 h-8 rounded-md border-[#3883A2]"
              type="text"
              id="transactionNumber"
              name="transactionNumber"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="address">Adresse</label>
            <input
              className="border-x-[3px] pl-4 bg-transparent border-y-[3px] md:w-[90%] w-full md:h-14 h-8 rounded-md border-[#3883A2]"
              type="text"
              id="address"
              name="address"
            />
          </div>
        </div>

        {/* Deuxième bloc de saisie */}
        <div className="md:w-[50%] w-full gap-4 flex max-sm:pl-2 max-sm:pr-2 flex-col">
          <div className="flex flex-col gap-2">
            <label htmlFor="deliveryMode">Mode de livraison</label>
            <select
              className="border-x-[3px] pl-4 bg-transparent border-y-[3px] md:w-[90%] w-full md:h-14 h-8 rounded-md border-[#3883A2]"
              id="deliveryMode"
              name="deliveryMode"
            >
              <option disabled>Rapide</option>
              <option value="standard">Livraison standard</option>
              <option value="express">Express</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="paymentMethod">Moyen de paiement</label>
            <select
              className="border-x-[3px] pl-4 bg-transparent border-y-[3px] md:w-[90%] w-full md:h-14 h-8 rounded-md border-[#3883A2]"
              id="paymentMethod"
              name="paymentMethod"
            >
              <option disabled>Différents modes</option>
              <option value="airtel">Airtel Money</option>
              <option value="mobi">Mobi Cash</option>
            </select>
          </div>
        </div>
      </form>

      {/* Bouton soumettre */}
      <Link href="../../redirection" className="bg-[#3883A2] text-white w-[123px] text-center rounded-md mt-8 mb-8 h-9">
        Soumettre
      </Link>
    </div>
  );
}
