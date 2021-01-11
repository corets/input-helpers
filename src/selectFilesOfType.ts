import { SelectFilesOfType } from "./types"

export const selectFilesOfType: SelectFilesOfType = async (accept) => {
  return new Promise((resolve) => {
    const handleChange = (e) => {
      el.removeEventListener("change", handleChange)
      document.body.removeChild(el)

      const target = e.target as HTMLInputElement
      const files = target.files
      const result = files?.length ? Array.from(files) : undefined

      resolve(result)
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

    el.addEventListener("change", handleChange)
    document.body.appendChild(el)
    el.click()
  })
}
