export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'category'},
        },
      ],
    },
    {
      name: "price",
      title: "Price",
      type: "array",
      of : [{type: 'number'}]
    },
    {
      name: "qty",
      title: "Qty",
      type: "number",
    },
    {
      name: "calories",
      title: "Calory",
      type: "string",
    },

    {
      name: "spicy",
      title: "Spicy",
      type: "boolean",
    },
    {
      name: "Veganfriendly",
      title: "Spicy",
      type: "boolean",
    },
    {
      name: "Glutenfree",
      title: "Glutenfree",
      type: "boolean",
    },
    {
      name: "Vegitarian",
      title: "Vegitarian",
      type: "boolean",
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },

  ],

  preview: {
    select: {
      title: 'title',
      manufactor: 'manufactor.title',
      media: 'defaultProductVariant.images[0]',
    },
  },
}
