import {Heading, Text, VStack, Image } from '@chakra-ui/react';

export default function HomePage() {
    return (
        <VStack spacing={3} align="center">
            <Heading as="h1" size="xl" lineHeight="2" bgGradient="linear(to-l, green.300, green.500)" bgClip="text">
                Welcome to the Task Manager (ToDo App)
            </Heading>
            <Text fontSize="xl">
                Here you can manage your tasks
            </Text>
            <Image src="src\assets\tasks.gif" alt="animation"  />
            <Text fontSize="lg" color="gray.500">
                Autor: Angie Natalia Mojica
            </Text>
        </VStack>
    )
}