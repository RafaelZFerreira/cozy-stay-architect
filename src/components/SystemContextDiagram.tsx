
const SystemContextDiagram = () => {
  return (
    <div className="w-full overflow-auto">
      <svg
        width="800"
        height="600"
        viewBox="0 0 800 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <rect x="0" y="0" width="800" height="600" fill="#f8fafc" />
        
        {/* System - Center */}
        <circle cx="400" cy="300" r="100" fill="#e6f7f9" stroke="#00afc3" strokeWidth="3" />
        <text x="400" y="300" textAnchor="middle" fontWeight="bold" fontSize="18">
          Sistema de Reservas
        </text>
        <text x="400" y="325" textAnchor="middle" fontSize="14">
          de Hotéis
        </text>

        {/* External Entities */}
        {/* Customers */}
        <circle cx="200" cy="150" r="70" fill="#f0f9ff" stroke="#00afc3" strokeWidth="2" />
        <text x="200" y="145" textAnchor="middle" fontWeight="bold" fontSize="16">
          Clientes
        </text>
        <text x="200" y="165" textAnchor="middle" fontSize="12">
          (Hóspedes)
        </text>

        {/* Hotel Staff */}
        <circle cx="600" cy="150" r="70" fill="#f0f9ff" stroke="#00afc3" strokeWidth="2" />
        <text x="600" y="145" textAnchor="middle" fontWeight="bold" fontSize="16">
          Funcionários
        </text>
        <text x="600" y="165" textAnchor="middle" fontSize="12">
          do Hotel
        </text>

        {/* Payment Processor */}
        <circle cx="200" cy="450" r="70" fill="#f0f9ff" stroke="#00afc3" strokeWidth="2" />
        <text x="200" y="445" textAnchor="middle" fontWeight="bold" fontSize="16">
          Processadores
        </text>
        <text x="200" y="465" textAnchor="middle" fontSize="12">
          de Pagamento
        </text>

        {/* Property Management */}
        <circle cx="600" cy="450" r="70" fill="#f0f9ff" stroke="#00afc3" strokeWidth="2" />
        <text x="600" y="445" textAnchor="middle" fontWeight="bold" fontSize="16">
          Sistema de
        </text>
        <text x="600" y="465" textAnchor="middle" fontSize="12">
          Gestão Hoteleira
        </text>

        {/* Connections */}
        {/* Customers - System */}
        <line x1="260" y1="180" x2="330" y2="240" stroke="#555" strokeWidth="2" strokeDasharray="5,5" />
        <polygon points="330,240 318,235 325,225" fill="#555" />
        <text x="295" y="190" textAnchor="middle" fill="#444" fontSize="12">
          Faz reservas
        </text>
        <text x="295" y="205" textAnchor="middle" fill="#444" fontSize="12">
          Consulta disponibilidade
        </text>

        {/* System - Customers */}
        <line x1="320" y1="260" x2="250" y2="200" stroke="#555" strokeWidth="2" />
        <polygon points="250,200 262,205 255,215" fill="#555" />
        <text x="275" y="250" textAnchor="middle" fill="#444" fontSize="12">
          Confirmações
        </text>

        {/* System - Hotel Staff */}
        <line x1="480" y1="240" x2="550" y2="180" stroke="#555" strokeWidth="2" />
        <polygon points="550,180 538,185 545,195" fill="#555" />
        <text x="540" y="225" textAnchor="middle" fill="#444" fontSize="12">
          Notificações de reservas
        </text>

        {/* Hotel Staff - System */}
        <line x1="540" y1="200" x2="470" y2="260" stroke="#555" strokeWidth="2" strokeDasharray="5,5" />
        <polygon points="470,260 482,255 475,245" fill="#555" />
        <text x="525" y="250" textAnchor="middle" fill="#444" fontSize="12">
          Gerencia disponibilidade
        </text>

        {/* System - Payment */}
        <line x1="320" y1="360" x2="250" y2="420" stroke="#555" strokeWidth="2" strokeDasharray="5,5" />
        <polygon points="250,420 262,415 255,405" fill="#555" />
        <text x="260" y="375" textAnchor="middle" fill="#444" fontSize="12">
          Processa pagamentos
        </text>

        {/* Payment - System */}
        <line x1="260" y1="400" x2="330" y2="340" stroke="#555" strokeWidth="2" />
        <polygon points="330,340 318,345 325,355" fill="#555" />
        <text x="310" y="395" textAnchor="middle" fill="#444" fontSize="12">
          Confirmações
        </text>

        {/* System - Property Management */}
        <line x1="480" y1="360" x2="550" y2="420" stroke="#555" strokeWidth="2" strokeDasharray="5,5" />
        <polygon points="550,420 538,415 545,405" fill="#555" />
        <text x="540" y="375" textAnchor="middle" fill="#444" fontSize="12">
          Atualiza inventário
        </text>

        {/* Property Management - System */}
        <line x1="540" y1="400" x2="470" y2="340" stroke="#555" strokeWidth="2" />
        <polygon points="470,340 482,345 475,355" fill="#555" />
        <text x="525" y="395" textAnchor="middle" fill="#444" fontSize="12">
          Dados de disponibilidade
        </text>

        {/* Legend */}
        <rect x="620" y="20" width="160" height="80" fill="white" stroke="#ccc" strokeWidth="1" />
        <text x="700" y="40" textAnchor="middle" fontWeight="bold" fontSize="14">Legenda</text>
        <line x1="640" y1="55" x2="670" y2="55" stroke="#555" strokeWidth="2" />
        <text x="710" y="60" fontSize="12">Fluxo de dados</text>
        <line x1="640" y1="75" x2="670" y2="75" stroke="#555" strokeWidth="2" strokeDasharray="5,5" />
        <text x="710" y="80" fontSize="12">Solicitação</text>
      </svg>
    </div>
  );
};

export default SystemContextDiagram;
