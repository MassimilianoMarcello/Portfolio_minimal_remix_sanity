import {defineCliConfig} from 'sanity/cli'
import {projectId, dataset} from './sanity.config'

export default defineCliConfig({
  api: {
    projectId: 'qpv8frw8',
    dataset: 'production',
  },
})
