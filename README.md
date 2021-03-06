## Trendline:
Trendline is an app designed to help users visualize and track their investment portfolios. After registering a new account, users have the ability to
add all of the investments they have made to their portfolio. It is here that their data is visualized graphically and tabularly with financial data connected through the IEX Cloud API. They can also see news directly related to the stocks of their portfolio.

## Key Features:
#### Navbar:
- Ability to create a new account and login
- Ability to navigate between pages such as the home page and dashboard page
#### Home page:
- Animated Recharts graphic
- Search bar to search for information about an individual stock. Will redirect you to the search page when used
- Located within the bottom of the page are image and text combination that reveal information about our app
#### Search page:
- Note that authentication or authorization is not required the items below
- Ability to search for information for specific stocks. Searches will alter the search query in the URL.
- Ability to view the performance of an individual stock the user searches for
- Ability to view news pertaining to an individual stock
#### Dashboard page:
- Note this page can only be accessed when logged in
- Ability to add information about individual stocks the user owns
- Ability to add stock information through a CSV file
- Ability to sell or buy more of the stocks that are already in your portfolio
- Ability to completely remove an individual stock from your portfolio
- Ability to view the total return for all stocks held by a user
- Ability to view a performance graph pertaining to the stocks the user owns
- Ability to view a holdings breakdown by various categories
### General:
- Wep page will dynamically resize various components to best fit the window size.
- All alert messages are sent through a snackbar package
- User login session kept track of through JWT and Passport.js
- Route authentication based on JWT token

## Current Constraints:
- To render performance graph, please add stock(s) purchased on the day before yesterday (IEX Cloud's Chart API does not have data later than yesterday)
- Only US Equity Data wil be tracked due to the limitations of the API
- To limit the size of API messages, the performance graph only retrieves price data from **1 year** ending today. Issues will arise if you set the date for holdings to be anytime before 1 year from today.

## Setup:
    > sudo docker-compose build
    > sudo docker-compose up
    Travel to http://localhost:8080/ in your web browser
    Register a new account or use the sample account below. (Sample account contains data)
    
## Sample account:
    Email: test@sfu.ca
    Password: 123456

## Demo CSV Integration:
- Sample CSV file (sample_file.csv) is included and located at the root of this project. 
- To utilize it, click "Import CSV" from the Dashboard page and upload this file.

## Testing: 
- Tests are located in /app/tests
- Tests utilize the db container, which is mapped to port 9999 on the host machine. Ensure the db container is running and port 9999 is free.
- To run tests: 
```
cd app && npm run test 
```
- **NOTE:** there may be delay in retrieving symbol data from IEX, therefore the timeout is set to 1 minute. Also note that you may need to run npm install locally prior to running the tests.

## Notes
- If you ever get a "Error: Request failed with status code 400" in the dashboard page, this is beacuse our IEX account is getting too many requests. You probably just need to wait a couple of seconds before hitting refresh.
## Technology Stack:
- Express
- React
- Postgres
- Docker
- Nginx

## Notable dependencies:
- Material UI: A UI framework for React
- IEX Cloud: API for financial data
- Axios for HTTP requests
- Recharts for React charting and data visualization
- Knex for data migration and seeding
- Objection.js for an ORM
- Passport.hs for authentication
- Notistack for snackbars
- Helmet for security through HTTP headers
