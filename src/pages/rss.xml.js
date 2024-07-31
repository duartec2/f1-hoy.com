import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import config from '@config/config.json';

export async function GET(context) {
  const posts = await getCollection('blog');
  console.log(posts);
  return rss({
    title: config.site.title,
    description: config.site.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      author: post.data.author,
      source: {
        title: post.data.source,
        url: post.data.sourceUrl
      },
      enclosure: {
        url: post.data.heroImage,
        length: 0,
        type: 'image/png'
      },
      //...post.data,
      link: `/blog/${post.slug}/`,
    })),
  });
}
