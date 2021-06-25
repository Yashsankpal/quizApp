import React, { useState } from 'react';
import { Box,useDisclosure, Divider, Flex, Heading, Link , Text, Button, Spacer,ButtonGroup, HStack,Modal,ModalBody,ModalOverlay,ModalContent,ModalFooter,ModalCloseButton,ModalHeader} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { CloseIcon } from '@chakra-ui/icons';
import { useAuth } from '../lib/auth';


const Navbar = ({props}) => {
  const router = useRouter();
  const [show, setshow] = useState(false)
  // const toggleMenu = () =>setshow(!show)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { auth, signOut} = useAuth()
  return (
    <>
      <Flex
        align='center'
        justify='space-between'
        m={4}
        as='nav'
        bg='gray.100'
        p={6}
      >
          <Box p='2'>
            <Heading size="lg">{router.pathname}</Heading>
          </Box>
          <Spacer/>
          {
            auth ?
            <Box as={HStack} spacing='1rem'>
              <Box as={Link} fontSize='2xl' onClick={()=>router.push('/new')}>Create New</Box>
              {/* <Box as={Link} fontSize='2xl' onClick={()=>router.push(`/edit/:id`)}>Edit</Box>              */}
              <Button fontSize="1.5rem" height='4rem' onClick={()=>signOut()}>
                <Box as={Text} fontSize='2xl'>Logout</Box>
              </Button>
            </Box>
            :
            <Box>
              <Box as={HStack} spacing='1rem'>
                <Box as={Link} fontSize='2xl' onClick={()=>router.push('/sandbox')}>SandBox</Box>
                <Box as={ButtonGroup} variant="outline" isAttached onClick={()=>router.push('/signin')}>
                  <Button p={8} fontSize="1.5rem" height='4rem'>
                      Sign Up
                    </Button>
                    <Spacer/>
                    <Button p={8} fontSize="1.5rem" height='4rem'>
                      Login
                    </Button>
                </Box>
              </Box>
            </Box>
          }
    
      {/* <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Lorem count={2} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
      </Flex>
    </>
  );
};

export default Navbar
