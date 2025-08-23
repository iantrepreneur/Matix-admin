"use client";

import { Button } from "@/components/ui/button";
import { Download, Mail, Printer } from "lucide-react";

export function InvoiceActions() {
  const handleDownload = () => {
    console.log("Télécharger facture");
    // Ici on implémenterait la génération PDF
  };

  const handleEmail = () => {
    console.log("Envoyer par email");
    // Ici on implémenterait l'envoi email
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-wrap gap-4 mt-6 justify-center">
      <Button 
        onClick={handleDownload}
        className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3"
      >
        <Download className="h-4 w-4 mr-2" />
        Download Invoice
      </Button>
      
      <Button 
        onClick={handleEmail}
        className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3"
      >
        <Mail className="h-4 w-4 mr-2" />
        Email Invoice
      </Button>
      
      <Button 
        onClick={handlePrint}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3"
      >
        <Printer className="h-4 w-4 mr-2" />
        Print Invoice
      </Button>
    </div>
  );
}