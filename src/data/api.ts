import GhostContentAPI from '@tryghost/content-api'

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'https://cms.andrewthian.com',
  key: '6d74703f2c98e27635e124c867',
  version: 'v3',
})

export default api
