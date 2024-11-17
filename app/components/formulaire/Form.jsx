import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";



export function Form() {
  const searchParams = useSearchParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [numero_transaction, setNumeroTransaction] = useState("");
  const [adresse, setAdresse] = useState("");
  const [mode_livraison, setModeLivraison] = useState("express");
  const [moyen_paiement, setMoyenPaiement] = useState("");
  const [nombre_article, setNombreArticle] = useState(1);
  const [isClient, setIsClient] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [facture, setFacture] = useState(null);
  const [formulaire, setFormulaire] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsClient(true); // Mark the component as mounted on the client side
  }, []);

  // Only run searchParams hook on the client side
  useEffect(() => {
    if (isClient) {
      const productName = searchParams.get("name");
      const productPrice = searchParams.get("price");

      if (productName && productPrice) {
        setName(productName);
        setPrice(productPrice);
      }
    }
  }, [searchParams, isClient]);

  if (!isClient) return null; // Don't render until the component is client-side

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!nom || !prenom || !numero_transaction || !adresse || !mode_livraison || !moyen_paiement) {
      setError("Tous les champs doivent être remplis !");
      setIsSubmitting(false);
      return;
    }

    const formData = {
      nom,
      prenom,
      numero_transaction,
      adresse,
      mode_livraison,
      moyen_paiement,
      nom_article: name,
      prix_article: price,
      nombre_article: nombre_article,
    };

    try {
      const res = await fetch("https://ecommerce-xxz7.onrender.com/api/formulaire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        alert(result.message || "Formulaire envoyé avec succès !");
        if (result.facture) {
          setFacture(result.facture);
        }
        if (result.formulaire) {
          setFormulaire(result.formulaire);
        }
      } else {
        setError(result.message || "Une erreur s'est produite.");
      }
    } catch (error) {
      setError("Erreur lors de l'envoi des données.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-lg md:text-2xl mt-6 font-bold text-[#3883A2]">
        Formulaire de commande
      </h1>
      <form
        onSubmit={handleSubmit}
        className="md:flex w-[90%] mt-4 m-auto md:justify-between max-sm:items-center max-sm:flex-col gap-4"
      >
        {/* Your form inputs here */}
      </form>

      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className={`bg-[#3883A2] text-white w-[123px] text-center rounded-md mt-8 mb-8 h-9 ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-[#2e6f81]"
        }`}
      >
        {isSubmitting ? "Envoi..." : "Soumettre"}
      </button>

      {/* Display facture and formulaire */}
      {facture && formulaire && (
        <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-50 backdrop-blur-md z-20 min-h-screen">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full">
            <h2 className="text-xl font-bold text-center text-[#3883A2]">Votre Facture</h2>
            <div className="mt-4">
              <p><strong>Nom:</strong> {formulaire.nom}</p>
              {/* Other details */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
