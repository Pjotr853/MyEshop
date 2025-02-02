### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


spúšťanie cez docker:
    docker build -t eshop_frontend .
    docker run -p 3000:3000 -d -v data_frontend:/app/data eshop_frontend

