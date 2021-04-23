# Coding Challenge: Github Api - React

A minimalist react website to track any Github user's repos. 

![Github API](https://user-images.githubusercontent.com/58271566/115594211-63207900-a2cd-11eb-9fd1-1efa2070d8d9.gif)

# Description & Task Requirements

A search will return all of a Github user's repos with info on each repo's forks, stargazers (favourites) and number of open issues. For each repo, a link to each repo's collaborators will open up on new page.

- [x] Your app should make use of React  
- [x] Your repo tracker should have an input for users to give their GitHub username  
- [x] After submitting their username, use the GitHub API to retrieve that user's list of repos  
- [x] When selecting a repo, a User should be shown some data about that repo eg. issue count, stargazers, forks etc.  

# Installation & usage

### For our app to be run on your local machine:

Clone this repo and navigate to the root directory of this repo.

Get authentication from Github:   
- Visit https://github.com/settings/tokens  
- Generate New Token   
- Paste your new token into `src/actions/index.js`  
  `var options = {headers: {"Authorization": "token <<your token here>>"}};`

To start up our react app:  
`npm install`   
`npm run dev`   

It should automatically open up on your browser at 0.0.0.0:8080  

To see our test suite:  
`npn run test`  

# Technologies
react, redux/react-redux, react-router-dom, react-helmet, react-icons

### Dependencies:

# Process
1. Create repo based on react redux template created previously
2. Set up file structure 
3. Add components 
4. GithubAPI fetch using axios 
5. Add test suite
6. Styling and alignment 
7. Deploy to Netlify!

# Bugs 
- [x] Error handing not working for unavailable usernames
- [x] Dark mode not smooth on change - shows original color for a split second 
- [x] activeClassName not working

# Wins & Challenges 

## Wins 
- Theme toggle 
- API fetch works!

## Challenges 
- Dark mode with no flicker - kind of works. We used react-helmet to run javascript which sets css variables before the app renders so it renders with correct color
- Best way to make multiple requests to the github API as data is stored at many urls
- Hitting the API rate limit and having to implement auth for fetch
