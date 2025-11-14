import { Residence, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#/' },
  { name: 'Products', href: '#/products' },
  { name: 'Siteplan', href: '#/siteplan' },
  { name: 'Contact', href: '#/contact' },
];

export const RESIDENCES: Residence[] = [
  {
    name: 'Beverly 65',
    type: 'Type 65/55',
    bedrooms: 2,
    bathrooms: 1,
    area: 55,
    imageUrls: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585152915-d208bec867a1?q=80&w=1972&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2070&auto=format&fit=crop',
    ],
  },
  {
    name: 'The Hampton',
    type: 'Type 120/180',
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    imageUrls: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070&auto=format&fit=crop',
    ],
  },
  {
    name: 'The Aspen',
    type: 'Type 90/150',
    bedrooms: 2,
    bathrooms: 2,
    area: 90,
    imageUrls: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=2071&auto=format&fit=crop',
    ],
  },
];
