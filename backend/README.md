spúšťanie backendu: 
    npm run dev
backend beží na porte: 
    5000


spúšťanie cez docker:
    docker build -t eshop_backend .
    docker run -p 5000:5000 -d --rm -v data_backend:/app/data  eshop_backend