import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
const blog = await getCollection('blog');

  return rss({
    // `<title>` field in output xml
    title: "Bryan Robinson's Blog",
    // `<description>` field in output xml
    description: "Hello, World! I'm a designer and developer with over a decade of experience building experiences and leading teams on the web. I write and record about HTML, CSS, the power of static sites and good, clean design.",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    
    items: blog.reverse().map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        // Compute RSS link from post `slug`
        // This example assumes all posts are rendered as `/blog/[slug]` routes
        link: `/blog/${post.slug}/`,
    })),
     
  });
}