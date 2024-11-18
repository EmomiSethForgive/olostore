"use client";

import React from "react";

export function MapEmbed () {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <div className="map-container">
      <iframe
        width="600"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJCeqpf2Q7fxARAy2T4S2hFHM&key=${apiKey}`}
      ></iframe>
    </div>
  );
};

