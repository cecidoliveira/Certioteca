import logo from '../../assets/logo.svg'
import { CertButton, DivTop, Imagem, Title } from './StylesAddtop';
import { TbCertificate2 } from "react-icons/tb";


function Addtop() {
    return (
        <>
            <DivTop>
                <Imagem src={logo} alt="logo de livros" />

                <Title>Adicionar Certificado</Title>
                <CertButton href='/'><TbCertificate2/></CertButton>
            </DivTop>
        </>
    );
  }
  
  export default Addtop