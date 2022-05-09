import { CardsDashboard } from "../CardsDashboard"
import Header from "../Header"
import PedidosRealizados from "../PedidosRealizados"
import { Container } from "./styles"

export default function ContentDashboard() {
  return (
      <Container>
        <Header/>
        <CardsDashboard/>
        <PedidosRealizados/>
      </Container>

  )
}