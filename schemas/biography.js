export default {
  name: 'biography',
  title: 'Biography',
  type: 'document',
  fields: [
    {
      name: 'content',
      title: 'Biography Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'}
          ],
          marks: {
            decorators: [
              {title: 'Italic', value: 'em'}
            ]
          }
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'birthYear',
      title: 'Birth Year',
      type: 'number'
    },
    {
      name: 'birthPlace',
      title: 'Birth Place',
      type: 'string'
    },
    {
      name: 'currentLocation',
      title: 'Current Location',
      type: 'string'
    },
    {
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'year',
              title: 'Year',
              type: 'number'
            },
            {
              name: 'degree',
              title: 'Degree/Achievement',
              type: 'string'
            },
            {
              name: 'institution',
              title: 'Institution',
              type: 'string'
            }
          ]
        }
      ]
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Biography'
      }
    }
  }
}
