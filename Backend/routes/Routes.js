const express = require("express")
const route = express.Router()
const bcrypt = require("bcrypt")
const cors = require("cors")
const mysql = require("mysql")
const jwt = require("jsonwebtoken")

process.env.SECRET_KEY = 'usersverify'

const conn = mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"",
    database:"insta"
})

conn.connect((err)=>{

    if(err) throw err
    console.log("db connected!!")

})

route.use(cors())


route.post("/logIn",(req,res)=>{

            console.log(req.body)
            conn.query("SELECT * FROM USERS WHERE email=?",req.body.email,(err,result)=>{

                if(err!=null){

                    res.status(500).json({error:"server error"})

                }else{

                    if(result.length!=1){

                        res.status(400).json({error:"wrong credentials"})

                    }else{

                       
                        if(bcrypt.compareSync(req.body.password, result[0].password)) {
                            let token = jwt.sign(
                                {
                                   data:req.body.email
                                }
                                , process.env.SECRET_KEY, {
                              expiresIn:15
                            })
                            res.send(token)
                        }else{

                            res.status(400).json({error:"wrong credentials"})

                        }


                    }


                }



         })      



})




route.post("/signUp",(req,res)=>{

    const users = {

      username:req.body.user,
      email:req.body.email, 
      password:req.body.password
    }

    conn.query(`SELECT * FROM users WHERE email=?`,req.body.email,(err,result)=>{

                   
          if(err!=null){

             res.status(500).json({error:0})

         }else{

              if(result.length !== 0){

                  res.status(200).json({error:1})

              }else{

                  conn.query(`SELECT * FROM users WHERE username=?`,req.body.user,(error,result2)=>{
                  
                  if(error!=null){

                      res.status(500).json({error:0})

                  }else{  

                          if(result2.length!=0){

                              res.status(200).json({error:2})


                          }else{

                              bcrypt.hash(req.body.password,10,(err,hash)=>{

                                  users.password = hash
                                  conn.query("INSERT INTO users SET ?",users,(err)=>{

                                      if(err){
                                          res.status(500).json({error:0})
                                      }else{
              
                                          res.status(200).json({success:2})
              
                                      }
      
                              })

                           })

                      }
                  
                  }
                 
              })
              
          }

      }

  })

})

route.post('/profile',(req,res)=>{

    
    
    try{

        let decoded = jwt.verify(req.body.token,process.env.SECRET_KEY)
        let email = decoded.data
        conn.query("SELECT * FROM users WHERE email=?",email,(err,result)=>{

            if(result.length === 1){

                res.status(200).json({success:1,email:email})

            }else{

                res.status(400).json({error:"Bad request"})

            }

        })

    }
    catch(err){

        if(err.name == "TokenExpiredError"){

            res.status(200).json({error:1})
        
        }

    }


})


route.post("/forgotPassword",(req,res)=>{

        conn.query("SELECT * FROM users WHERE email=?",req.body.email,(err,result)=>{

             
             if(err!=null){

                res.status(500).json({error:0})

             }else{

                    if(result.length === 0){

                        res.status(400).json({error:1})

                    }else{

                        res.status(200).json({success:1})


                    }


             }

        })

    })

route.post('/passwordChange',(req,res)=>{

        bcrypt.hash(req.body.password,10,(err,hash)=>{

               let data = [hash,req.body.email]
               conn.query("UPDATE users SET password=? WHERE email=? LIMIT 1",data,(error,result)=>{

                    if(error){

                        res.status(500).json({error:"server error"})

                    }else{

                        console.log(result.affectedRows)
                        res.status(200).json({success:1})

                    }


               })

        })



})    




module.exports = route