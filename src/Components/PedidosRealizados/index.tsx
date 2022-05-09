import Paginacao from '../Paginacao'
import { Container, Content } from './styles'


export default function PedidosRealizados() {
  return (
    <Container>
      <Content>
        <h5>Ultimos pedidos realizados</h5>

        <table>
            <thead>
                <tr>
                    <th>Pedido</th>
                    <th>Data e Horário</th>
                    <th>produtos</th>
                    <th>Total</th>
                    <th>Comprador</th>
                    <th>Status dos Pedido</th>
                    <th>Ação Recomendada</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        0112466
                    </td>
                    <td>
                        30/07/2021 - 15:49
                    </td>
                    <td className='accent-color'>
                        Ver (Quantidade)
                    </td>
                    <td>
                        R$ 200,00   
                    </td>
                    <td>
                        Comprador A
                    </td>
                    <td>
                        Pronta para embalar
                    </td>
                    <td>
                    <button>
                            MARCAR COMO EMBALADO
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        0112466
                    </td>
                    <td >
                        30/07/2021 - 14:17
                    </td>
                    <td className='accent-color'>
                        Ver (Quantidade)
                    </td>
                    <td>
                        R$ 200,00   
                    </td>
                    <td>
                        Comprador B
                    </td>
                    <td>
                        Pronta para embalar
                    </td>
                    <td>
                    <button>
                            MARCAR COMO EMBALADO
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        0112466
                    </td>
                    <td>
                        30/07/2021 - 15:49
                    </td>
                    <td className='accent-color'>
                        Ver (Quantidade)
                    </td>
                    <td>
                        R$ 200,00   
                    </td>
                    <td>
                        Comprador C
                    </td>
                    <td>
                        Pronta para embalar
                    </td>
                    <td>
                    <button>
                            MARCAR COMO EMBALADO
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        0112466
                    </td>
                    <td>
                        30/07/2021 - 15:49
                    </td>
                    <td className='accent-color'>
                        Ver (Quantidade)
                    </td>
                    <td>
                        R$ 200,00   
                    </td>
                    <td>
                        Comprador D
                    </td>
                    <td>
                        Pronta para embalar
                    </td>
                    <td>
                        <button>
                            MARCAR COMO EMBALADO
                        </button>
                 
                    </td>
                </tr>
                <tr>
                    <td>
                        0112466
                    </td>
                    <td>
                        30/07/2021 - 15:49
                    </td>
                    <td className='accent-color'>
                        Ver (Quantidade)
                    </td>
                    <td>
                        R$ 200,00   
                    </td>
                    <td>
                        Comprador E
                    </td>
                    <td>
                        Pronto para envio
                    </td>
                    <td>
                        <button>
                            NOTIFICAR ENVIO
                        </button>
                        
                    </td>
                </tr>
            </tbody>
        </table>
        <Paginacao/>
      </Content>
    </Container>
  )
}