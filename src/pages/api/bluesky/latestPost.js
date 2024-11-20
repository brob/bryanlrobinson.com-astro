import agent from "../../../utils/bluesky";
import { CacheHeaders } from "cdn-cache-control";

export const prerender = false;

export async function GET({ params }) {
    const {data} = await agent.getAuthorFeed({
        actor: 'brob.dev'
    })

    const latestPost = data.feed[0].post
    const headers = new CacheHeaders().ttl(300);
    console.log('In latestPost.js')
    console.log(headers)
    console.log(JSON.stringify(Object.fromEntries([...headers])))
    const theResponse = new Response(
        JSON.stringify(latestPost), {
            status: 200,
            headers
        }
    );
    console.log(theResponse.headers)
    return theResponse
  }