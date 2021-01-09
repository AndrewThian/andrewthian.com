const on = (
  target: EventTarget,
  eventName: string,
  listener: EventListener | EventListenerObject | null,
  options?: boolean | AddEventListenerOptions | undefined
): void => target.addEventListener(eventName, listener, options)

const off = (
  target: EventTarget,
  eventName: string,
  listener: EventListener | EventListenerObject | null,
  options?: boolean | AddEventListenerOptions | undefined
): void => target.removeEventListener(eventName, listener, options)

export { on, off }
