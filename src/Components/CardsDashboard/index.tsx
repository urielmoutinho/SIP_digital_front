import { Container } from './styles';
import UnidadesImg from '../../Assets/unidades.svg'
import VendasImg from '../../Assets/vendas.svg'
import NovosImg from '../../Assets/novosclientes.svg'
import LucroImg from '../../Assets/lucros.svg'

export function CardsDashboard() {
  return (
    <Container>
        <div className="card-content">
                <img src={UnidadesImg} alt="unidades registradas" />
                    <div className="flex flex-start-column">
                        <p>Unidades Registradas</p>
                        <span className="numbers">1</span>
                    </div>
         </div>

         <div className="card-content">
                <img src={NovosImg} alt="unidades registradas" />
                    <div className="flex flex-start-column">
                        <p>Novos Clientes</p>
                        <span className="numbers">1</span>
                    </div>
         </div>


         <div className="card-content">
                <img src={VendasImg} alt="unidades registradas" />
                    <div className="flex flex-start-column">
                        <p>Vendas Registradas</p>
                        <span className="numbers">1</span>
                    </div>
         </div>


         <div className="card-content">
                <img src={LucroImg} alt="unidades registradas" />
                    <div className="flex flex-start-column">
                        <p>Lucro Liquido (Geral)</p>
                        <span className="numbers">1</span>
                    </div>
         </div>
    </Container>
  )
}