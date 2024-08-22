import {createClient, type ClientConfig} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const config: ClientConfig = {
  projectId: 'nro3ill2',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-09-21',
}
const client = createClient(config)
const builder = imageUrlBuilder(client)
const urlFor = (source: any) => {
  return builder.image(source)
}

export {client, urlFor}