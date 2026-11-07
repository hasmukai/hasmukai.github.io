import { getCollection } from 'astro:content';

export async function getPublishedPosts() {
  return (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf() || a.id.localeCompare(b.id));
}

export function postUrl(id: string) {
  return `/blog/${id.split('/').map(encodeURIComponent).join('/')}/`;
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Asia/Tokyo',
  }).format(date);
}
