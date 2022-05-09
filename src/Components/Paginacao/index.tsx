import { Container} from './styles'
import Esquerda from '../../Assets/first.svg'
import Direita from '../../Assets/last.svg'


export default function Paginacao() {
  return (
    <Container>


<div className="pagination">
    <ul className="pagination-2">
      <li className="page-number prev"><a href="#"><img src={Esquerda} alt="" /></a></li>
      <li className="page-number active"><a href="#">1</a></li>
      <li className="page-number "><a href="#">2</a></li>
      <li className="page-number"><a href="#">3</a></li>
      <li className="page-number next"><a href="#"><img src={Direita} alt="" /></a></li>
    </ul>
  </div>
    </Container>
  )
}