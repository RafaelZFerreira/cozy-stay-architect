
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import { Link } from "react-router-dom";
import { Building2, CalendarClock, Users, LineChart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-hotel-600 to-hotel-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sistema de Reservas de Hotéis
            </h1>
            <p className="text-xl mb-8">
              Análise de sistemas aplicada ao gerenciamento de reservas hoteleiras, com diagramas e fluxos de processos.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-hotel-700 hover:bg-gray-100">
                <Link to="/diagramas">Ver Diagramas</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-hotel-700">
                <Link to="/hoteis">Explorar Hotéis</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 text-background fill-current">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,150.83,65.31,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Diagramas e Análise de Sistemas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-hotel-50 text-hotel-600">
                  <Building2 size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Classes do Sistema</h3>
              <p className="text-gray-600 text-center">
                Estrutura das principais entidades que compõem o sistema de reservas.
              </p>
              <div className="mt-4 text-center">
                <Link to="/diagramas?tab=class" className="text-hotel-600 hover:text-hotel-800 font-medium">
                  Ver diagrama de classes →
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-hotel-50 text-hotel-600">
                  <CalendarClock size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Contexto do Sistema</h3>
              <p className="text-gray-600 text-center">
                Conexões do sistema com entidades externas e integrações.
              </p>
              <div className="mt-4 text-center">
                <Link to="/diagramas?tab=context" className="text-hotel-600 hover:text-hotel-800 font-medium">
                  Ver diagrama de contexto →
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-hotel-50 text-hotel-600">
                  <Users size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Interação do Usuário</h3>
              <p className="text-gray-600 text-center">
                Como os usuários interagem com os diferentes componentes do sistema.
              </p>
              <div className="mt-4 text-center">
                <Link to="/diagramas?tab=interaction" className="text-hotel-600 hover:text-hotel-800 font-medium">
                  Ver diagrama de interação →
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-hotel-50 text-hotel-600">
                  <LineChart size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Fluxo de Processo</h3>
              <p className="text-gray-600 text-center">
                Sequência de ações para completar uma reserva no sistema.
              </p>
              <div className="mt-4 text-center">
                <Link to="/diagramas?tab=flow" className="text-hotel-600 hover:text-hotel-800 font-medium">
                  Ver fluxograma →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-hotel-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Explore os Diagramas Completos</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Visualize a estrutura completa do sistema, suas conexões e processos principais através dos diagramas interativos.
          </p>
          <Button asChild size="lg" className="bg-hotel-600 hover:bg-hotel-700">
            <Link to="/diagramas">Ver Todos os Diagramas</Link>
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-semibold">HotelReserva</span>
            </div>
            <div className="text-gray-400 text-sm">
              Sistema de Análise para Reserva de Hotéis &copy; 2025
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
