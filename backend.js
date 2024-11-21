import express from 'express';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import mysql from 'mysql2';
import cors from 'cors';


const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


async function createUser(username, password1) {
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password1, 10);

    // Your database query
    const query = INSERT INTO users (username, password) VALUES (?, ?);
    const values = [username, hashedPassword];

    // Example of executing query
    const connection = await mysql.createConnection({ 
       host: 'localhost',
      user: 'root',
      password: 'sammed@1008', // Replace with your MySQL password
      database: 'userlogin',});
    await connection.execute(query, values);
    console.log('User created successfully');
  } catch (err) {
    console.error('Error:', err.message);
  }
}


app.post('/register',  (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required!' });
  }
console.log(username +" "+password)
createUser(username,password)


});

// Start the server
app.listen(PORT, () => {
  console.log(Server is running on http://localhost:${PORT});
});