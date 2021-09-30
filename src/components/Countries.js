import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Filter from "./Filter"

// 6d59c05ae741439aec8e20e527d4544a

export default function Countries() {
  const [countries, setCountries] = useState([])
  const [filtered, setFiltered] = useState([])
  const [searchInput, setSearchInput] = useState("")
  // Add loading state

  const fetchCountries = async () => {
    const res = await fetch(
      `http://api.countrylayer.com/v2/all?access_key=${process.env.REACT_APP_API_KEY}`,
      {
        method: "GET",
      }
    )
    const data = await res.json()
    setCountries(data)
    // console.log(data)
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  const searchCountries = (searchValue) => {
    setSearchInput(searchValue)

    if (searchInput) {
      const filteredCountries = countries.filter((country) =>
        Object.values(country)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
      setFiltered(filteredCountries)
    } else {
      setFiltered(countries)
    }
  }

  return (
    <>
      <Filter
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        searchCountries={searchCountries}
        region={countries.region}
      />
      {searchInput.length > 1 ? (
        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 p-5">
          {filtered.map(({ name, population, region, capital }) => (
            <Link to={`/${capital}`} key={name}>
              <article className="bg-white p-5 rounded shadow dark:bg-gray-800">
                {/* <img src={flag} alt={name} title={name} /> */}
                <h2 className="text-gray-900 dark:text-white font-bold text-2xl mb-5">
                  {name}
                </h2>
                <ul className="text-gray-900 dark:text-white">
                  <li>Capital: {capital}</li>
                  {/* Population doesn't show */}
                  <li>Population: {population}</li>
                  <li>Region: {region}</li>
                </ul>
              </article>
            </Link>
          ))}
        </section>
      ) : (
        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 p-5">
          {countries.map(({ name, population, region, capital }) => (
            <Link to={`/${capital}`} key={name}>
              <article className="bg-white p-5 rounded shadow dark:bg-gray-800">
                {/* <img src={flag} alt={name} title={name} /> */}
                <h2 className="text-gray-900 dark:text-white font-bold text-2xl mb-5">
                  {name}
                </h2>
                <ul className="text-gray-900 dark:text-white">
                  <li>Capital: {capital}</li>
                  {/* Population doesn't show */}
                  <li>Population: {population}</li>
                  <li>Region: {region}</li>
                </ul>
              </article>
            </Link>
          ))}
        </section>
      )}
    </>
  )
}
