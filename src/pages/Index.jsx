import { Flex, IconButton, useDisclosure, Button, Heading } from '@chakra-ui/react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex direction="column" align="center" justify="center" p={8}>
      <Flex as="nav" justify="space-between" align="center" mb={8} p={4} bg="brand.700" color="white">
        <Heading size="lg">Todo App</Heading>
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          icon={isOpen ? <FaTimes /> : <FaBars />}
          aria-label="Open Menu"
        />
      </Flex>
      <Flex
        direction="column"
        w="100%"
        display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}
        pb={4}
        mt={{ base: 4, md: 0 }}
      >
        <Button as="a" href="#" variant="ghost" aria-label="Home" my={1} w="100%">Home</Button>
        <Button as="a" href="#" variant="ghost" aria-label="About" my={1} w="100%">About</Button>
        <Button as="a" href="#" variant="ghost" aria-label="Contact" my={1} w="100%">Contact</Button>
      </Flex>
    </Flex>
  );
};

export default Index;