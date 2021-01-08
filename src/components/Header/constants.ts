interface IlinksMapping {
  home: string
  about: string
  writing: string
  design: string
}

const linksMapping: IlinksMapping = {
  home: 'Home',
  about: 'About',
  writing: 'Tech Ramblings',
  design: 'Splashes of paint',
}

const numOfLinks = Object.keys(linksMapping).length

export { linksMapping, numOfLinks }
export type { IlinksMapping }
