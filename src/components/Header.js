import Toggle from "./Toggle"

export default function Header() {
  return (
    <>
      <header className="p-5 shadow flex items-center justify-between bg-white dark:bg-gray-900">
        <div>
          <h1 className="font-bold text-4xl dark:text-white">
            Where in the world?
          </h1>
        </div>

        <div>
          <Toggle />
        </div>
      </header>
    </>
  )
}
