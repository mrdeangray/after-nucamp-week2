/*
    *** Challenge 6 ***
    This is purely optional. It is basically practicing working 
    with React Components and organizing the code
    
    For this optional challenge, you will separate the challenge
    components that we have created from the page components 
    for an easier layout structure (as opposed to treating the 
    components as pages themselves)
    
    -I created 2 files: Archives.js and ArchiveSearch.js in the 
    ../pages folder.

    -Import the Challenge 4 code into the Archives.js file. You can
    either keep it as is OR you can remove the Header of "Archives"
    from the Challenge 4 and have it in the Archives.js file.
    
    -Do the same for the ArchiveSearch.js and Challenge 5 

    -Finally, create a new NavLink in the header called "active" that 
    will hold the results of the current active challenge. We would have
    to update the code to include whatever challenge it is (for example
    <Challenge6 />). 
        -Be sure to add 'Active.js' to the '../pages' folder and have it 
        include <Challenge6 /> for now.
    
*/

// You do not need to edit this code
const Challenge6 = () => {
    return (
      <div className='challenge6'>
          <h3>Challenge 6</h3>
         <p>You are on the Active.js page. This is challenge 6</p>
      </div>
    )
  }
  
  export default Challenge6