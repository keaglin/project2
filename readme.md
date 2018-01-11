# WDI20 Project 2
### Johnson and Jones Family Book
An application that aggregates and displays family and ancestry data.
#### Example:

TweetWorld 

An application used to filter data form Twitter based on user preference, built with React, Redux, JavaScript, and CSS.

## Project Status
This project is still being actively developed. 
- Need a place to display an image (or carousel of images)
- Better form and view separation
- Form data verification
- 

## Tech/Resources Used
#### Stack
- Node  
- ExpressJS  
- MongoDB  
- Handlebars  
Data modeled with MongooseJS  
Deployed to Heroku

#### Resources
- codrops  
- Materialize  
- whenpresident (from following in class)  
- 

## Project Screen Shots

#### Example:   

[ PRETEND SCREEN SHOT IS HERE ]

[ PRETEND OTHER SCREEN SHOT IS HERE ]

## Installation and Setup Instructions

#### Example:  

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3001`  

## Reflection

  - What was the context for this project? (ie: was this a side project? was this for Turing? was this for an experiment?)
  - What did you set out to build?
  - Why was this project challenging and therefore a really good learning experience?
  - What were some unexpected obstacles?
  - What tools did you use to implement this project?
      - This might seem obvious because you are IN this codebase, but to all other humans now is the time to talk about why you chose webpack instead of create react app, or D3, or vanilla JS instead of a framework etc. Brag about your choices and justify them here.  

This was a project built over 3 days to wrap up Unit 2 of my Web Development Immersive cohort at General Assembly DC. I built it to demonstrate knowledge of backend engineering techniques learned during Unit 2.  
I initially set out to build an API with a separate frontend. The project was inspired by my wife's idea to make and bind a physical book. I thought a website would make the information more accessible and easier to disseminate.

#### Example:  

This was a 3 week long project built during my third module at Turing School of Software and Design. Project goals included using technologies learned up until this point and familiarizing myself with documentation for new features.  

Originally I wanted to build an application that allowed users to pull data from the Twitter API based on what they were interested in, such as 'most tagged users'. I started this process by using the `create-react-app` boilerplate, then adding `react-router-4.0` and `redux`.  

One of the main challenges I ran into was Authentication. This lead me to spend a few days on a research spike into OAuth, Auth0, and two-factor authentication using Firebase or other third parties. Due to project time constraints, I had to table authentication and focus more on data visualization from parts of the API that weren't restricted to authenticated users.

At the end of the day, the technologies implemented in this project are React, React-Router 4.0, Redux, LoDash, D3, and a significant amount of VanillaJS, JSX, and CSS. I chose to use the `create-react-app` boilerplate to minimize initial setup and invest more time in diving into weird technological rabbit holes. In the next iteration I plan on handrolling a `webpack.config.js` file to more fully understand the build process.