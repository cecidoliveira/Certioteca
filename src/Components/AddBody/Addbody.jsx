import { DivBody } from './StylesAddbody';

import { ChakraProvider, Input, Button, useToast  } from '@chakra-ui/react'

function Addbody() {

    const toast = useToast()
    function handleStats(){
        toast({
            description: "Status!",
            duration: 5000,
            isClosable: true,
            containerStyle: {
                fontSize: '2rem'
            }
        })
    }
    return (
        <>  
            <ChakraProvider>
                <DivBody>
                    <p>Titulo do certificado:</p>
                    <Input variant='flushed' focusBorderColor='white' />
                    <p>Data de recebimento:</p>
                    <Input variant='flushed' focusBorderColor='white' size="lg" type="date"/>
                    <p>Arquivo do certificado:</p>
                    <input type="file"/>
                    <Button onClick={handleStats} colorScheme='blue' size='lg' variant='solid'>enviar</Button>
                </DivBody>
            </ChakraProvider>
        </>

    );
  }
  
  export default Addbody