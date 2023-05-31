import { createRef, useEffect } from "react"

export const useAutoFocus = () => {
  const inputRef = createRef<HTMLInputElement>()
  useEffect(() => {
    if(inputRef.current) {
      inputRef.current.focus()
    }
  })

  return inputRef
}
  
  