interface IlinksMapping {
  home: string
  about: string
  writing: string
  design: string
}

const linksMapping: IlinksMapping = {
  home: 'Home',
  about: 'About',
  writing: 'Writing',
  design: 'Design',
}

const activeLink = (path: string): string => {
  if (path === '/') return 'home'
  if (path === '/about') return 'about'
  if (path.includes('writing')) return 'writing'
  if (path.includes('design')) return 'design'

  return 'home'
}

const activePath = (link: string): string => {
  if (link === 'home') return '/'
  if (link === 'about') return '/about'
  if (link === 'writing') return '/writing'
  if (link === 'design') return '/design'

  return '/'
}

const numOfLinks = Object.keys(linksMapping).length

export { linksMapping, numOfLinks, activeLink, activePath }
export type { IlinksMapping }
