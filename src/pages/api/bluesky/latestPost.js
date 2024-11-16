import agent from "../../../utils/bluesky";
import { CacheHeaders, ONE_HOUR } from "cdn-cache-control";

export const prerender = false;

export async function GET({ params }) {
    const id = params.id;

    const {data} = await agent.getAuthorFeed({
        actor: 'brob.dev'
    })

    const latestPost = data.feed[0].post
    const headers = new CacheHeaders().swr().ttl(ONE_HOUR);
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