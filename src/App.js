import { useEffect, useRef } from "react"

export const App = () => {
  const firstInputRef = useRef()
  const secondInputRef = useRef()

  useEffect(() => {
    console.log(firstInputRef)
    console.log(firstInputRef.current)
  })

  const setFocusOnFirstInput = event => {
    if (event.key === 'Tab') {
      event.preventDefault()
      firstInputRef.current.focus()
    }
  }

  const changeColorBorder = () => {
    secondInputRef.current.style.border = '2px solid red'
  }

  return (
    <form>
      <input type="text" ref={firstInputRef} autoFocus />
      <input type="text" ref={secondInputRef} />
      <input type="text" onKeyDown={setFocusOnFirstInput} />
      <button type="button" onClick={changeColorBorder}>Change color border for second input</button>
    </form>
  )
}