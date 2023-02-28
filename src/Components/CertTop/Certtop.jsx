import logo from '../../assets/logo.svg'
import { IoAddCircle } from "react-icons/io5";
import { AddButton, DivTop, Imagem, Title } from './StylesCerttop';
import {Link} from "react-router-dom";


function Certtop() {

  return (
    <>
    <DivTop>
        <Imagem src={logo} alt="logo de livros" />

        <Title>Certificados</Title>

        <Link to="/add"><AddButton href='/add'><IoAddCircle/></AddButton></Link>
    </DivTop>
    </>
  );
}

export default Certtop