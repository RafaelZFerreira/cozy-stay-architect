
const BookingFlowDiagram = () => {
  return (
    <div className="w-full overflow-auto">
      <svg
        width="850"
        height="700"
        viewBox="0 0 850 700"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Start Node */}
        <circle cx="425" cy="50" r="25" fill="#00afc3" />
        <text x="425" y="55" textAnchor="middle" fill="white" fontWeight="bold">Início</text>
        
        {/* Search Hotels */}
        <rect x="325" y="120" width="200" height="60" rx="10" ry="10" fill="#e6f7f9" stroke="#00afc3" strokeWidth="2" />
        <text x="425" y="155" textAnchor="middle" fontWeight="bold">Buscar Hotéis</text>
        
        {/* Select Hotel */}
        <rect x="325" y="220" width="200" height="60" rx="10" ry="10" fill="#e6f7f9" stroke="#00afc3" strokeWidth="2" />
        <text x="425" y="255" textAnchor="middle" fontWeight="bold">Selecionar Hotel</text>
        
        {/* Check Availability */}
        <rect x="325" y="320" width="200" height="60" rx="10" ry="10" fill="#e6f7f9" stroke="#00afc3" strokeWidth="2" />
        <text x="425" y="355" textAnchor="middle" fontWeight="bold">Verificar Disponibilidade</text>
        
        {/* Available? Decision */}
        <polygon points="425,420 475,460 425,500 375,460" fill="#f0f9ff" stroke="#00afc3" strokeWidth="2" />
        <text x="425" y="465" textAnchor="middle" fontWeight="bold">Disponível?</text>
        
        {/* Select Room */}
        <rect x="325" y="540" width="200" height="60" rx="10" ry="10" fill="#e6f7f9" stroke="#00afc3" strokeWidth="2" />
        <text x="425" y="575" textAnchor="middle" fontWeight="bold">Selecionar Quarto</text>
        
        {/* Enter Customer Info */}
        <rect x="75" y="320" width="200" height="60" rx="10" ry="10" fill="#e6f7f9" stroke="#00afc3" strokeWidth="2" />
        <text x="175" y="340" textAnchor="middle" fontWeight="bold">Inserir Informações</text>
        <text x="175" y="360" textAnchor="middle" fontWeight="bold">do Cliente</text>
        
        {/* Make Payment */}
        <rect x="75" y="420" width="200" height="60" rx="10" ry="10" fill="#e6f7f9" stroke="#00afc3" strokeWidth="2" />
        <text x="175" y="455" textAnchor="middle" fontWeight="bold">Realizar Pagamento</text>
        
        {/* Payment Success? */}
        <polygon points="175,520 225,560 175,600 125,560" fill="#f0f9ff" stroke="#00afc3" strokeWidth="2" />
        <text x="175" y="550" textAnchor="middle" fontWeight="bold">Pagamento</text>
        <text x="175" y="570" textAnchor="middle" fontWeight="bold">bem sucedido?</text>
        
        {/* Confirm Reservation */}
        <rect x="75" y="620" width="200" height="60" rx="10" ry="10" fill="#e6f7f9" stroke="#00afc3" strokeWidth="2" />
        <text x="175" y="655" textAnchor="middle" fontWeight="bold">Confirmar Reserva</text>
        
        {/* Change Dates */}
        <rect x="575" y="420" width="200" height="60" rx="10" ry="10" fill="#e6f7f9" stroke="#00afc3" strokeWidth="2" />
        <text x="675" y="455" textAnchor="middle" fontWeight="bold">Alterar Datas</text>
        
        {/* End Success */}
        <circle cx="175" cy="720" r="25" fill="#4ade80" />
        <text x="175" y="725" textAnchor="middle" fill="white" fontWeight="bold">Fim</text>
        
        {/* End Failure */}
        <circle cx="325" cy="560" r="25" fill="#ef4444" />
        <text x="325" y="565" textAnchor="middle" fill="white" fontWeight="bold">Fim</text>
        
        {/* Connections */}
        {/* Start - Search */}
        <line x1="425" y1="75" x2="425" y2="120" stroke="#555" strokeWidth="2" />
        <polygon points="425,120 420,110 430,110" fill="#555" />
        
        {/* Search - Select Hotel */}
        <line x1="425" y1="180" x2="425" y2="220" stroke="#555" strokeWidth="2" />
        <polygon points="425,220 420,210 430,210" fill="#555" />
        
        {/* Select Hotel - Check Availability */}
        <line x1="425" y1="280" x2="425" y2="320" stroke="#555" strokeWidth="2" />
        <polygon points="425,320 420,310 430,310" fill="#555" />
        
        {/* Check Availability - Decision */}
        <line x1="425" y1="380" x2="425" y2="420" stroke="#555" strokeWidth="2" />
        <polygon points="425,420 420,410 430,410" fill="#555" />
        
        {/* Decision - Select Room (Yes) */}
        <line x1="425" y1="500" x2="425" y2="540" stroke="#555" strokeWidth="2" />
        <polygon points="425,540 420,530 430,530" fill="#555" />
        <text x="445" y="520" textAnchor="start" fill="#555">Sim</text>
        
        {/* Decision - Change Dates (No) */}
        <line x1="475" y1="460" x2="575" y2="460" stroke="#555" strokeWidth="2" />
        <polygon points="575,460 565,455 565,465" fill="#555" />
        <text x="525" y="445" textAnchor="middle" fill="#555">Não</text>
        
        {/* Change Dates - Check Availability (loop) */}
        <path d="M775,450 Q825,450 825,350 Q825,250 425,250" fill="none" stroke="#555" strokeWidth="2" />
        <polygon points="425,250 435,245 435,255" fill="#555" />
        
        {/* Select Room - Customer Info */}
        <path d="M325,570 Q175,570 175,380" fill="none" stroke="#555" strokeWidth="2" />
        <polygon points="175,380 170,390 180,390" fill="#555" />
        
        {/* Customer Info - Payment */}
        <line x1="175" y1="380" x2="175" y2="420" stroke="#555" strokeWidth="2" />
        <polygon points="175,420 170,410 180,410" fill="#555" />
        
        {/* Payment - Payment Success? */}
        <line x1="175" y1="480" x2="175" y2="520" stroke="#555" strokeWidth="2" />
        <polygon points="175,520 170,510 180,510" fill="#555" />
        
        {/* Payment Success - Confirm Reservation (Yes) */}
        <line x1="175" y1="600" x2="175" y2="620" stroke="#555" strokeWidth="2" />
        <polygon points="175,620 170,610 180,610" fill="#555" />
        <text x="195" y="610" textAnchor="start" fill="#555">Sim</text>
        
        {/* Payment Success - End Failure (No) */}
        <line x1="225" y1="560" x2="300" y2="560" stroke="#555" strokeWidth="2" />
        <polygon points="300,560 290,555 290,565" fill="#555" />
        <text x="260" y="545" textAnchor="middle" fill="#555">Não</text>
        
        {/* Confirm - End Success */}
        <line x1="175" y1="680" x2="175" y2="695" stroke="#555" strokeWidth="2" />
        <polygon points="175,695 170,685 180,685" fill="#555" />
      </svg>
    </div>
  );
};

export default BookingFlowDiagram;
