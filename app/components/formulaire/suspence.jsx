import React, { Suspense, useState, useEffect } from "react";
import {useSearchParams} from "next/navigation"
import Form from "./Form"; // Ton composant Form

export default function Page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Activer l'état côté client après le rendu
  }, []);

  // Si on est pas sur le client, on ne rend rien
  if (!isClient) return null;

  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <Form />
    </Suspense>
  );
}
