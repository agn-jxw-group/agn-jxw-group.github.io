const base = import.meta.env.BASE_URL;

export const withBase = (path = '') => {
  const clean = path.replace(/^\//, '');
  return `${base}${clean}`.replace(/(?<!:)\/\/{2,}/g, '/');
};

export const researchStoryPath = (pillar: string, id: string) => `/research/${pillar}/${id}/`;

export const SITE = {
  name: 'Watching Cosmic Lighthouses',
  descriptor: 'AGN & X-ray Astrophysics Group',
  institution: 'University of Science and Technology of China',
  heroTitle: 'Watching Cosmic Lighthouses',
  heroLead:
    'lead a USTC team exploring how supermassive black holes accrete, flicker, and reshape their surroundings—and what lights up the X-ray sky.',
  repositoryName: 'agn-jxw-group.github.io',
  email: 'jxw@ustc.edu.cn',
} as const;

export const NAV = [
  { label: 'Research', href: '/research/', kicker: 'Explore our science' },
  { label: 'Team', href: '/team/', kicker: 'Meet the group' },
  { label: 'Facilities', href: '/facilities/', kicker: 'Eyes on the sky' },
  { label: 'Activity', href: '/activities/', kicker: 'Life together' },
  { label: 'Join us', href: '/join/', kicker: 'Start exploring' },
] as const;

export const CONTACTS = [
  {
    name: 'Jun-Xian Wang',
    teamId: 'wang-jun-xian',
    focus: 'AGN physics, X-ray astronomy, and multi-wavelength surveys',
    office: '理化大楼18-003',
    email: 'jxw@ustc.edu.cn',
    homepage: 'http://staff.ustc.edu.cn/~jxw/',
  },
  {
    name: 'Zhen-Yi Cai',
    teamId: 'cai-zhen-yi',
    focus: 'AGN variability, accretion physics, and galaxy evolution',
    office: '物质科研楼C1010-3',
    email: 'zcai@ustc.edu.cn',
    homepage: 'http://staff.ustc.edu.cn/~zcai/',
  },
  {
    name: 'Teng Liu',
    teamId: 'liu-teng',
    focus: 'X-ray surveys, active galaxies, galaxy clusters, and the hot Universe',
    office: '理化大楼17-012',
    email: 'liuteng@ustc.edu.cn',
    homepage: 'https://astro.ustc.edu.cn/2023/0926/c14965a613447/page.htm',
  },
] as const;

export const HERO_DESCRIPTION = `${CONTACTS.map(({ name }) => name).join(', ').replace(/, ([^,]*)$/, ', and $1')} ${SITE.heroLead}`;
