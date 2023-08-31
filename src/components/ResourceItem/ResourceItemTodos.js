import React, { useState } from 'react';
import { Card, ResourceList, ResourceItem, Stack, Button, Badge } from '@shopify/polaris';

const initialTodos = [
    {
        id: '1',
        title: 'How To Get Value From Wireframes',
        status: 'Done',
    },{
        id: '2',
        title: 'How To Get Value From Wireframes',
        status: 'Pending',
    },
];

function ResourceItemTodos() {
    const [selectedItems, setSelectedItems] = useState([]);
    const [todos, setTodos] = useState(initialTodos);

    const handleDeleteItem = (itemId) => {
        const updatedTodos = todos.filter(todo => todo.id !== itemId);
        setTodos(updatedTodos);
        setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== itemId));
    };

    const handleCompleteItem = (itemId) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === itemId && todo.status === "Pending") {
                return { ...todo, status: "Done" };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <Card>
            <ResourceList
                resourceName={{singular: 'todo', plural: 'todos'}}
                items={todos}
                selectedItems={selectedItems}
                onSelectionChange={setSelectedItems}
                selectable
                renderItem={(item) => {
                    const {id, title, status} = item;
                    return (
                        <ResourceItem
                            id={id}
                            accessibilityLabel={`View details for ${title}`}
                            name={title}
                            verticalAlignment="center"
                        >
                            <Stack alignment="center">
                                <Stack.Item fill>
                                    <h3>{title}</h3>
                                </Stack.Item>
                                <Stack.Item>
                                    <Badge status={status === "Done" ? "Success" : null}>{status}</Badge>
                                </Stack.Item>
                                <Stack.Item>
                                    <Button onClick={() => handleCompleteItem(id)}>Complete</Button>
                                </Stack.Item>
                                <Stack.Item>
                                    <Button destructive onClick={() => handleDeleteItem(id)}>
                                        Delete
                                    </Button>
                                </Stack.Item>
                            </Stack>
                        </ResourceItem>
                    );
                }}
            />
        </Card>
    );
}

export default ResourceItemTodos;
