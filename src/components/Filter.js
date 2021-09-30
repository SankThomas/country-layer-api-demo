import { useState, useEffect } from "react"

export default function Filter({ searchInput, searchCountries, region }) {
  const [filterRegion, setFilterRegion] = useState([])

  useEffect(() => {
    const filterByRegion = async () => {
      const res = await fetch(
        `https://api.countrylayer.com/v2/region/${region}?access_key=${process.env.REACT_APP_API_KEY}`
      )
      const data = res.json()
      setFilterRegion(data)
      console.log(data)
    }

    filterByRegion()
  }, [region])

  return (
    <>
      <div>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country"
          value={searchInput}
          onChange={(e) => searchCountries(e.target.value)}
          className="py-2 px-4 rounded shadow m-5"
          autoComplete="off"
        />

        <select name="select" id="select">
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
          <option value="Americas">Americas</option>
        </select>
      </div>
    </>
  )
}
