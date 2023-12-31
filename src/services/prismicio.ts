import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'
import sm from '../../slicemachine.config.json'

export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint)

export function createClient({
  previewData,
  req,
  ...config
}: prismicNext.CreateClientConfig = {}) {
  const client = prismic.createClient('ricardo-carnaval', config)

  prismicNext.enableAutoPreviews({ client, previewData, req })

  return client
}
