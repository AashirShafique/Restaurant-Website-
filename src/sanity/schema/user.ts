// import { Rule } from "@sanity/types"; // Import Rule type

// export default {
//   name: "user",
//   title: "User",
//   type: "document",
//   fields: [
//     {
//       name: "productName",
//       title: "Product Name",
//       type: "string",
//       validation: (Rule: Rule) => Rule.required().min(1).max(100),
//     },
//     {
//       name: "price",
//       title: "Price",
//       type: "number",
//       validation: (Rule: Rule) => Rule.required().min(0),
//     },
//     {
//       name: "productImage",
//       title: "Product Image",
//       type: "image",
//       options: {
//       hotspot: true, // Enables the hotspot feature for image cropping
//       },
//     },
//     {
//       name: "description",
//       title: "Description",
//       type: "text",
//       validation: (Rule: Rule) => Rule.required().min(10).max(500),
//     },
//     {
//       name: "category",
//       title: "Category",
//       type: "reference",
//       to: [{ type: "category" }],
//     },
//   ],
// };
import { SchemaTypeDefinition } from "sanity";

const user:SchemaTypeDefinition = {
    name: 'user',
    type: 'document',
    title: 'User',
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