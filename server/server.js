const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
    host: "localhost",
    user: "sqluser",
    password: "password",
    database: "crud"
})
 //check databse connection code
db.connect(function (err) {
    if (err) {
      console.log("Connection failed");
    } else {
      console.log("Connected");
    }
  });

  // Contact us page get orders methode
  app.get('/Orders', (req, res) => {
    const sql = "SELECT * FROM orders";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
  })

  // Customer page get  methode
  app.get('/Customers', (req, res) => {
    const sql = "SELECT * FROM user_login";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
  })

  // Delete customer based on ID
app.delete('/Customers/:id', (req, res) => {
    const customerId = req.params.id; // get the ID from the route parameter

    // SQL statement to delete a customer by ID 
    const sql = "DELETE FROM user_login WHERE id = ?";

    db.query(sql, [customerId], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message }); // return a 500 status with error message
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Customer not found" }); // return a 404 status if no rows were affected (i.e., no customer with that ID exists)
        }

        res.status(200).json({ message: "Customer deleted successfully" }); // if successful, return a 200 status with a success message
    });
});

  // Contactus Orders post methode
  app.post('/ContactUs', (req, res) =>{
    const sql = "INSERT INTO orders (`fullName`, `email`, `phone`, `services`, `messages`) VALUES (?)";
    const values =[
        req.body.fullName,
        req.body.email,
        req.body.phone,
        req.body.services,
        req.body.messages, 
    ]
    db.query(sql, [values], (err, data) => {
        if(err) return res.json(err);
        return res.json("created");
    })
  })

  // User registation  post methode
app.post('/Registration', (req, res) =>{
    const sql = "INSERT INTO user_login (`fname`, `lname`, `email`, `password`, `cpassword`) VALUES (?)";
    const values =[
        req.body.fname,
        req.body.lname,
        req.body.email,
        req.body.password,
        req.body.cpassword, 
    ]
    db.query(sql, [values], (err, data) => {
        if(err) return res.json(err);
        return res.json("created");
    })
  })

  // Admin login page
    app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE username = ? AND password = ?";
    


    db.query(sql, [req.body.username, req.body.password], (err, data) => {
        if(err) {
             return res.json({Status: "Error ", Error:"Error in running querey "});
        }
        if(data.length > 0) {
            return res.json({Status: "Success"})
        } else {
            return res.json({Status: "Error", Error:"Wrong Username or Password"})
        }
    })

})


// User login page
app.post('/Userlogin', (req, res) => {
    const sql = "SELECT * FROM user_login WHERE email = ? AND password = ?";
    


    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if(err) {
             return res.json({Status: "Error ", Error:"Error in running querey "});
        }
        if(data.length > 0) {
            return res.json({Status: "Success"})
        } else {
            return res.json({Status: "Error", Error:"Wrong Email or Password"})
        }
    })

})


app.listen(8081, () =>{
    console.log("Listening...");
})