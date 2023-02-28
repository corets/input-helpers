import { SelectFileOfType } from "./types"
import { selectFilesOfType } from "./selectFilesOfType"

export const selectFileOfType: SelectFileOfType = async (accept) => {
  const files = await selectFilesOfType(accept, true)
  const result = files ? files[0] : undefined

  return result
}
