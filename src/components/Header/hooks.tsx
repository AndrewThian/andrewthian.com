import { NextRouter, useRouter } from 'next/dist/client/router'
import { activeLink } from './constants'

type useActiveLinkType = {
  router: NextRouter
  activeLink: string
}

const useActiveLink = (): useActiveLinkType => {
  const router = useRouter()

  return { router, activeLink: activeLink(router.pathname) }
}

export { useActiveLink }
