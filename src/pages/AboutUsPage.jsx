import { Box, Heading, Text, VStack, List, ListItem, Grid, ListIcon } from '@chakra-ui/react';
import { AddIcon, EditIcon, CloseIcon, CheckIcon } from '@chakra-ui/icons';

export default function AboutUsPage() {
    return (
        <VStack spacing={3} align="center">
            <Heading as="h2" size="xl" bgGradient="linear(to-l, green.300, green.500)" bgClip="text" mb="50">
                About Us
            </Heading>
            <Grid templateColumns="repeat(2, 1fr)" gap={6} width="90%">
                <Box backgroundColor="green.200" padding="20px" borderRadius="md">
                    <Heading as="h3" size="lg" bgGradient="linear(to-l, green.500, green.800)" bgClip="text" mb="10px">
                        Information
                    </Heading>
                    <Text fontSize="xl" textAlign="justify">
                        The organization of tasks is one of the most important activities in people's daily
                        lives, since it allows them to keep track of the activities that must be carried out
                        in a given time. On many occasions, people forget the tasks they must perform, so it
                        is necessary to have a tool that allows you to keep track of pending tasks, know which
                        are completed and which are not, and be able to edit or delete tasks that are no longer
                        complete. They are necessary. This is the ToDo App tool that I offer to users, a web
                        application that will allow them to keep track of the tasks they must perform.
                    </Text>
                </Box>
                <Box backgroundColor="green.200" padding="20px" borderRadius="md">
                    <Heading as="h3" size="lg" bgGradient="linear(to-l, green.500, green.800)" bgClip="text" mb="10px">
                        Features
                    </Heading>
                    <List spacing={2} styleType="none">
                        <ListItem fontSize="xl">
                            <ListIcon as={AddIcon} color="green.500" />
                            <b>Task creation</b>: Users can add tasks to the list, each task must have a title, description and a status of completed or pending.
                        </ListItem>
                        <ListItem fontSize="xl">
                            <ListIcon as={EditIcon} color="green.500" />
                            <b>Task editing</b>: Users can modify the title and description of an existing task.
                        </ListItem>
                        <ListItem fontSize="xl">
                            <ListIcon as={CloseIcon} color="green.500" />
                            <b>Task deletion</b>: Users can remove a task from the list.
                        </ListItem>
                        <ListItem fontSize="xl">
                            <ListIcon as={CheckIcon} color="green.500" />
                            <b>Task completion</b>: Users can mark a task as completed
                        </ListItem>
                    </List>
                </Box>
            </Grid>
        </VStack>
    )
}