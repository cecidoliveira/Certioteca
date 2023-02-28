import { DivBody } from './StylesAddbody';
import { ChakraProvider, Input, Button, useToast  } from '@chakra-ui/react'
import { useState } from 'react';
import { useCertStore } from '../../Store/Certioteca';

function Addbody() {
    const {biblioteca, addCert} = useCertStore(state => state)
    const [values, setValues] = useState();

    console.log(biblioteca)
    const toast = useToast()

    function handleSendButton(){

        toast({
            description: "dados adicionandos a biblioteca!",
            duration: 5000,
            isClosable: true,
            containerStyle: {
                fontSize: '2rem'
            }
        })
        addCert(values)
    }

    const handleChangedValues = (value) => {
        setValues(prevValue =>({
            ...prevValue,
            [value.target.name]: value.target.value
        }))

    }

    return (
        <>  
            <ChakraProvider>
                <DivBody>
                    <p>Titulo do certificado:</p>
                    <Input name='titulo' onChange={handleChangedValues} variant='flushed' focusBorderColor='white' />
                    <p>Data de recebimento:</p>
                    <Input name='data' onChange={handleChangedValues} variant='flushed' focusBorderColor='white' size="lg" type="date"/>
                    <p>Arquivo do certificado:</p>
                    <input name='file' type="file"/>
                    <Button onClick={handleSendButton}  colorScheme='blue' size='lg' variant='solid'>enviar</Button>
                </DivBody>
            </ChakraProvider>
        </>

    );
  }
  
  export default Addbody