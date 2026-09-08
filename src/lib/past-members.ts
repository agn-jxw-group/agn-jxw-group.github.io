import { getCollection, type CollectionEntry } from 'astro:content';

export type PastMember = CollectionEntry<'pastMembers'>;

export const pastRoleLabels = {
  postdoc: 'Postdoctoral researcher',
  phd: 'PhD',
  masters: "Master's",
  undergraduate: 'Undergraduate',
  visiting: 'Visiting scholar',
  other: 'Group member',
} as const;

const latestYear = (member: PastMember, field: 'endYear' | 'startYear') =>
  Math.max(...member.data.history.map((item) => item[field] ?? -Infinity));

const normalizedId = (id: string) => id.toLocaleLowerCase('en').replace(/[^a-z0-9]/g, '');

export async function getPastMembers() {
  const [pastMembers, currentMembers] = await Promise.all([
    getCollection('pastMembers'),
    getCollection('people'),
  ]);
  const seenPastIds = new Map<string, string>();
  for (const { id } of pastMembers) {
    const normalized = normalizedId(id);
    const existing = seenPastIds.get(normalized);
    if (existing) throw new Error(`Duplicate past-member IDs after normalization: ${existing}, ${id}`);
    seenPastIds.set(normalized, id);
  }
  const currentIds = new Set(currentMembers.map(({ id }) => normalizedId(id)));
  const duplicates = pastMembers.filter(({ id }) => currentIds.has(normalizedId(id))).map(({ id }) => id);
  if (duplicates.length) {
    throw new Error(`People cannot be both current and past members: ${duplicates.join(', ')}`);
  }

  return pastMembers.sort((a, b) =>
    latestYear(b, 'endYear') - latestYear(a, 'endYear') ||
    latestYear(b, 'startYear') - latestYear(a, 'startYear') ||
    a.id.localeCompare(b.id),
  );
}

export function getFeaturedPastMembers(members: PastMember[]) {
  const featured = members.filter(({ data }) => data.featured);
  if (featured.length !== 4) {
    throw new Error(`Exactly four past members must be featured on Team; found ${featured.length}`);
  }
  return featured;
}

export function memberInitials(name: string) {
  return name.split(/[\s-]+/).filter(Boolean).map((part) => part[0]).join('').slice(0, 3).toUpperCase();
}

export function historyYears(startYear?: number, endYear?: number) {
  if (!startYear && !endYear) return '';
  if (startYear && endYear && startYear === endYear) return `${startYear}`;
  if (startYear && endYear) return `${startYear}–${endYear}`;
  if (startYear) return `${startYear}–`;
  return `–${endYear}`;
}
