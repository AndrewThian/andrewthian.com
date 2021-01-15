import { NextRouter, useRouter } from 'next/dist/client/router'
import { activeLink, activePath } from './constants'

type useActiveURLType = {
  router: NextRouter
  activeLink: string
  activePath: string
}

const useActiveURL = (): useActiveURLType => {
  const router = useRouter()

  return {
    router,
    activeLink: activeLink(router.pathname),
    activePath: activePath(activeLink(router.pathname)),
  }
}

export { useActiveURL }
