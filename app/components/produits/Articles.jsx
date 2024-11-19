"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export const Articles = () => {
  const [datas, setDatas] = useState([]); // Utilisation de `setDatas` pour l'état principal
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Effect pour récupérer les données de l'API
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("https://ecommerce-xxz7.onrender.com/api/produits");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data); // Vérifiez la structure de `data` dans la console

        // Mettre à jour l'état `datas` avec les données récupérées
        setDatas(data.contents || data); 
      } catch (error) {
        console.error("Erreur de récupération des produits :", error);
        setError("Impossible de charger les produits.");
      } finally {
        setLoading(false); // Arrêter le chargement
      }
    };

    fetchProduct(); // Appeler la fonction pour récupérer les produits
  }, []); 

  // Si le contenu est en train de charger
  if (loading) {
    return <div>Chargement des produits...</div>;
  }

  // Si une erreur survient
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center justify-center w-[90%] m-auto py-1 md:py-2 gap-8">
        {datas.length === 0 ? (
          <div>Aucun produit disponible.</div>
        ) : (
          datas.map((product) => (
            <div
              key={product.id} // Utilisation de `product.id` comme clé
              className="bg-[#3883A2] p-4 rounded-[20px] text-center w-[300px] h-[400px] hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <div className="flex justify-center">
                {/* Afficher l'image du produit ou une image par défaut */}
                <Image
                  src={product.image_url || "/assets/default-image.svg"} // Fallback vers une image par défaut
                  alt={product.name || "Product Image"} // Fallback vers "Product Image"
                  width={120}
                  height={180}
                  className="w-40 h-60"
                />
              </div>-
              <div>
                {/* Nom du produit */}
                <p className="text-black font-bold">{product.name}</p>
                {/* Modèle du produit */}
                <p className="text-white font-bold text-lg">{product.model || "Modèle non spécifié"}</p>
                {/* Prix du produit */}
                <p className="text-white text-xl mb-2">{product.price || "Prix indisponible"} fr</p>
                {/* Lien vers la page détaillée du produit */}
                <Link
                  href={`/article/${product.id}`} key={product.id} // Lien dynamique vers chaque produit avec son ID
                  className="bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px]"
                >
                  Commander
                </Link>
              </div>
            </div>
          ))
        )}
        
      </div>
    </div>
  )};



