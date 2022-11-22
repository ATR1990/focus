import { useEffect, useRef } from "react"

export const App = () => {
  const firstInputRef = useRef()

  useEffect(() => {
    console.log(firstInputRef)
    console.log(firstInputRef.current)
  })

  const setFocusOnFirstInput = event => {
    if (event.key === 'Tab') {
      event.preventDefault()
      firstInputRef.current.focus()
    }
  };

  return (
    <form>
      <input type="text" ref={firstInputRef} />
      <input type="text" />
      <input type="text" onKeyDown={setFocusOnFirstInput} />
    </form>
  )
}