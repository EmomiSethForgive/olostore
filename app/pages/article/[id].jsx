import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

// Page de détails du produit
const ProductDetail = () => {
  const router = useRouter(); // Hook pour récupérer les paramètres de l'URL
  const { id } = router.query; // Récupérer l'ID du produit à partir de l'URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fonction pour récupérer les détails du produit
  useEffect(() => {
    if (!id) return; // Ne rien faire si l'ID n'est pas encore disponible

    const fetchProductDetails = async () => {
      try {
        const url =
          "https://api.allorigins.win/get?url=" +
          encodeURIComponent(`https://ecommerce-xxz7.onrender.com/api/produits/${id}`);
        const response = await fetch(url);
        const data = await response.json();
        const parsedData = JSON.parse(data.contents); // Décoder les données
        setProduct(parsedData); // Mettre à jour l'état avec les données du produit
      } catch (error) {
        console.error("Error fetching product details:", error);
        setError("Une erreur est survenue lors de la récupération des détails.");
      } finally {
        setLoading(false); // Arrêter le chargement
      }
    };

    fetchProductDetails(); // Appeler la fonction fetchProductDetails
  }, [id]); // Re-exécuter lorsque l'ID change

  // Si les données sont en cours de chargement
  if (loading) {
    return <div>Chargement des détails du produit...</div>;
  }

  // Si une erreur survient
  if (error) {
    return <div>{error}</div>;
  }

  // Si le produit est trouvé, afficher ses détails
  return (
    <>
      <Header />
      <div className="product-detail-container">
        {product ? (
          <div>
            <h1>{product.name}</h1>
            <Image
              src={product.image_url || "/assets/default-image.svg"}
              alt={product.name}
              width={300}
              height={300}
            />
            <p>{product.description}</p>
            <p>Modèle: {product.model}</p>
            <p>Prix: {product.price} €</p>
          </div>
        ) : (
          <div>Produit non trouvé</div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
