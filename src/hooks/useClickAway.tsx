import { RefObject, useEffect } from 'react'
import { on, off } from '~/utils/DOM'

const defaultEvents = ['mousedown', 'touchstart']

function useClickAway(
  ref: RefObject<HTMLElement | null>,
  onClickAway: (event: Event) => void,
  events: string[] = defaultEvents
): void {
  useEffect(() => {
    const handler = (event: Event): void => {
      const el = ref?.current ?? false
      el && !el.contains(event.target as Node) && onClickAway(event)
    }

    for (const eventName of events) {
      on(document, eventName, handler)
    }

    return () => {
      for (const eventName of events) {
        off(document, eventName, handler)
      }
    }
  }, [events, onClickAway, ref])
}

export default useClickAway
