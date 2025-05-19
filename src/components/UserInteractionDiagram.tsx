
const UserInteractionDiagram = () => {
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
        
        {/* Actor - Customer */}
        <circle cx="100" cy="80" r="30" fill="#f0f9ff" stroke="#00afc3" strokeWidth="2" />
        <line x1="100" y1="110" x2="100" y2="180" stroke="#00afc3" strokeWidth="2" />
        <line x1="70" y1="140" x2="130" y2="140" stroke="#00afc3" strokeWidth="2" />
        <line x1="100" y1="180" x2="70" y2="230" stroke="#00afc3" strokeWidth="2" />
        <line x1="100" y1="180" x2="130" y2="230" stroke="#00afc3" strokeWidth="2" />
        <text x="100" y="270" textAnchor="middle" fontWeight="bold">Cliente</text>

        {/* System Components */}
        {/* Search Interface */}
        <rect x="250" y="60" width="120" height="60" rx="10" ry="10" fill="#e6f7f9" stroke="#00afc3" strokeWidth="2" />
        <text x="310" y="95" textAnchor="middle">Interface de Busca</text>
        
        {/* Booking Interface */}
        <rect x="430" y="60" width="120" height="60" rx="10" ry="10" fill="#e6f7f9" stroke="#00afc3" strokeWidth="2" />
        <text x="490" y="95" textAnchor="middle">Interface de Reserva</text>
        
        {/* Payment Interface */}
        <rect x="610" y="60" width="120" height="60" rx="10" ry="10" fill="#e6f7f9" stroke="#00afc3" strokeWidth="2" />
        <text x="670" y="95" textAnchor="middle">Interface de Pagamento</text>
        
        {/* Hotel Staff Interface */}
        <rect x="430" y="460" width="120" height="60" rx="10" ry="10" fill="#e6f7f9" stroke="#00afc3" strokeWidth="2" />
        <text x="490" y="495" textAnchor="middle">Interface de Gestão</text>

        {/* Actor - Hotel Staff */}
        <circle cx="700" cy="470" r="30" fill="#f0f9ff" stroke="#00afc3" strokeWidth="2" />
        <line x1="700" y1="500" x2="700" y2="570" stroke="#00afc3" strokeWidth="2" />
        <line x1="670" y1="530" x2="730" y2="530" stroke="#00afc3" strokeWidth="2" />
        <line x1="700" y1="570" x2="670" y2="620" stroke="#00afc3" strokeWidth="2" />
        <line x1="700" y1="570" x2="730" y2="620" stroke="#00afc3" strokeWidth="2" />
        <text x="700" y="580" textAnchor="middle" fontWeight="bold">Funcionário</text>
        
        {/* Database */}
        <path d="M430,260 C430,280 550,280 550,260 L550,220 C550,240 430,240 430,220 Z" fill="#f0f9ff" stroke="#00afc3" strokeWidth="2" />
        <path d="M430,220 C430,240 550,240 550,220" fill="none" stroke="#00afc3" strokeWidth="2" />
        <text x="490" y="250" textAnchor="middle">Banco de Dados</text>

        {/* Payment System */}
        <rect x="250" y="380" width="120" height="60" rx="10" ry="10" fill="#f0f9ff" stroke="#00afc3" strokeWidth="2" />
        <text x="310" y="415" textAnchor="middle">Sistema de Pagamento</text>
        
        {/* Interactions */}
        {/* Customer - Search Interface */}
        <line x1="130" y1="140" x2="250" y2="90" stroke="#555" strokeWidth="1.5" strokeDasharray="5,5" />
        <polygon points="250,90 240,95 240,85" fill="#555" />
        <text x="190" y="100" textAnchor="middle" fill="#555">1. Busca hotel/datas</text>
        
        {/* Search - Database */}
        <line x1="310" y1="120" x2="430" y2="220" stroke="#555" strokeWidth="1.5" strokeDasharray="5,5" />
        <polygon points="430,220 420,215 425,205" fill="#555" />
        <text x="350" y="170" textAnchor="middle" fill="#555">2. Consulta disponibilidade</text>
        
        {/* Database - Search */}
        <line x1="420" y1="230" x2="300" y2="130" stroke="#555" strokeWidth="1.5" />
        <polygon points="300,130 310,135 305,145" fill="#555" />
        <text x="355" y="200" textAnchor="middle" fill="#555">3. Retorna resultados</text>
        
        {/* Search - Booking */}
        <line x1="370" y1="90" x2="430" y2="90" stroke="#555" strokeWidth="1.5" strokeDasharray="5,5" />
        <polygon points="430,90 420,85 420,95" fill="#555" />
        <text x="400" y="75" textAnchor="middle" fill="#555">4. Seleciona quarto</text>
        
        {/* Booking - Payment */}
        <line x1="550" y1="90" x2="610" y2="90" stroke="#555" strokeWidth="1.5" strokeDasharray="5,5" />
        <polygon points="610,90 600,85 600,95" fill="#555" />
        <text x="580" y="75" textAnchor="middle" fill="#555">5. Confirma reserva</text>
        
        {/* Payment - Payment System */}
        <line x1="670" y1="120" x2="310" y2="380" stroke="#555" strokeWidth="1.5" strokeDasharray="5,5" />
        <polygon points="310,380 315,370 320,380" fill="#555" />
        <text x="490" y="280" textAnchor="middle" fill="#555">6. Processa pagamento</text>
        
        {/* Payment System - Database */}
        <line x1="370" y1="380" x2="430" y2="260" stroke="#555" strokeWidth="1.5" />
        <polygon points="430,260 424,270 419,260" fill="#555" />
        <text x="420" y="320" textAnchor="middle" fill="#555">7. Atualiza reserva</text>
        
        {/* Database - Staff Interface */}
        <line x1="490" y1="280" x2="490" y2="460" stroke="#555" strokeWidth="1.5" />
        <polygon points="490,460 485,450 495,450" fill="#555" />
        <text x="510" y="370" textAnchor="middle" fill="#555">8. Notifica nova reserva</text>
        
        {/* Staff Interface - Staff */}
        <line x1="550" y1="490" x2="670" y2="490" stroke="#555" strokeWidth="1.5" />
        <polygon points="670,490 660,485 660,495" fill="#555" />
        <text x="610" y="475" textAnchor="middle" fill="#555">9. Visualiza reservas</text>
        
        {/* Staff - Staff Interface */}
        <line x1="660" y1="520" x2="550" y2="520" stroke="#555" strokeWidth="1.5" strokeDasharray="5,5" />
        <polygon points="550,520 560,515 560,525" fill="#555" />
        <text x="605" y="540" textAnchor="middle" fill="#555">10. Gerencia disponibilidade</text>
        
        {/* Payment - Customer (Confirmation) */}
        <line x1="610" y1="110" x2="130" y2="150" stroke="#555" strokeWidth="1.5" />
        <polygon points="130,150 140,155 135,145" fill="#555" />
        <text x="370" y="150" textAnchor="middle" fill="#555">11. Confirmação da reserva</text>
      </svg>
    </div>
  );
};

export default UserInteractionDiagram;
