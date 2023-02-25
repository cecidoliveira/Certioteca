import logo from '../../assets/logo.svg'
import { IoAddCircle } from "react-icons/io5";
import { AddButton, DivTop, Imagem, Title } from './StylesCerttop';



function Certtop() {

  return (
    <>
    <DivTop>
        <Imagem src={logo} alt="logo de livros" />

        <Title>Certificados</Title>

        <AddButton href='/add'><IoAddCircle/></AddButton>
    </DivTop>
    </>
  );
}

export default Certtop