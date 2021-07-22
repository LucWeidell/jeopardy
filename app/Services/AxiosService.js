export const jeapordyApi = axios.create({
  baseURL: 'https://jservice.io/api/random',
  timeout: 10000
})
export const sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herouapp.com/api/players',
  timeout: 10000
})