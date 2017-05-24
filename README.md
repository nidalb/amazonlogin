npm install
node test.js


curl -X POST \
  http://localhost:3000/ \
  -H 'content-type: application/json' \
  -d '{"username":"email", "password":"password"}'
