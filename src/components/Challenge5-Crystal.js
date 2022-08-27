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

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import archives from '../data/archives'

const Challenge5 = () => {
    const [keywordsList, setKeywordsList] = useState([]);
    const [display, setDisplay] = useState(<div></div>);


    useEffect(() => {
        setDisplay(<ul>{keywordsList.map((keyword, index) => (
            <button
                className='keyword-link'
                key={index}
                onClick={() => findChallengesWithKeyword(keyword)}
            >
                {keyword}
            </button>
        ))}</ul>) 
        
    }, [keywordsList])

    const findChallengesWithKeyword = (keyword) => {

        const filteredArchives = archives.reduce((acc, curr) => {

            if (curr.keywords.includes(keyword)) {
                acc.push(curr)
            }
            return acc;
        }, [])
        setDisplay(
            <div>
                <br />
                <h5>Challenges that focus on{' '}<span style={{ color: '#11109b' }}>{keyword}</span>:</h5>
                <ul>
                    {filteredArchives.map((challenge) => (

                        <li><Link className='link' to={challenge.location}>
                            {challenge.title}
                        </Link>
                            <span>{':  '}{challenge.description}</span>
                        </li>
                    ))}
                </ul>
            </div>)
    }
    const searchByKeyword = () => {
        const list = archives.reduce((acc, curr) => {
            curr.keywords.forEach(keyword => {
                if (!acc.includes(keyword)) {
                    acc.push(keyword)
                }
            })
            return acc;
        }, [])

        setKeywordsList(
            list.sort((a, b) => {
                if (a < b) {
                    return -1;
                }
                else {
                    return 1;
                }
            })
        );
       

    }

    return (
        <div className='challenge5'>
            <h3>Archive Search</h3>
            <button onClick={searchByKeyword}>Search By Keyword</button>
            {display}
        </div>
    )
}

export default Challenge5