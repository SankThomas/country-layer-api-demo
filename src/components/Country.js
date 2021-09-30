import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

export default function Country() {
  const [country, setCountry] = useState([])
  const { capital } = useParams()

  useEffect(() => {
    const fetchCountryData = async () => {
      const res = await fetch(
        `http://api.countrylayer.com/v2/capital/${capital}?access_key=${process.env.REACT_APP_API_KEY}`
      )
      const data = await res.json()
      setCountry(data)
      console.log(data)
    }

    fetchCountryData()
  }, [capital])

  return (
    <>
      <section className="p-5 lg:max-w-4xl lg:mx-auto">
        <Link to="/" className="btn">
          &larr; Back
        </Link>
        {country.map(
          ({ name, capital, topLevelDomain, population, region }) => (
            <article key={name} className="mt-10">
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                {name},{" "}
                <span className="text-2xl lg:text-4xl font-light">
                  {capital}
                </span>
              </h2>
              <ul className="mt-10">
                <li className="text-gray-900 dark:text-white">
                  Population: {population}
                </li>
                <li className="text-gray-900 dark:text-white">
                  Region: {region}
                </li>
                <li className="text-gray-900 dark:text-white">
                  Top Level Domain: {topLevelDomain}
                </li>
              </ul>
            </article>
          )
        )}
      </section>
    </>
  )
}
