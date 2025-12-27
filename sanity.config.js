import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Meltem Sari Portfolio',

  projectId: process.env.PROJECT_ID,
  dataset: process.env.DATASETUP,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
