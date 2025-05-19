
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DiagramCard from "@/components/DiagramCard";
import ClassDiagram from "@/components/ClassDiagram";
import SystemContextDiagram from "@/components/SystemContextDiagram";
import UserInteractionDiagram from "@/components/UserInteractionDiagram";
import BookingFlowDiagram from "@/components/BookingFlowDiagram";
import NavBar from "@/components/NavBar";

const DiagramsPage = () => {
  const [activeTab, setActiveTab] = useState("class");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-hotel-700">Diagramas do Sistema</h1>
          <p className="text-gray-600 mt-2">
            Visualização da arquitetura e fluxos do sistema de reservas de hotel
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="class">Classes</TabsTrigger>
            <TabsTrigger value="context">Contexto do Sistema</TabsTrigger>
            <TabsTrigger value="interaction">Interação do Usuário</TabsTrigger>
            <TabsTrigger value="flow">Fluxo de Reserva</TabsTrigger>
          </TabsList>

          <TabsContent value="class" className="mt-6">
            <DiagramCard 
              title="Diagrama de Classes" 
              description="Estrutura das principais classes do sistema de reservas de hotel"
            >
              <ClassDiagram />
            </DiagramCard>
            
            <div className="mt-6 p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-bold text-hotel-700 mb-4">Descrição do Diagrama de Classes</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-medium">Usuario:</span> Representa os clientes que fazem reservas. Contém informações de autenticação e perfil.</li>
                <li><span className="font-medium">Hotel:</span> Representa os hotéis disponíveis no sistema. Cada hotel contém vários quartos.</li>
                <li><span className="font-medium">Quarto:</span> Representa os tipos de acomodação disponíveis em cada hotel, com informações como capacidade e preço.</li>
                <li><span className="font-medium">Reserva:</span> Registra as informações de uma reserva feita por um usuário para um quarto específico.</li>
                <li><span className="font-medium">Pagamento:</span> Gerencia as informações de pagamento associadas a uma reserva.</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="context" className="mt-6">
            <DiagramCard 
              title="Diagrama de Contexto do Sistema" 
              description="Conexões com entidades externas e integração com outros sistemas"
            >
              <SystemContextDiagram />
            </DiagramCard>
            
            <div className="mt-6 p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-bold text-hotel-700 mb-4">Descrição do Diagrama de Contexto</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-medium">Sistema de Reservas de Hotéis:</span> O sistema central que gerencia o processo de reservas.</li>
                <li><span className="font-medium">Clientes:</span> Pessoas que utilizam o sistema para buscar e reservar quartos de hotel.</li>
                <li><span className="font-medium">Funcionários do Hotel:</span> Equipe que gerencia disponibilidade e confirma reservas.</li>
                <li><span className="font-medium">Processadores de Pagamento:</span> Sistemas externos que processam transações financeiras.</li>
                <li><span className="font-medium">Sistema de Gestão Hoteleira:</span> Software interno do hotel para gerenciamento de operações.</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="interaction" className="mt-6">
            <DiagramCard 
              title="Diagrama de Interação do Usuário" 
              description="Como os usuários interagem com os diferentes componentes do sistema"
            >
              <UserInteractionDiagram />
            </DiagramCard>
            
            <div className="mt-6 p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-bold text-hotel-700 mb-4">Descrição do Diagrama de Interação</h3>
              <p className="mb-4">O diagrama mostra o fluxo de interações entre os principais atores e componentes do sistema:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>O cliente busca hotéis e disponibilidade usando a interface de busca.</li>
                <li>O sistema consulta o banco de dados e retorna os resultados disponíveis.</li>
                <li>O cliente seleciona um quarto e prossegue com a reserva.</li>
                <li>Os dados de pagamento são processados através de um sistema externo.</li>
                <li>A reserva é registrada no banco de dados e notificações são enviadas aos funcionários.</li>
                <li>Os funcionários gerenciam a disponibilidade e visualizam as reservas.</li>
              </ol>
            </div>
          </TabsContent>

          <TabsContent value="flow" className="mt-6">
            <DiagramCard 
              title="Fluxograma do Processo de Reserva" 
              description="Sequência de ações para completar uma reserva de hotel"
            >
              <BookingFlowDiagram />
            </DiagramCard>
            
            <div className="mt-6 p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-bold text-hotel-700 mb-4">Descrição do Fluxo de Reserva</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>O processo inicia quando o usuário busca hotéis por localização e datas.</li>
                <li>O usuário seleciona um hotel e o sistema verifica a disponibilidade.</li>
                <li>Se não houver disponibilidade, o usuário pode escolher datas alternativas.</li>
                <li>Se houver quartos disponíveis, o usuário seleciona o quarto desejado.</li>
                <li>O usuário fornece suas informações pessoais para a reserva.</li>
                <li>O usuário realiza o pagamento da reserva.</li>
                <li>Se o pagamento for bem-sucedido, a reserva é confirmada.</li>
                <li>Se o pagamento falhar, o processo é encerrado sem uma reserva.</li>
              </ol>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DiagramsPage;
