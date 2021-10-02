import { useEffect } from "react"

export default function Filter({ searchCountries, searchInput, setCountries }) {
  // const [isLoading, setIsLoading] = useState(true)

  const region = [
    {
      name: "Africa",
    },
    {
      name: "Asia",
    },
    {
      name: "Oceania",
    },
    {
      name: "Americas",
    },
    {
      name: "Europe",
    },
  ]

  const fetchCountryByRegion = async (region) => {
    const res = await fetch(
      `http://api.countrylayer.com/v2/region/${region}?access_key=${process.env.REACT_APP_ACCESS_KEY}`
    )
    const data = await res.json()
    setCountries(data)
    console.log(data)
  }

  useEffect(() => {
    fetchCountryByRegion()

    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div className="flex items-start justify-between flex-col md:flex-row md:items-center md:justify-between 2xl:container 2xl:mx-auto">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search by country name"
          value={searchInput}
          onChange={(e) => searchCountries(e.target.value)}
          className="py-2 px-4 rounded shadow placeholder-gray-900 ml-5 lg:w-1/2 w-full"
          autoComplete="off"
        />
        <select
          name="select"
          id="select"
          className="py-2 px-4 rounded shadow ml-5 md:mr-5 md:ml-0"
          value={region.name}
          onChange={(e) => fetchCountryByRegion(e.target.value)}
        >
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
          <option value="Americas">Americas</option>
          <option value="Europe">Europe</option>
        </select>
      </div>
    </>
  )
}
