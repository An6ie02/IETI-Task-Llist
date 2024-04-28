import { Box, Heading, FormControl, FormLabel, Input, Button, Text, Center } from '@chakra-ui/react';

import React, { useState } from "react";

export const TaskForm = (props) => {
    const { addOrEditTask, isEditing } = props;
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [formValidation, setFormValidation] = useState({
        title: undefined,
        description: ""
    });

    const handleTitleChange = (event) => {
        const value = event.target.value;
        setFormValidation({ ...formValidation, title: value.length < 3 ? "TITLE IS TOO SHORT" : "" });
        setTitle(value);
    };

    const handleDescriptionChange = (event) => {
        const value = event.target.value;
        setDescription(value);
    }

    const isFormValid = Object.keys(formValidation).every(key => formValidation[key] === "");

    return (
        <Box mb="25px" p={5} mx="auto" maxWidth="500px" borderWidth="1px" borderRadius="lg">
            <Heading mb={5} fontSize='3xl' bgGradient="linear(to-l, green.300, green.500)" bgClip="text" textAlign="center">{isEditing ? "Edit Task" : "Add Task"}</Heading>
            <form onSubmit={addOrEditTask}>
                <FormControl id="title" isInvalid={!!formValidation.title} mb={3}>
                    <FormLabel>Title</FormLabel>
                    <Input type="text" onChange={handleTitleChange} />
                    {formValidation.title && <Text color="red.500" fontWeight="bold">{formValidation.title}</Text>}
                </FormControl>
                <FormControl id="description" mb={3}>
                    <FormLabel>Description</FormLabel>
                    <Input type="text" onChange={handleDescriptionChange} />
                </FormControl>
                <Center>
                    <Button type="submit" colorScheme="green" isDisabled={!isFormValid} >
                        {isEditing ? "Update Task" : "Add Task"}
                    </Button>
                </Center>
            </form>
        </Box>
    )
}