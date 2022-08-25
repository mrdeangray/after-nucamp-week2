/*
    *** Challenge 5 ***
    For this challenge, you will create a search feature
    for the archives (based on a keyword list)
    
    When the user clicks on a search-by-keyword button, it 
    should return a list of all the keywords in all the 
    challenges. The list should only one of each keyword (no
    duplicates).  
        *** note that there is now a keywords array
        in the ./data/archives.js file for this purpose. There is 
        no need to search the actual code ***
        ---> optional: alphabetize the results so it's easier
        for the user to find the keyword they are looking for


    The keywords (or phrases) displayed on the screen 
    should be clickable. Then, when the user clicks on 
    the keyword, it should then compile a list of every 
    challenge that has that keyword.

    Update App.css as needed. Feel free to have fun with 
    the look of the results

*/


import { useState } from "react";
import { Link } from 'react-router-dom'

import previousChallengeList from '../data/archives.js'

const Challenge5 = () => {
    const [keywordList, setKeywordList] = useState('')
    const [searchResults, setSearchResults] = useState('')


    const handleGetSearchResults = (keyword) => {

        setSearchResults(
            <div>
                <br /><br />
                <h4>Challenges that focus on <span style={{ color: "blue" }}>{keyword}</span>:</h4>
                <ul>
                    {
                        previousChallengeList.filter(result => result.keywords.includes(keyword)).map((challenge, idx) => (
                            <li key={idx}>
                                <Link to={challenge.location}>{challenge.title}:</Link>
                                {` `}{challenge.description}

                            </li>
                        ))
                    }
                </ul>
            </div >)

    }

    const handleGetKeywords = () => {

        const keywords = previousChallengeList.reduce((acc, curr) => {
            curr.keywords.forEach(keywd => {
                if (!acc.includes(keywd)) {
                    acc.push(keywd)
                }
            })
            return acc
        }, [])


        setKeywordList(
            <ul className="keywordList" >
                {
                    keywords.sort().map((keyword, idx) => (
                        <li key={idx}
                            style={{ display: "inline" }}>
                            <span className="keywords" onClick={() => handleGetSearchResults(keyword)} > {keyword}    </span>
                            {`   `}

                        </li>
                    ))
                }
            </ul >
        )
    }



    return (
        <div className='challenge5'>

            <button onClick={handleGetKeywords}>Search By Keyword</button>
            {keywordList}
            {searchResults}

        </div>
    )
}

export default Challenge5