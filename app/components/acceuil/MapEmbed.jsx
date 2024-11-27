// "use client";

// import React from "react";

export function MapEmbed () {
  // const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <div className="w-full">
    <div className="w-[90%] m-auto mb-4">
      {/* <iframe 
        width="600"
        height="450"
        
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJCeqpf2Q7fxARAy2T4S2hFHM&key=${apiKey}`}
      ></iframe> */}
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.85217284235!2d9.445044649999998!3d0.41622585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x107f3b647fa9ea09%3A0x7314a12de1932d03!2sOgoou%C3%A9%20Labs!5e0!3m2!1sfr!2sga!4v1731919481513!5m2!1sfr!2sga" width="100%" height="200"  style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="md:h-[400px] "></iframe>
    </div>
    </div>
  );
};

