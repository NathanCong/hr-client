export function getElementByClassName(className: string) {
  return document.querySelector(`.${className}`)
}

export function getElementWidth(element: Element | null) {
  if (!element) {
    return 0
  }
  const width = element.getBoundingClientRect().width
  const computedStyle = getComputedStyle(element)
  const marginLeft = parseFloat(computedStyle.marginLeft)
  const marginRight = parseFloat(computedStyle.marginRight)
  return width + marginLeft + marginRight
}

export function getElementHeight(element: Element | null) {
  if (!element) {
    return 0
  }
  const height = element.getBoundingClientRect().height
  const computedStyle = getComputedStyle(element)
  const marginTop = parseFloat(computedStyle.marginTop)
  const marginBottom = parseFloat(computedStyle.marginBottom)
  return height + marginTop + marginBottom
}
