"use client";

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showResults, setShowResults] = useState(false); // Ajouté pour gérer l'affichage des résultats

  const handleCloseResults = () => {
    setShowResults(false); // Masquer les résultats
    setResults([]); // Optionnel: réinitialiser les résultats si tu veux les supprimer
  };

  const handleSearch = async () => {
    if (searchTerm.trim() === '') {
      setResults([]);
      return;
    }

    setLoading(true);
    setError(null);
    setShowResults(true); // Montrer les résultats quand une recherche commence

    try {
      const response = await fetch(`https://ecommerce-xxz7.onrender.com/api/search?q=${searchTerm}`);
      
      if (response.ok) {
        const data = await response.json();
        setResults(data);
      } else {
        throw new Error('Aucun produit trouvé');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full sticky top-0 z-50">
      <header className="w-[90%] m-auto py-1 md:py-2 bg-[#3883A2] rounded-lg mt-4 md:pr-6 pr-3 justify-between flex items-center">
        <div>
          <Image
            className="w-20 md:w-30"
            src="../assets/logo.svg"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
        <div className="relative flex items-center">
          <input
            type="text"
            value={searchTerm}
            className="  md:pl-4 pl-1 md:pr-32 md:py-2 py-1 pr-1 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Rechercher un produit..."
          />
          <button className="text-white ml-2" onClick={handleSearch}>Rechercher</button>
          {loading && <p>Chargement...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        <div className="md:hidden lg:hidden">
          <Image
            className="md:hidden"
            src="../assets/burger.svg"
            alt="log"
            width={22}
            height={22}
          />
        </div>
        <ul className="flex gap-10 max-sm:hidden">
          <Link href="/" className="text-white text-sm max-sm:hidden md:text-lg">Acceuil</Link>
          <Link href="./produit" className="text-white text-sm max-sm:hidden md:text-lg">Produits</Link>
        </ul>
      </header>

      {/* Résultats de recherche */}
      {showResults && (
        <div className="relative">
          {/* Icône de fermeture */}
          <button
            onClick={handleCloseResults}
            className="absolute top-0 right-0 p-2 text-white bg-gray-600 rounded-full"
          >
            <span className="text-2xl">×</span>
          </button>
          
          {/* Affichage des résultats */}
          {results.length > 0 ? (
            <ul className="flex flex-wrap gap-4 mt-4 justify-center">
              {results.map((product) => (
                <li
                  key={product.id}
                  className="bg-[#3883A2] p-4 rounded-[20px] text-center w-[300px] h-[400px] hover:scale-105 transition-transform duration-300 shadow-lg"
                >
                  <div className="flex justify-center">
                    <Image
                      src={product.image_url || "/assets/default-image.svg"}
                      alt={product.name || "Product Image"}
                      width={120}
                      height={180}
                      className="w-40 h-60"
                    />
                  </div>
                  <div>
                    <p className="text-black font-bold">{product.name}</p>
                    <p className="text-white font-bold text-lg">{product.model || "Modèle non spécifié"}</p>
                    <p className="text-white text-xl mb-2">{product.price || "Prix indisponible"} fr</p>
                    <Link
                      href={`/article/${product.id}`}
                      className="bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-[10px] w-[212px] h-[36px]"
                    >
                      Commander
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            // Si aucun résultat n'est trouvé
            <p>Aucun produit trouvé.</p>
          )}
        </div>
      )}
    </div>
  );
}
