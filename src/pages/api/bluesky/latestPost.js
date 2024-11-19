import agent from "../../../utils/bluesky";
import { CacheHeaders } from "cdn-cache-control";

export const prerender = false;

export async function GET({ params }) {
    const {data} = await agent.getAuthorFeed({
        actor: 'brob.dev'
    })

    const latestPost = data.feed[0].post
    const headers = new CacheHeaders().ttl(300).swr(600);
    console.log('In latestPost.js')
    console.log(JSON.stringify(Object.fromEntries([...headers])))
    return new Response(
      JSON.stringify(latestPost), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          headers
        }
      }
    );
  }