import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon, TriangleDownIcon } from '@chakra-ui/icons';
import {useSelector} from "react-redux";
import Company_logo from "./assets/company-logo.png"

const Links = ['Dashboard', 'My Surveys', 'Plan & Pricings'];


export default function PvtNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const loginState= useSelector((store)=>store.loginManager);
  console.log(loginState)

  return (
    <>
      <Box bg={useColorModeValue('gray.700', 'gray.900')} color={'white'} fontWeight={'bold'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            bg={'gray'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
                <Image h={'60px'} w={'100px'} src={Company_logo} alt={'logo'}/>
            </Box>
            <HStack
              as={'nav'}
              spacing={8}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <Link key={link}>{link}</Link>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'} >
            <Button fontWeight={'bold'}
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={6}
              leftIcon={<AddIcon />}>
              Create Survey
            </Button>
            <Menu >
              <MenuButton
              fontWeight={'bold'}
                as={Button}
                rightIcon={<TriangleDownIcon />}
                color={'white'}
                variant={'link'}
                cursor={'pointer'}
                minW={5}>
                {loginState.user.email}
              </MenuButton>
              <MenuList color={'black'} >
                <MenuItem fontWeight={'bold'}>My Account</MenuItem>
                <MenuDivider />
                <MenuItem fontWeight={'bold'}>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <Link key={link}>{link}</Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
