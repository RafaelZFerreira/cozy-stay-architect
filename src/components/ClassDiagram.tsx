
import { useRef, useEffect } from "react";

const ClassDiagram = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      // This would be where we'd add any interactive functionality
      // for the SVG diagram if needed
    }
  }, []);

  return (
    <div className="w-full overflow-auto">
      <svg
        ref={svgRef}
        width="800"
        height="600"
        viewBox="0 0 800 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* User Class */}
        <g transform="translate(50, 50)">
          <rect width="200" height="160" fill="#f0f9ff" stroke="#00afc3" strokeWidth="2" />
          <rect width="200" height="40" fill="#00afc3" stroke="#00afc3" strokeWidth="2" />
          <text x="100" y="25" textAnchor="middle" fill="white" fontWeight="bold">
            Usuario
          </text>
          <line x1="0" y1="40" x2="200" y2="40" stroke="#00afc3" strokeWidth="2" />
          <text x="10" y="60" fill="#333">+ id: int</text>
          <text x="10" y="80" fill="#333">+ nome: string</text>
          <text x="10" y="100" fill="#333">+ email: string</text>
          <text x="10" y="120" fill="#333">+ senha: string</text>
          <line x1="0" y1="130" x2="200" y2="130" stroke="#00afc3" strokeWidth="2" />
          <text x="10" y="150" fill="#333">+ autenticar(): boolean</text>
        </g>

        {/* Hotel Class */}
        <g transform="translate(550, 50)">
          <rect width="200" height="180" fill="#f0f9ff" stroke="#00afc3" strokeWidth="2" />
          <rect width="200" height="40" fill="#00afc3" stroke="#00afc3" strokeWidth="2" />
          <text x="100" y="25" textAnchor="middle" fill="white" fontWeight="bold">
            Hotel
          </text>
          <line x1="0" y1="40" x2="200" y2="40" stroke="#00afc3" strokeWidth="2" />
          <text x="10" y="60" fill="#333">+ id: int</text>
          <text x="10" y="80" fill="#333">+ nome: string</text>
          <text x="10" y="100" fill="#333">+ endereco: string</text>
          <text x="10" y="120" fill="#333">+ classificacao: int</text>
          <text x="10" y="140" fill="#333">+ descricao: string</text>
          <line x1="0" y1="160" x2="200" y2="160" stroke="#00afc3" strokeWidth="2" />
          <text x="10" y="175" fill="#333">+ getDisponibilidade(): array</text>
        </g>

        {/* Room Class */}
        <g transform="translate(550, 300)">
          <rect width="200" height="180" fill="#f0f9ff" stroke="#00afc3" strokeWidth="2" />
          <rect width="200" height="40" fill="#00afc3" stroke="#00afc3" strokeWidth="2" />
          <text x="100" y="25" textAnchor="middle" fill="white" fontWeight="bold">
            Quarto
          </text>
          <line x1="0" y1="40" x2="200" y2="40" stroke="#00afc3" strokeWidth="2" />
          <text x="10" y="60" fill="#333">+ id: int</text>
          <text x="10" y="80" fill="#333">+ hotelId: int</text>
          <text x="10" y="100" fill="#333">+ tipo: string</text>
          <text x="10" y="120" fill="#333">+ capacidade: int</text>
          <text x="10" y="140" fill="#333">+ preco: float</text>
          <line x1="0" y1="160" x2="200" y2="160" stroke="#00afc3" strokeWidth="2" />
          <text x="10" y="175" fill="#333">+ verificarDisponibilidade(): bool</text>
        </g>

        {/* Reservation Class */}
        <g transform="translate(50, 300)">
          <rect width="200" height="200" fill="#f0f9ff" stroke="#00afc3" strokeWidth="2" />
          <rect width="200" height="40" fill="#00afc3" stroke="#00afc3" strokeWidth="2" />
          <text x="100" y="25" textAnchor="middle" fill="white" fontWeight="bold">
            Reserva
          </text>
          <line x1="0" y1="40" x2="200" y2="40" stroke="#00afc3" strokeWidth="2" />
          <text x="10" y="60" fill="#333">+ id: int</text>
          <text x="10" y="80" fill="#333">+ usuarioId: int</text>
          <text x="10" y="100" fill="#333">+ quartoId: int</text>
          <text x="10" y="120" fill="#333">+ dataEntrada: date</text>
          <text x="10" y="140" fill="#333">+ dataSaida: date</text>
          <text x="10" y="160" fill="#333">+ status: string</text>
          <line x1="0" y1="180" x2="200" y2="180" stroke="#00afc3" strokeWidth="2" />
          <text x="10" y="195" fill="#333">+ calcularTotal(): float</text>
        </g>

        {/* Payment Class */}
        <g transform="translate(300, 400)">
          <rect width="200" height="160" fill="#f0f9ff" stroke="#00afc3" strokeWidth="2" />
          <rect width="200" height="40" fill="#00afc3" stroke="#00afc3" strokeWidth="2" />
          <text x="100" y="25" textAnchor="middle" fill="white" fontWeight="bold">
            Pagamento
          </text>
          <line x1="0" y1="40" x2="200" y2="40" stroke="#00afc3" strokeWidth="2" />
          <text x="10" y="60" fill="#333">+ id: int</text>
          <text x="10" y="80" fill="#333">+ reservaId: int</text>
          <text x="10" y="100" fill="#333">+ valor: float</text>
          <text x="10" y="120" fill="#333">+ metodo: string</text>
          <line x1="0" y1="140" x2="200" y2="140" stroke="#00afc3" strokeWidth="2" />
          <text x="10" y="155" fill="#333">+ processar(): boolean</text>
        </g>

        {/* Associations */}
        {/* User - Reservation */}
        <line x1="150" y1="210" x2="150" y2="300" stroke="#555" strokeWidth="1.5" />
        <polygon points="150,300 145,290 155,290" fill="#555" />
        <text x="165" y="255" fill="#555">1</text>
        <text x="165" y="290" fill="#555">*</text>

        {/* Hotel - Room */}
        <line x1="650" y1="230" x2="650" y2="300" stroke="#555" strokeWidth="1.5" />
        <polygon points="650,300 645,290 655,290" fill="#555" />
        <text x="665" y="255" fill="#555">1</text>
        <text x="665" y="290" fill="#555">*</text>

        {/* Room - Reservation */}
        <line x1="550" y1="390" x2="250" y2="390" stroke="#555" strokeWidth="1.5" />
        <polygon points="250,390 260,385 260,395" fill="#555" />
        <text x="270" y="380" fill="#555">*</text>
        <text x="535" y="380" fill="#555">1</text>

        {/* Reservation - Payment */}
        <line x1="250" y1="450" x2="300" y2="450" stroke="#555" strokeWidth="1.5" />
        <polygon points="300,450 290,445 290,455" fill="#555" />
        <text x="265" y="440" fill="#555">1</text>
        <text x="285" y="440" fill="#555">1</text>
      </svg>
    </div>
  );
};

export default ClassDiagram;
