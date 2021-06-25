import { Center,Box ,Button} from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'
import React, { useEffect } from 'react'
import { useAuth } from '../lib/auth'
import { useRouter } from 'next/router'

const signin = ({}) => {
  const {auth,siginWithGoogle} = useAuth()
  const router = useRouter()
  useEffect(() => {
    if(auth){
      console.log(router.query);
      
      router.push((router.query.next as string) || '/')
    }

  }, [auth])
  return (
    <>
      <Center>
        <Box
          height='10rem'
          width='90%'
          bg='teal.100'
        >
          <Center height='10rem'>
            <Button leftIcon={<FcGoogle/>} onClick={()=>siginWithGoogle()}>
              Signin with Google
            </Button>
          </Center>
        </Box>
      </Center>
    </>
  )
}

export default signin
