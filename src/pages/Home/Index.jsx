import enderecoimg from '../../../public/img/image01.jpg';
import  {Footer}  from '../../components/Footer/index.jsx';
import  {Header}  from '../../components/Header/index.jsx';
import {Link} from 'react-router-dom';
import './styles.css'

export function Home() {

  return (
    <>

    <Header />
    
    <div>
    
      <img id='testeimg' src={enderecoimg} alt="" />

      <h1 id='h1home'>Treinos <span>exclusivos</span> <br /> para você!</h1>

      <p>Nós criamos treinos <span class='cinza1'>exclusivos e únicos para você.</span> <br />
      Invista no seu corpo e  <span class='cinza1'>tenha muito mais performance </span> e <br /> qualidade de vida. 
      <br />Para sua primeira <span class='cinza1'>experiência estamos liberando </span> nosso <br /> 
      treino <span class='cinza1'>demonstrativo. </span> </p>
      <div class='box'>
        <Link to='/List' class='linkBox'>Teste Já</Link>
            {/* <img class='logowhats' src={enderecoimg1} alt="" /> */}
      </div>

    </div>

    <Footer />
    
    </>
  )
}