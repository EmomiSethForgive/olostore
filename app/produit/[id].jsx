"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Link from "next/link";
import { useParams } from "next/navigation"; // Utilisez useParams au lieu de useRouter

export default function Article() {
  const { id } = useParams(); // Utilisez useParams pour obtenir l'ID de l'URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Vérifiez que l'ID est défini avant d'effectuer la requête
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const url =
          "https://api.allorigins.win/get?url=" +
          encodeURIComponent(
            `https://ecommerce-xxz7.onrender.com/api/produits/${id}`
          ); // Assurez-vous que l'URL utilise l'ID
        const response = await fetch(url);
        const data = await response.json();
        const parsedData = JSON.parse(data.contents);

        setProduct(parsedData);
      } catch (error) {
        console.error("Erreur de récupération du produit :", error);
        setError("Impossible de charger les détails du produit.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Chargement des détails du produit...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Produit introuvable.</div>;

  return (
  
<div className="w-full h-screen flex flex-col">
<Header />

  
<div className="w-[90%] m-auto mt-2 md:mt-1 lg:mt-3 py-8 bg-[#E9F2F2] border rounded-2xl md:mb-1 lg:mb-3 mb-8 lg:pr-20 lg:pl-10  md:flex md:justify-around   max-sm:justify-center max-sm:items-center md:pl-10" style={{ boxShadow: '0 0 10px 0 #3883A2' }}>
  {/* 1premier */}
  <div className="flex flex-col">
    <div className="flex flex-col relative items-start">
      <div className="w-full h-full">
        <Image
          className=" w-[400px] h-[300px] bg-cover object-cover md:w-[300px] md:h-[300px] "
          src={product.image_url} 
          alt="logo"
          width={100}
          height={100}
          //   priority
        />
      </div>
      
    </div>
  
  </div>
  {/* deuxième */}
  <div className="flex flex-col gap-4 max-sm:m-auto border-x-2 max-sm:mt-4 border-y-2 rounded-lg px-4 py-4 md:px-1 md:pl-2 md:pr-2 border-[#076389] ">
    <div>
      <h2 className="text-[#1B7FED] font-bold text-lg flex max-sm:mt-4 ">
      {product.name}
      </h2>
      <p className="text-[#1B7FED] mt-4 text-xs md:text-sm">
        CARACTÉRISTIQUES PRINCIPALES :
      </p>
      {product.description }
    </div>
    <div className="flex gap-4">
      <p className="text-[#1B7FED] font-bold md:text-base text-sm">
      {product.price}
      </p>

    </div>
    <div className="flex flex-col gap-3">
      <div className="flex gap-6 items-center">
      <p>couleurs</p>
      <div className="flex gap-2 rounded-md md:border-x-4 md:border-y-4 py-1 px-1 md:border-[#3883A2]">
        <Image
          className="w-[20px] h-[20px] bg-cover object-cover"
          src="/assets/point1.svg"
          alt="logo"
          width={100}
          height={100}
          //   priority
        />
        <Image
          className="w-[20px] h-[20px] bg-cover object-cover"
          src="/assets/point2.svg"
          alt="logo"
          width={100}
          height={100}
          //   priority
        />
        <Image
          className="w-[20px] h-[20px]  bg-cover object-cover"
          src="/assets/point3.svg"
          alt="logo"
          width={100}
          height={100}
          //   priority
        />
        </div>
      </div>
      <div>
        <div>
          <div className="flex gap-1 mb-2">
            <p className="text-sm">Prix Total :</p>
            <p className="text-[#1B7FED] font-bold"> 250.750CFA</p>
            <p className="flex text-start">Tax : incl.</p>
          </div>
          <div className="flex gap-3 items-center">
           <Link href="../formulaire" className="text-white md:py-2 py-1 bg-black md:px-10 px-7 rounded-md">
            {/* <button> */}
              commander
            {/* </button> */}
            </Link>

            <button className="text-white md:py-2 flex gap-4 py-1 items-center bg-[#3883A2] md:px-6 px-4 rounded-md">
              commander <span><Image
                className="w-[18px] h-[18px] bg-cover object-cover"
                src="/assets/wha.svg"
                alt="logo"
                width={100}
                height={100}
                //   priority
              /></span>
            </button>
            <div className="flex gap-1 items-center">
              <Image
                className="w-[20px] h-[20px] bg-cover object-cover"
                src="/assets/coeur.svg"
                alt="logo"
                width={100}
                height={100}
                //   priority
              />
              <p>0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer />
</div>
  );
}

