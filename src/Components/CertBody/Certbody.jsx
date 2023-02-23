import { BoxImagem, Content, DivBody, DivContent } from "./StylesCertbody";

function Pagebody() {

  return (
    <DivBody>
        <DivContent>
            <BoxImagem></BoxImagem>
            <Content>Introdução ao Packet Tracer</Content>
            <Content>Data: 05/04/2020</Content>
        </DivContent>
        
        <DivContent>
            <BoxImagem></BoxImagem>
            <Content>Fundamentos em Linux</Content>
            <Content>Data: 25/07/2022</Content>
        </DivContent>

        <DivContent>
            <BoxImagem></BoxImagem>
            <Content>Cybersecurity Essentials</Content>
            <Content>Data: 10/05/2020</Content>
        </DivContent>

        <DivContent>
            <BoxImagem></BoxImagem>
            <Content>Introduction to IOT</Content>
            <Content>Data: 14/09/2021</Content>
        </DivContent>

    </DivBody>
  );
}

export default Pagebody