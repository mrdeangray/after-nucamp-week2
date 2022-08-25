// use data from archives.js in the data folder
// -create an archive page for storing the previous challenges
// -the archive should have a link to the pages the challnges
// (the data in the archives.js file and currently have to 
// be manually added)/ ex: /challenge1
// -the archive pages should show the title of the challenge 
// (ex: Challenge 1), with a description (again, manually added to 
// the archives.js)
// -remember to add the make sure the links are all active and working
// -add a link to the archive page to the header
// format page with indentation (using App.css)


import previousChallengeList from '../data/archives.js'
import { Link } from 'react-router-dom'



const Archive = () => {


  return (
    <div className="challenge4">
      <h4>Previous Challenges</h4>

      <ul>
        {
          previousChallengeList.map((challenge, idx) => (
            <li key={idx}>
              <Link to={challenge.location}>{challenge.title}:</Link>
              {` `}{challenge.description}

            </li>
          ))
        }
      </ul>

    </div>
  )
}

export default Archive