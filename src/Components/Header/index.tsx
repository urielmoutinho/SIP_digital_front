import { Container, Pesquisa, Letters } from './styles'
import pesquisalogo from '../../Assets/pesquisa.svg'
import UserProfile from '../../Assets/user.svg'
import NotificacaoProfile from '../../Assets/notificacao.svg'
export default function Header() {
  return (
    <Container>

            <Pesquisa>
            <input className="search" type="text" placeholder="Pesquisar"/>
            <img src = {pesquisalogo} alt='pesquisa' />
            </Pesquisa>
    
           <div className='profile-settings'>
           <button type="button">
              <img src ={NotificacaoProfile} alt='notificação'  />
              <span className="icon">2</span>
            </button>
            <div className="profile">
            <img src ={UserProfile} alt='photo profile'  />
            </div>
           </div>

 
    </Container>
  )
}