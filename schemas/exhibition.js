export default {
  name: 'exhibition',
  title: 'Exhibition',
  type: 'document',
  fields: [
    {
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Exhibition Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'type',
      title: 'Exhibition Type',
      type: 'string',
      options: {
        list: [
          {title: 'Solo Exhibition', value: 'solo'},
          {title: 'Group Exhibition', value: 'group'},
          {title: 'Installation', value: 'installation'}
        ]
      }
    },
    {
      name: 'venue',
      title: 'Venue',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'City, Country'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    }
  ],
  orderings: [
    {
      title: 'Year, Newest',
      name: 'yearDesc',
      by: [{field: 'year', direction: 'desc'}]
    }
  ],
  preview: {
    select: {
      title: 'title',
      year: 'year',
      venue: 'venue'
    },
    prepare({title, year, venue}) {
      return {
        title: `${year} - ${title}`,
        subtitle: venue
      }
    }
  }
}
