import { SelectFilesOfType } from "./types"

export const selectFilesOfType: SelectFilesOfType = async (accept, single) => {
  return new Promise((resolve) => {
    let result: File[] | undefined = undefined

    const handleFocus = () => {
      // detect "cancel" to resolve promise accordingly
      // focus event triggers prior to change event,
      // browsers seem to take ~250ms to trigger the change event
      setTimeout(() => {
        el.removeEventListener("change", handleChange)
        document.body.removeChild(el)
        window.removeEventListener("focus", handleFocus)

        resolve(result)
      }, 500)
    }

    const handleChange = (e: Event) => {
      const target = e.target as HTMLInputElement
      const files = target.files

      result = files?.length ? Array.from(files) : undefined
    }

    const el = document.createElement("input")

    el.type = "file"
    el.style.width = "0px"
    el.style.height = "0px"
    el.style.padding = "0px"
    el.style.margin = "0px"
    el.style.opacity = "0"

    if (accept) {
      el.accept = accept
    }

    el.multiple = single ? false : true

    window.addEventListener("focus", handleFocus)
    el.addEventListener("change", handleChange)
    document.body.appendChild(el)
    el.click()
  })
}
