import { Link } from 'react-router-dom'
import previousChallengeList from '../data/archives'

const Archives = () => {
  return (
    <div className='challenge4'>
      <h4>Previous Challenges</h4>
      <ul>
        {previousChallengeList.map((challenge)=>(
             
             <li><Link className='link' to={challenge.location}>
                {challenge.title}
                </Link>
                <span>{':  '}{challenge.description}</span>
            </li>
        ))}
      </ul>
      
    </div>
  )
}

export default Archives
