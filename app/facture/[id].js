"use client"; // Assure-toi que ce composant est rendu côté client

import { useRouter } from "next/navigation"; // Utilisation de useRouter pour la redirection
import { useEffect, useState } from "react";

export default function FacturePage() {
  const router = useRouter();
  const { id } = router.query; // Récupère l'id de la facture dans l'URL
  const [facture, setFacture] = useState(null);

  useEffect(() => {
    if (id) {
      // Appel à l'API pour récupérer la facture par son ID
      fetch(`https://ecommerce-xxz7.onrender.com/api/factures/${id}`)
        .then((res) => res.json())
        .then((data) => setFacture(data))
        .catch((error) => {
          console.error("Erreur lors de la récupération de la facture:", error);
        });
    }
  }, [id]);

  if (!facture) {
    return <div>Chargement de la facture...</div>;
  }

  return (
    <div className="facture-container">
      <h1>Facture</h1>
      <p><strong>Nom de l'article:</strong> {facture.nom_article}</p>
      <p><strong>Quantité:</strong> {facture.nombre_article}</p>
      <p><strong>Prix unitaire:</strong> {facture.prix_article} FCFA</p>
      <p><strong>Frais de livraison:</strong> {facture.livraison} FCFA</p>
      <p><strong>Total:</strong> {facture.total} FCFA</p>
      {/* Afficher plus de détails ici si nécessaire */}
    </div>
  );
}
