import { Box, Heading, Text, Button, Checkbox, Flex } from '@chakra-ui/react';

export const Task = (props) => {
    const { title, description, isCompleted, onEdit, onDelete, onCheck } = props

    return (
        <Box p={5} mx="auto" width="100%" borderWidth="1px" borderRadius="lg" mb="2">
            <Heading size="md" mb={2}>{title}</Heading>
            <Text mb={2}>{description}</Text>
            <Flex justify="space-between" align="center">
                <Button colorScheme="green" onClick={onEdit}>Edit</Button>
                <Button colorScheme="red" onClick={onDelete}>Delete</Button>
                <Checkbox size="lg" colorScheme="green" isChecked={isCompleted} onChange={onCheck}>Completed</Checkbox>
            </Flex>
        </Box>
    )
}