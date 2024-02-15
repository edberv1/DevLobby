import React, { useState } from 'react'
import './SearchBar.scss'

const SearchBar = ({ placeholder, data }) => {
  const [filter, setFilter] = useState([])
  const [query, setQuery] = useState('')

  const handleChange = e => {
    setQuery(e.target.value.toLowerCase())

    const queryResult = data.filter(value => {
      return (
        value.username.toLowerCase().includes(query) ||
        value.firstName.toLowerCase().includes(query) ||
        value.lastName.toLowerCase().includes(query)
      )
    })
    if (query.length < 2) {
      setFilter([])
    } else {
      setFilter(queryResult)
    }
  }

  return (
    <div className='userSearchBar'>
      <div className='searchInput'>
        <input
          type='text'
          value={query}
          placeholder={placeholder}
          onChange={handleChange}
        />
        <div className='iconContainer'>
          {query.length === 0 ? (
            <div className='searchIcon'>
              <svg
                className='icon'
                width='18'
                height='18'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0' />
                <path d='M21 21l-6 -6' />
              </svg>
            </div>
          ) : (
            <div onClick={() => setQuery('')} className='closeButton'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='icon icon-tabler icon-tabler-x'
                width='18'
                height='18'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M18 6l-12 12' />
                <path d='M6 6l12 12' />
              </svg>
            </div>
          )}
        </div>
      </div>

      {filter.length !== 0 && (
        <div className='searchResult'>
          {filter.slice(0, 10).map((value, key) => {
            return (
              <div key={key}>
                <p>{`${value.firstName} (@${value.username})`}</p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default SearchBar
