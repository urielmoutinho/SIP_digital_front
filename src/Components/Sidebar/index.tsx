import { Container, Colluns } from "./styles";
import DashboardLogo from "../../Assets/dashboard.svg";
import PedidosLogo from "../../Assets/pedidos.svg";
import ClientesLogo from "../../Assets/clientes.svg";
import FinanceiroLogo from "../../Assets/financeiro.svg";
import UsuariosLogo from "../../Assets/usuarios.svg";
import LogoutLogo from "../../Assets/logout.svg";

export function Sidebar() {
  return (
    <Container>
      <div>
        <header>
          <h2>LOGO</h2>
        </header>
        <ul id="sidebar">
          <li>
            <a>
              <img src={DashboardLogo} alt="dashboard logo" />
              <Colluns>Dashboard</Colluns>
            </a>
          </li>
          <li>
            <a>
              <img src={PedidosLogo} alt="Pedidos logo" />
              <Colluns>Pedidos</Colluns>
            </a>
          </li>
          <li>
            <a>
              <img src={ClientesLogo} alt="Clientes logo" />
              <Colluns>Clientes</Colluns>
            </a>
          </li>
          <li>
            <a>
              <img src={FinanceiroLogo} alt="Financeiro logo" />
              <Colluns>Financeiro</Colluns>
            </a>
          </li>
          <li>
            <a>
              <img src={UsuariosLogo} alt="usuários logo" />
              <Colluns>Usuários</Colluns>
            </a>
          </li>
        </ul>

        <footer id="Logout">
          <a>
            <img src={LogoutLogo} alt="logout logo" />
            <p>Logout</p>
          </a>
        </footer>
      </div>
    </Container>
  );
}
