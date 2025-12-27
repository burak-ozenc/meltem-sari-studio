export default {
  name: 'press',
  title: 'Press',
  type: 'document',
  fields: [
    {
      name: 'publication',
      title: 'Publication Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Article Title',
      type: 'string'
    },
    {
      name: 'url',
      title: 'Article URL',
      type: 'url',
      validation: Rule => Rule.required()
    },
    {
      name: 'date',
      title: 'Publication Date',
      type: 'date'
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first'
    }
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}]
    }
  ],
  preview: {
    select: {
      title: 'publication',
      subtitle: 'title'
    }
  }
}
