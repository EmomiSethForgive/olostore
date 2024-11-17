"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import Link from "next/link";
import { useParams } from "next/navigation"; // Utilisez useParams au lieu de useRouter

export default function Article() {
  const { id } = useParams(); // Utilisez useParams pour obtenir l'ID de l'URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Vérifiez que l'ID est défini avant d'effectuer la requête

    const fetchProduct = async () => {
      try {
        const url =
          "https://api.allorigins.win/get?url=" +
          encodeURIComponent(
            `https://ecommerce-xxz7.onrender.com/api/produits/9`
          ); // Assurez-vous que l'URL utilise l'ID
        const response = await fetch(url);
        const data = await response.json();
        const parsedData = JSON.parse(data.contents);
        console.log(parsedData);
        setProduct(parsedData);
      } catch (error) {
        console.error("Erreur de récupération du produit :", error);
        setError("Impossible de charger les détails du produit.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading) return <div>Chargement des détails du produit...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Produit introuvable.</div>;

  return (
    <div className="w-full h-screen flex flex-col">
  <Header />

  <div
    className="w-[90%] max-w-6xl m-auto mt-2 md:mt-1 lg:mt-3 py-8 bg-[#E9F2F2] border rounded-2xl md:mb-1 lg:mb-3 mb-8 lg:pr-20 lg:pl-10 flex flex-col lg:flex-row gap-8"
    style={{ boxShadow: "0 0 10px 0 #3883A2" }}
  >
    {/* Section Image */}
    <div className="w-full lg:w-1/2 flex justify-center items-center">
      <Image
        className="bg-cover max-w-[90%] md:max-w-[75%] lg:max-w-[400px] lg:h-auto"
        src={product.image_url}
        alt={`Image de ${product.name}`}
        width={400}
        height={300}
      />
    </div>

    {/* Section Détails */}
    <div className="w-full lg:w-1/2 flex flex-col gap-4 border-x-2 border-y-2 rounded-lg px-4 py-4 md:px-6 border-[#076389]">
      <div>
        <h2 className="text-[#1B7FED] font-bold text-lg">
          {product.name}
        </h2>
        <p className="text-[#1B7FED] mt-4 text-sm md:text-base">
          CARACTÉRISTIQUES PRINCIPALES :
        </p>
        <p>{product.description}</p>
      </div>
      <div className="flex gap-4">
        <p className="text-[#1B7FED] font-bold text-sm md:text-base">
          {product.price}
        </p>
      </div>

      {/* Section Couleurs */}
      <div className="flex flex-col gap-3">
        <div className="flex gap-4 items-center">
          <p className="text-sm md:text-base">Couleurs :</p>
          <div className="flex gap-2 py-1 px-1 rounded-md border-2 border-[#3883A2]">
            <Image
              className="w-6 h-6 bg-cover"
              src="/assets/point1.svg"
              alt="Couleur 1"
              width={24}
              height={24}
            />
            <Image
              className="w-6 h-6 bg-cover"
              src="/assets/point2.svg"
              alt="Couleur 2"
              width={24}
              height={24}
            />
            <Image
              className="w-6 h-6 bg-cover"
              src="/assets/point3.svg"
              alt="Couleur 3"
              width={24}
              height={24}
            />
          </div>
        </div>

        {/* Section Prix et Boutons */}
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <p className="text-sm">Prix Total :</p>
            <p className="text-[#1B7FED] font-bold">{product.price}</p>
            <p className="text-xs">(Tax incl.)</p>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <Link
              href={{
                pathname: "/formulaire",
                query: { name: product.name, price: product.price },
              }}
              className="bg-black text-white py-2 px-6 rounded-md text-center"
            >
              Commander
            </Link>
            <button className="bg-[#3883A2] text-white py-2 px-6 rounded-md flex gap-2 items-center">
              Commander
              <Image
                className="w-5 h-5 bg-cover"
                src="/assets/wha.svg"
                alt="Commander via WhatsApp"
                width={20}
                height={20}
              />
            </button>
            <div className="flex gap-1 items-center">
              <Image
                className="w-5 h-5 bg-cover"
                src="/assets/coeur.svg"
                alt="Ajouter aux favoris"
                width={20}
                height={20}
              />
              <p>0</p>
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
