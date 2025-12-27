export function scrolltoView(id: string) {
  const targetElement = document.getElementById(id)
  if (targetElement) {
    targetElement.scrollIntoView();
  }
}
