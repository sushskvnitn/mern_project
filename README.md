
 ##   Middleware functions: 
      functions that have access to the request object (req),
      the response object (res), and the next function in the application's
      request-response cycle.
      The next function is a function in the Express router which, when invoked,
      executes the middleware succeeding the current middleware.


 ## connection to database :
          create a new clustor on mongo db atlas and then copy the config link there then 
           require mongoose in your app and after requiring  mongoose do following :: 
           (here DB is the connection link with username and passwords)

           mongoose
           .connect(DB, {
             useNewURLParser: true,
             useUnifiedTopology: true,
           }) //after connection we get a response 
           .then(() => {
             console.log("connection established to mongo");
           })
           .catch((err) => {
             console.log("no connection established to mongo");
           });


 ## dotenv:this npm package is used to secure your passwords and data , create a dotenv folder by
           type null > config.env to create dotenv file in terminal and add this file in .gitignore


##  app.use(express.json()); => if we get any json data give it t0 us as a json object 


## password secure :
        password securing will be done using bcrypt js by hashing the password insted of plain password.
        here we are doing it in userschema.js ,
## jwt :
        JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server.
         Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure
         that the claims cannot be altered after the token is issued.
         that the claims cannot be altered after the token is issued.
         that the claims cannot be altered after the token is issued.
         verification through entire application after login is done bye jwt token
         * methods: *
          1: Generate JWT Token and Stored it in Database.
          2: How to Stored the Token in Cookies
          3: Get Token from Cookie and Verify the User

        jwt.sign(payload, secret OrPrivate Key, [options, callback])
        - is syntax  used to sign a JWT token 