import {Card, ResourceList, ResourceItem, Stack, Button, Badge} from '@shopify/polaris';
import {useState} from 'react';

const items = [
    {
        id: '6',
        url: 'posts/6',
        title: 'How To Get Value From Wireframes',
        author: 'Jonathan Mangrove',
    },{
        id: '6',
        url: 'posts/6',
        title: 'How To Get Value From Wireframes',
        author: 'Jonathan Mangrove',
    },{
        id: '6',
        url: 'posts/6',
        title: 'How To Get Value From Wireframes',
        author: 'Jonathan Mangrove',
    },{
        id: '6',
        url: 'posts/6',
        title: 'How To Get Value From Wireframes',
        author: 'Jonathan Mangrove',
    },
];

function ResourceItemTodos() {
    const [selectedItems, setSelectedItems] = useState([]);

    return (
        <Card>
            <ResourceList
                resourceName={{singular: 'blog post', plural: 'blog posts'}}
                items={items}
                selectedItems={selectedItems}
                onSelectionChange={setSelectedItems}
                selectable
                renderItem={(item) => {
                    const {id, url, title, author} = item;
                    const authorMarkup = author ? <div>by {author}</div> : null;
                    return (
                        <ResourceItem
                            id={id}
                            url={url}
                            accessibilityLabel={`View details for ${title}`}
                            name={title}
                            verticalAlignment="center"
                        >
                            <Stack alignment="center">
                                <Stack.Item fill>
                                    <h3>{title}</h3>
                                    {authorMarkup}
                                </Stack.Item>
                                <Stack.Item>
                                    <Badge status="info">Status</Badge>
                                </Stack.Item>
                                <Stack.Item>
                                    <Button>Complete</Button>
                                </Stack.Item>
                                <Stack.Item>
                                    <Button destructive >
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