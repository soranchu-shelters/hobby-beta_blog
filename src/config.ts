import type { NavItems } from './types'

export const NAV_ITEMS: NavItems = {
  top: {
    path: '/',
    title: 'Top',
  },
  techBlog: {
    path: 'https://webneko.dev',
    title: 'Tech Blog',
  },
}

export type SiteNavItem = keyof typeof NAV_ITEMS

export const SITE = {}
