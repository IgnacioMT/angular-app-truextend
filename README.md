# Angular test project

## Requirements

- NodeJS + npm

## Global dev environment setup

- npm install nodemon -g
- npm install webpack -g

## Installation

- Install dependencies `npm install`

## Run dev environment

```
npm run dev
```

## App design

### Files Structure

```
 + src/
 | - assets/                Contains any extra js, css or images needed 
 | - common/                Contains core components/services that will be used by many 
 | - components/            Contains all app components
 | - layout/                Base layout + basic layout controller if needed 
 | - third-party/           All third party libraries included in the project
 | - app.config.js          Base & initial configuration such as Providers
 | - app.constants.js       Development & Production variables (Important! Does not contain any auth info)
 | - app.module.js          Main app module
 | - app.run.js             Run once when starting the app right after the injector is created
 | - index.html             Initial page
```

### Next steps

- Component Users: users.service.js should avoid duplicated requests (It should store previous success responses)   
- Component Users: users-grid & user-repos sub components could use a card component
- Error handling for HTTP 400 & 500 ranges: Implement an HTTP Request interceptor
- UI/UX design
- Virtual scrolling to improve rendering & scripting
- Create a dist task in webpack to extract the minimized build for production
