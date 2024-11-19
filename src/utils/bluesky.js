import { AtpAgent } from '@atproto/api'

const agent = new AtpAgent({
  service: 'https://bsky.social'
})
console.log(import.meta.env.BLUESKY_PASSWORD)
await agent.login({
    identifier: 'brob.dev',
    password: import.meta.env.BLUESKY_PASSWORD
  })

export default agent