import {createClient} from '@sanity/client'
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
    projectId: 'myf3wh95',
    dataset: 'production',
    useCdn: true, // `false` if you want to ensure fresh data
    apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})


export async function getPosts() {
    const posts = await client.fetch(`*[_type == "blog"] | order(publishDate desc){
  ...,
  "featuredImg": featuredImg.asset->url,
  "date": publishDate,
  "slug": slug.current,
  body[]{
    ..., 
    asset->{
      ...,
      "_key": _id
    }
  }
}`)
   const dataPosts = posts.map(post => ({data: {...post, date: new Date(post.date)}, ...post}))
    return dataPosts
}

