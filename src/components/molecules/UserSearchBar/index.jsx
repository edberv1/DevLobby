import React from 'react'
import './UserSearchBar.scss'
import { Link } from 'react-router-dom'

const UserSearchBar = ({ placeholder, data }) => {
  return (
    <div className='userSearchBar'>
      <div className='searchInput'>
        <input type='text' placeholder={placeholder} />
        <div className='searchIcon'>
          <svg
            className='icon'
            width='24'
            height='24'
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
      </div>

      <div className='searchResult'>
        {data.map((value, key) => {
          return (
            <div key={key}>
              <p>{value.firstName}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UserSearchBar
