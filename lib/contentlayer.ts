// Static laws data (replaces Contentlayer)
export interface Law {
  title: string
  order: number
  slug: string
  updatedAt: string
  url: string
}

export interface Page {
  title: string
  slug: string
  updatedAt?: string
  path: string
}

// Static laws list
export const allLaws: Law[] = [
  {
    title: 'Law 1 — Trust, but Test',
    order: 1,
    slug: 'trust-but-test',
    updatedAt: '2025-11-12',
    url: '/laws/trust-but-test',
  },
  {
    title: 'Law 2 — The Dual Lens',
    order: 2,
    slug: 'the-dual-lens',
    updatedAt: '2025-11-12',
    url: '/laws/the-dual-lens',
  },
  {
    title: 'Law 3 — The Inner Compass',
    order: 3,
    slug: 'the-inner-compass',
    updatedAt: '2025-11-12',
    url: '/laws/the-inner-compass',
  },
  {
    title: 'Law 4 — The Learning Loop',
    order: 4,
    slug: 'the-learning-loop',
    updatedAt: '2025-11-12',
    url: '/laws/the-learning-loop',
  },
  {
    title: 'Law 5 — See Beyond the Obvious',
    order: 5,
    slug: 'see-beyond-the-obvious',
    updatedAt: '2025-11-12',
    url: '/laws/see-beyond-the-obvious',
  },
  {
    title: 'Law 6 — Future Sense',
    order: 6,
    slug: 'future-sense',
    updatedAt: '2025-11-12',
    url: '/laws/future-sense',
  },
  {
    title: 'Law 7 — The Integrity Test',
    order: 7,
    slug: 'the-integrity-test',
    updatedAt: '2025-11-12',
    url: '/laws/the-integrity-test',
  },
]

// Static pages list (empty for now, add if needed)
export const allPages: Page[] = []

export const allDocuments = [...allLaws, ...allPages] as (Law | Page)[]
