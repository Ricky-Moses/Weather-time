import React from 'react'
import FormInput from './Search_City/FormInput'
import DisplayCityTemp from './Search_City/DisplayCityTemp'

const SearchCity = () => {
  return (
    <>
        <section className="weather_search-city">
            <FormInput />
            <DisplayCityTemp />
        </section>
    </>
  )
}

export default SearchCity