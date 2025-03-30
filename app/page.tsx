"use client";

import Logo from "./Logo";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Désactiver le défilement sur le body
    document.body.style.overflow = "hidden";
    
    // Nettoyer l'effet lors du démontage du composant
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="flex justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="pt-3">
        <Logo />
      </div>
    </div>
  );
}
