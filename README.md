# Coding Challenge: Github Api - React

A minimalist react website to track a Github user's repos. 

# Description & Requirements
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
- react, redux/react-redux, react-router-dom, react-helmet 

### Dependencies:

# Process
1. Create repo based on react redux template created previously
2. Set up file structure 
3. Add components 
4. GithubAPI fetch using axios 

# Bugs 
- [x] Error handing not working for unavailable usernames
- [x] Dark mode not smooth on change - shows original color for a split second 

# Wins & Challenges 

## Wins 
- Theme toggle 
- API fetch works!

## Challenges 
- Dark mode with no flicker - kind of works. We used react-helmet to run javascript which sets css variables before the app renders so it renders with correct color
- Best way to make multiple requests to the github API as data is stored at many urls
- Hitting the API rate limit and having to implement auth for fetch
