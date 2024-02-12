import { Link } from 'react-router-dom'

export default function SeeMoreButton () {
  return (
    <div className='seeMoreButton'>
      <Link to='#' className='btn'>
        <button className='see-btn'>See More</button>
      </Link>
    </div>
  )
}
