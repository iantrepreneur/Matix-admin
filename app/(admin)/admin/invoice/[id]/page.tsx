import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download, Mail, Printer } from "lucide-react";

export async function generateStaticParams() {
  // Return the available invoice IDs for static generation
  return [
    { id: "12196" },
    { id: "2190" }
  ];
}

interface InvoicePageProps {
  params: {
    id: string;
  };
}

// Données mockées pour la facture
const invoiceData = {
  id: "12198",
  date: "25 Aug, 2025",
  status: "Delivered",
  statusColor: "bg-emerald-500",
  
  // Informations entreprise
  company: {
    name: "KACHA BAZAR",
    address: "59 Station Rd, Purls Bridge, United Kingdom",
    phone: "019579034",
    email: "kachabazar@gmail.com",
    website: "kachabazar-admin.vercel.app"
  },
  
  // Informations client
  customer: {
    name: "Sierra Brooks",
    email: "justin@gmail.com",
    phone: "45768976",
    address: "Asad Market, Roumari Bazar",
    city: "New York, United States, 276201"
  },
  
  // Produits
  items: [
    {
      sr: 1,
      title: "Radicchio",
      quantity: 1,
      price: 45.00,
      amount: 45.00
    },
    {
      sr: 2,
      title: "Himalaya Powder-EXTRA DETAILS",
      quantity: 1,
      price: 160.00,
      amount: 160.00
    }
  ],
  
  // Calculs
  paymentMethod: "Cash",
  shippingCost: 60.00,
  discount: 0.00,
  totalAmount: 265.00
};

function InvoiceActions() {
  const handleDownload = () => {
    console.log("Télécharger facture");
    // Ici on implémenterait la génération PDF
  };

  const handleEmail = () => {
    console.log("Envoyer par email");
    // Ici on implémenterait l'envoi email
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="flex justify-center space-x-4 mt-8">
      <Button 
        onClick={handleDownload}
        className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg"
      >
        <Download className="h-4 w-4 mr-2" />
        Download Invoice
      </Button>
      
      <Button 
        onClick={handleEmail}
        className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg"
      >
        <Mail className="h-4 w-4 mr-2" />
        Email Invoice
      </Button>
      
      <Button 
        onClick={handlePrint}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        <Printer className="h-4 w-4 mr-2" />
        Print Invoice
      </Button>
    </div>
  );
}

export default function InvoicePage({ params }: InvoicePageProps) {
  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Invoice</h1>
        </div>

        {/* Document facture - fond blanc */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          {/* Header facture */}
          <div className="flex justify-between items-start mb-12">
            {/* Gauche - INVOICE + STATUS */}
            <div>
              <h1 className="text-4xl font-bold text-black mb-4">INVOICE</h1>
              <div className="flex items-center space-x-3">
                <span className="text-gray-600 font-medium text-sm">STATUS</span>
                <Badge className={`${invoiceData.statusColor} text-white hover:${invoiceData.statusColor} px-3 py-1 rounded text-sm`}>
                  {invoiceData.status}
                </Badge>
              </div>
            </div>
            
            {/* Droite - Logo + Adresse entreprise */}
            <div className="text-right">
              <div className="mb-6">
                <div className="inline-flex items-center space-x-2 bg-emerald-500 text-white px-4 py-2 rounded-lg mb-4">
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                    <div className="w-3 h-3 bg-emerald-500 rounded"></div>
                  </div>
                  <span className="text-xl font-bold">KACHA</span>
                </div>
                <div className="text-sm font-bold">BAZAR</div>
              </div>
              <div className="text-gray-600 text-sm space-y-1">
                <div>{invoiceData.company.address}</div>
                <div>{invoiceData.company.phone}</div>
                <div>{invoiceData.company.email}</div>
                <div>{invoiceData.company.website}</div>
              </div>
            </div>
          </div>

          {/* Informations principales - 3 colonnes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Colonne 1 - DATE */}
            <div>
              <h3 className="text-gray-600 font-medium mb-3 text-sm">DATE</h3>
              <p className="text-gray-900 font-medium">{invoiceData.date}</p>
            </div>
            
            {/* Colonne 2 - INVOICE NO */}
            <div>
              <h3 className="text-gray-600 font-medium mb-3 text-sm">INVOICE NO</h3>
              <p className="text-gray-900 font-medium">#{invoiceData.id}</p>
            </div>
            
            {/* Colonne 3 - INVOICE TO */}
            <div>
              <h3 className="text-gray-600 font-medium mb-3 text-sm">INVOICE TO</h3>
              <div className="text-gray-900 space-y-1">
                <p className="font-medium">{invoiceData.customer.name}</p>
                <p className="text-sm">{invoiceData.customer.email} {invoiceData.customer.phone}</p>
                <p className="text-sm">{invoiceData.customer.address}</p>
                <p className="text-sm">{invoiceData.customer.city}</p>
              </div>
            </div>
          </div>

          {/* Tableau produits */}
          <div className="mb-12">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50 border-gray-200">
                  <TableHead className="font-bold text-gray-900 text-sm py-4">SR.</TableHead>
                  <TableHead className="font-bold text-gray-900 text-sm py-4">PRODUCT TITLE</TableHead>
                  <TableHead className="font-bold text-gray-900 text-sm py-4">QUANTITY</TableHead>
                  <TableHead className="font-bold text-gray-900 text-sm py-4">ITEM PRICE</TableHead>
                  <TableHead className="font-bold text-gray-900 text-sm py-4 text-right">AMOUNT</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoiceData.items.map((item) => (
                  <TableRow key={item.sr} className="border-gray-100">
                    <TableCell className="font-medium py-4">{item.sr}</TableCell>
                    <TableCell className="font-medium py-4">{item.title}</TableCell>
                    <TableCell className="py-4">{item.quantity}</TableCell>
                    <TableCell className="py-4">{formatPrice(item.price)}</TableCell>
                    <TableCell className="text-right font-medium text-red-500 py-4">
                      {formatPrice(item.amount)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Footer calculs */}
          <div className="flex justify-end">
            <div className="w-full max-w-md space-y-4">
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600 font-medium">PAYMENT METHOD:</span>
                <span className="text-gray-900">{invoiceData.paymentMethod}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600 font-medium">SHIPPING COST:</span>
                <span className="text-gray-900">{formatPrice(invoiceData.shippingCost)}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600 font-medium">DISCOUNT:</span>
                <span className="text-gray-900">{formatPrice(invoiceData.discount)}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 font-bold text-lg">TOTAL AMOUNT:</span>
                  <span className="text-red-500 font-bold text-2xl">{formatPrice(invoiceData.totalAmount)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Boutons action */}
        <InvoiceActions />
      </div>
    </div>
  );
}