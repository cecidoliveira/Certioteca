import logo from '../../assets/logo.svg'
import { CertButton, DivTop, Imagem, Title } from './StylesAddtop';
import { TbCertificate2 } from "react-icons/tb";
import {Link} from "react-router-dom";

function Addtop() {
    return (
        <>
            <DivTop>
               <Imagem src={logo} alt="logo de livros" />

                <Title>Adicionar Certificado</Title>
                <Link to="/"><CertButton href='/'><TbCertificate2/></CertButton></Link> 
                
            </DivTop>
        </>
    );
  }
  
  export default Addtop