import { useState } from "react"
import { FaMoon, FaSun } from "react-icons/fa"

export default function Toggle() {
  const [darkMode, setDarkMode] = useState(false)

  const changeTheme = () => {
    document.body.classList.toggle("dark")
    setDarkMode(!darkMode)
  }

  return (
    <>
      <button onClick={changeTheme}>
        {darkMode ? (
          <FaSun className="text-yellow-500" />
        ) : (
          <FaMoon className="text-gray-900" />
        )}
      </button>
    </>
  )
}
