import { DivBody } from './StylesAddbody';
import { ChakraProvider, Input, Button, useToast  } from '@chakra-ui/react'
import { useState } from 'react';
import { useCertStore } from '../../Store/Certioteca';

function Addbody() {
    const {addCert} = useCertStore(state => state)
    const [values, setValues] = useState();

    const toast = useToast()

    function handleSendButton(){
        values === undefined ? handleStatus(true) : Object.keys(values).length != 2 ? handleStatus(true) : handleStatus(false)
    }   

    function handleStatus(stats){
        if(stats){
            toast({
                description: "preencha todas as informações !",
                duration: 5000,
                status: 'info',
                isClosable: true,
                containerStyle: {
                    fontSize: '2rem'}
            })
        }
        
        else{
            if(values.titulo != '' && values.data != ''){
                addCert(values)

                toast({
                    description: "dados inseridos a biblioteca !",
                    duration: 5000,
                    status: 'success',
                    isClosable: true,
                    containerStyle: {
                        fontSize: '2rem'}
                })
            }
        
            else{
                toast({
                    description: "preencha todas as informações !",
                    duration: 5000,
                    status: 'info',
                    isClosable: true,
                    containerStyle: {
                        fontSize: '2rem'}
                })
            }
        }
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
                    <Input name='data' onChange={handleChangedValues}  variant='flushed' focusBorderColor='white' size="lg" type="date"/>
                    <p>Arquivo do certificado:</p>
                    <input name='arquivo'id='arquivo' type="file"/>
                    <Button onClick={handleSendButton}  colorScheme='blue' size='lg' variant='solid'>enviar</Button>
                </DivBody>
            </ChakraProvider>
        </>

    );
  }
  
  export default Addbody