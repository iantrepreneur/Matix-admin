import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mb-8">
          <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-emerald-500 rounded"></div>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">MATA</h1>
          <p className="text-emerald-600 font-semibold text-lg">MART</p>
        </div>
        
        <div className="space-y-4">
          <Link href="/admin">
            <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 text-lg font-semibold rounded-xl">
              Accéder à l'Administration
            </Button>
          </Link>
          
          <p className="text-gray-500 text-sm">
            Interface d'administration MataMart
          </p>
        </div>
      </div>
    </div>
  );
}