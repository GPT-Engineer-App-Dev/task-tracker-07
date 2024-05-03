import { Box, Flex, Heading, Input, Button, List, ListItem, ListIcon, IconButton, useToast } from '@chakra-ui/react';
import { FaTrash, FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const toast = useToast();

  const addTask = () => {
    if (input.trim() === '') {
      toast({
        title: 'No task entered.',
        status: 'warning',
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setTasks([...tasks, { id: Date.now(), text: input, isCompleted: false }]);
    setInput('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task));
  };

  return (
    <Box p={8}>
      <Flex as="nav" justify="space-between" align="center" mb={8}>
        <Heading size="lg">Todo App</Heading>
      </Flex>
      <Flex direction="column" align="center" justify="center">
        <Input
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          size="lg"
          mb={4}
        />
        <Button onClick={addTask} colorScheme="blue" size="lg">Add Task</Button>
        <List spacing={3} mt={6} w="full" maxW="md">
          {tasks.map(task => (
            <ListItem key={task.id} display="flex" justifyContent="space-between" alignItems="center">
              <Flex align="center">
                <ListIcon as={FaCheckCircle} color={task.isCompleted ? 'green.500' : 'gray.500'} cursor="pointer" onClick={() => toggleTaskCompletion(task.id)} />
                <Box as="span" ml={2} textDecoration={task.isCompleted ? 'line-through' : 'none'}>
                  {task.text}
                </Box>
              </Flex>
              <IconButton
                icon={<FaTrash />}
                onClick={() => deleteTask(task.id)}
                colorScheme="red"
                aria-label="Delete task"
              />
            </ListItem>
          ))}
        </List>
      </Flex>
    </Box>
  );
};

export default Index;