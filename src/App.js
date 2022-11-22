import { useEffect, useRef } from "react"

export const App = () => {
  const firstInputRef = useRef()
  const secondInputRef = useRef()

  useEffect(() => {
    console.log(firstInputRef)
    console.log(firstInputRef.current)
    let secondInput = document.querySelector('#secondInput')
    secondInput.placeholder = 'Введите ваше имя'
  }, [])

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
    <form name="main">
      <input type="text" ref={firstInputRef} autoFocus />
      <input type="text" ref={secondInputRef} id="secondInput" />
      <input type="text" onKeyDown={setFocusOnFirstInput} />
      <button type="button" onClick={changeColorBorder}>Change color border for second input</button>
    </form>
  )
}