import { EditIcon, QuestionIcon, ViewIcon, MoonIcon } from '@chakra-ui/icons';
import { Box, Icon, List, ListItem, Text, useColorMode, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Menu = () => {
    const { toggleColorMode } = useColorMode()

    return (
        <Box as="nav">
            <List display="flex" flexDirection="row" gap="2">
                <ListItem>
                    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                        <Icon as={ViewIcon} boxSize={5} mr="2" color='green.500' />
                        <Text bgGradient="linear(to-l, green.300, green.500)" bgClip="text" fontWeight="bold" fontSize='lg'>Home</Text>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="/about" style={{ display: 'flex', alignItems: 'center' }}>
                        <Icon as={QuestionIcon} boxSize={5} mr="2" color='green.500' />
                        <Text bgGradient="linear(to-l, green.300, green.500)" bgClip="text" fontWeight="bold" fontSize='lg'>About Us</Text>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="/tasks" style={{ display: 'flex', alignItems: 'center' }}>
                        <Icon as={EditIcon} boxSize={5} mr="2" color='green.500' />
                        <Text bgGradient="linear(to-l, green.300, green.500)" bgClip="text" fontWeight="bold" fontSize='lg'>Tasks</Text>
                    </Link>
                </ListItem>
                <ListItem>
                    <Flex align="center">
                        <Icon as={MoonIcon} boxSize={5} mr="2" color='green.500' />
                        <Text cursor="pointer" onClick={toggleColorMode} bgGradient="linear(to-l, green.300, green.500)" bgClip="text" fontWeight="bold" fontSize='lg'>
                            Change Theme
                        </Text>
                    </Flex>
                </ListItem>
            </List>
        </Box>
    )
}