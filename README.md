# Overview
- React Framework: Used Vite with TypeScript.
- CSS Framework: Used Tailwind CSS.
- State Management: Used Jotai.
- Routing: Used React Router DOM for handling navigation.
- Charts: Used ApexCharts for displaying data in graphs/charts.

# Folder Structure:
# atom
    - Stores state management logic that can be accessed across all components.
# components
    - Contains reusable components such as app layout, cards, topbar, footer, etc.
# pages
    - Contains all the page components.
# router
    - Manages the navigation logic.
# services
    - Handles all API-related logic.
# utils
    - Contains helper methods, such as chart options for ApexCharts.

# How to run the app.
1. Add .env files
2. Replace the following .env data with your own information:

# ALPHAVANTAGE CREDENTIALS
VITE_API_KEY=''
# SAMPLE API KEY
FOABCW3SEFCFRK7D

# If you want to generate a free API key, visit this URL:
https://www.alphavantage.co/support/#api-key

3. After you've done that, run the following commands in the terminal:

~ cd front-end
~ npm install
~ npm run dev

4. To try the demo, visit the following URL:

 # 4.1 https://stock-prices-ozqq.onrender.com/

# Other important notes
5. Since I'm using the free Alpha Vantage API, I can only make 25 requests per day, so some features may not work.
6. You can use "demo" as the value of VITE_API_KEY if you exceed your API request limit.
7. For the search function, only 'tesco' works with the demo API.

# You can learn more about the Alpha Vantage API at this URL:
https://www.alphavantage.co/documentation/




