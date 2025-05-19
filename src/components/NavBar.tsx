
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X, User } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-semibold text-hotel-600">HotelReserva</span>
          </Link>

          {/* Search Bar - Hidden on Mobile */}
          <div className="hidden md:flex items-center max-w-md w-full mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input 
                type="text" 
                placeholder="Buscar hotéis..." 
                className="pl-10 pr-4 py-2 w-full border rounded-full focus:ring-2 focus:ring-hotel-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/hoteis" className="text-gray-700 hover:text-hotel-600 px-3 py-2 rounded-md text-sm font-medium">
              Hotéis
            </Link>
            <Link to="/reservas" className="text-gray-700 hover:text-hotel-600 px-3 py-2 rounded-md text-sm font-medium">
              Minhas Reservas
            </Link>
            <Link to="/diagramas" className="text-gray-700 hover:text-hotel-600 px-3 py-2 rounded-md text-sm font-medium">
              Diagramas
            </Link>
            <Button variant="outline" className="flex items-center gap-2">
              <User size={18} />
              <span>Entrar</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 py-3 animate-fade-in">
            {/* Mobile Search */}
            <div className="mb-4 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input 
                type="text" 
                placeholder="Buscar hotéis..." 
                className="pl-10 pr-4 py-2 w-full border rounded-full focus:ring-2 focus:ring-hotel-500 focus:border-transparent"
              />
            </div>
            
            <Link to="/hoteis" className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium">
              Hotéis
            </Link>
            <Link to="/reservas" className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium">
              Minhas Reservas
            </Link>
            <Link to="/diagramas" className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium">
              Diagramas
            </Link>
            <Button variant="outline" className="w-full mt-2 flex items-center justify-center gap-2">
              <User size={18} />
              <span>Entrar</span>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
