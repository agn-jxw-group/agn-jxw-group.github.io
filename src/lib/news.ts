import { getCollection } from 'astro:content';

export async function getPublishedNews() {
  const entries = (await getCollection('news', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const pinned = entries.filter((entry) => entry.data.pinned);

  if (pinned.length !== 1) {
    throw new Error(`News must contain exactly one published pinned entry; found ${pinned.length}.`);
  }

  return {
    entries,
    pinned: pinned[0],
    recent: entries.filter((entry) => !entry.data.pinned).slice(0, 4),
  };
}
