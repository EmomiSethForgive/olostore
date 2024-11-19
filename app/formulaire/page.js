"use client";


import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import dynamic from "next/dynamic";
const FormComponent = dynamic(() => import("../components/formulaire/Form"), { ssr: false });
export default function formulaire (){
    return (
        <div>
            <Header />
            <FormComponent />
            <Footer />
        </div>
    )
}