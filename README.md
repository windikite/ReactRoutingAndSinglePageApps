My 45th assignment! Once more we use the Marvel API, and even reuse/modify some components. This version of the character viewer site leverages routes to manage a single page application and route the user properly. It has a home page, a route not found page, and the pages related to viewing character details. 

Assignment 1  
1. Step 1 was to install the react router.  
2. Next, I created the home, browse characters, character details, and comics components. Comics can be left placeholder for now, but the other ones were imported and tweaked from the previous projects to get working.  
3. Finally, I set up the routes so that Home, BrowseCharacters, and CharacterDetails are accessible via different paths.  

Assignment 2  
1. NavLinks were set up within the nav bar to show the current active link.  
2. I modified the BrowseCharacters component to properly allow for linking the user to the CharacterDetails component while also passing the character ID via the url. Once on the page, the character ID is used for the api call to dynamically populate the page.  
3. Lastly, there is a NotFound component just in case a user visits an undefined path.  

To run this site, install the dependencies and provide an API key in a file named Keys.jsx in the src folder. Using this format will work well: 
 
export const apiKey = "?apikey=YOURKEY"