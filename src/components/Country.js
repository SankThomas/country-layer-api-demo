import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

export default function Country() {
  const [country, setCountry] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { capital } = useParams()

  useEffect(() => {
    const fetchCountryData = async () => {
      const res = await fetch(
        `http://api.countrylayer.com/v2/capital/${capital}?access_key=${process.env.REACT_APP_ACCESS_KEY}`
      )
      const data = await res.json()
      setCountry(data)
      setIsLoading(false)
    }

    fetchCountryData()
  }, [capital])

  return (
    <>
      {isLoading ? (
        <h1 className="flex items-center justify-center h-screen text-4xl uppercase tracking-widest text-gray-900 dark:text-white lg:text-7xl font-bold">
          Loading...
        </h1>
      ) : (
        <section className="pt-32 xl:max-w-7xl xl:mx-auto px-5 xl:px-0 h-screen">
          <Link
            to="/"
            className="bg-blue-500 pt-2 pb-3 pl-4 pr-6 rounded shadow text-white fobt-bold tracking-wide animate-pulse"
          >
            &larr; Back
          </Link>
          {country.map(({ name, capital, region, topLevelDomain }) => (
            <article key={name}>
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mt-10 mb-5">
                {name},{" "}
                <span className="font-light text-2xl lg:text-4xl">
                  {capital}
                </span>
              </h2>
              <ul>
                <li className="text-gray-900 dark:text-white lg:text-lg">
                  Region: {region}
                </li>
                <li className="text-gray-900 dark:text-white lg:text-lg">
                  Top Level Domain: {topLevelDomain}
                </li>
              </ul>
            </article>
          ))}
        </section>
      )}
    </>
  )
}
