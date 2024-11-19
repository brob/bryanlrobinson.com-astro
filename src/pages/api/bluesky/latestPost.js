import agent from "../../../utils/bluesky";
import { CacheHeaders } from "cdn-cache-control";

export const prerender = false;

export async function GET({ params }) {
    const id = params.id;

    const {data} = await agent.getAuthorFeed({
        actor: 'brob.dev'
    })

    const latestPost = data.feed[0].post
  
    return new Response(
      JSON.stringify(latestPost), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        }
      }
    );
  }