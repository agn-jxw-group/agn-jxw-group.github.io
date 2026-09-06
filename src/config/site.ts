const base = import.meta.env.BASE_URL;

export const withBase = (path = '') => {
  const clean = path.replace(/^\//, '');
  return `${base}${clean}`.replace(/(?<!:)\/\/{2,}/g, '/');
};

export const researchStoryPath = (pillar: string, id: string) => `/research/${pillar}/${id}/`;

export const SITE = {
  name: 'USTC Active Universe',
  descriptor: 'AGN & X-ray Astrophysics Group',
  institution: 'University of Science and Technology of China',
  heroTitle: 'How Black Holes Light Up the Universe',
  heroSubtitle:
    'We study how supermassive black holes feed, flicker, and reshape their surroundings—and use the X-ray sky to uncover the most energetic objects in the cosmos.',
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
    focus: 'AGN physics, X-ray astronomy, and multi-wavelength surveys',
    office: '理化大楼18-003',
    email: 'jxw@ustc.edu.cn',
    homepage: 'https://faculty.ustc.edu.cn/wangjunxian/en/index.htm',
  },
  {
    name: 'Zhen-Yi Cai',
    focus: 'AGN variability, accretion physics, and galaxy evolution',
    office: '物质科研楼C1010-3',
    email: 'zcai@ustc.edu.cn',
    homepage: 'https://staff.ustc.edu.cn/~zcai/',
  },
  {
    name: 'Teng Liu',
    focus: 'X-ray surveys, active galaxies, galaxy clusters, and the hot Universe',
    office: '理化大楼17-012',
    email: 'liuteng@ustc.edu.cn',
    homepage: 'https://en.physics.ustc.edu.cn/2024/1211/c37700a664802/page.htm',
  },
] as const;
