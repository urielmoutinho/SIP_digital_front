import { Container } from "./styles";
import { Sidebar } from "../Sidebar";
import { CardsDashboard } from "../CardsDashboard";
import PedidosRealizados from "../PedidosRealizados";
import ContentDashboard from "../ContentDashboard";

export function Dashboard() {
  return (
    <Container>
      <Sidebar />
      <ContentDashboard />
    </Container>
  );
}
