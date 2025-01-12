import { SchemaTypeDefinition } from "sanity";

const user:SchemaTypeDefinition = {
    name: 'user2',
    type: 'document',
    title: 'User2',
    fields: [
        {
            name: 'productName',
            type: 'string',
            title: 'product Name'
        }, 
        {
            name: 'Price',
            type: 'number',
            title: 'Price'
        }, 
        {
            name: 'Category',
            type: 'string',
            title: 'Category'
        },
         {
            name: 'ProductImage',
            type: 'image',
            title: 'Product Image'
        }, 
    ]
}

export default user
