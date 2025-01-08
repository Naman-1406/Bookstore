const express=require('express')
const { default: mongoose } = require('mongoose')
const Book = require('./model/Bookmodel')
const app=express()
const PORT = 7000
require ('dotenv').config()


app.use(express.json());
app.use(express.urlencoded({extended:true}))

  const BookRouter = require('./routers/BookRouter')

 app.use('/api/Book',BookRouter) 


app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.send('home page')
})

app.get('/about',(req,res)=>{
    res.send('about page')
})

    //  mongoose.connect("mongodb+srv://kalalnaman02:abcdefgh1234567@cluster0.6kb3z.mongodb.net/books")
    mongoose.connect("mongodb+srv://kalalnaman02:abcdefgh1234567@cluster0.6kb3z.mongodb.net/rnw")
   
.then(()=>{console.log("db connected 👍...")})
.catch((err)=>{console.log(err)})

app.listen(PORT,()=>console.log(`port number is http://localhost:${PORT}`))



// const express = require('express');
// const mongoose = require('mongoose');
// const Book = require('./model/Bookmodel');abcdefgh1234567
// const app = express();
// const PORT = 8000;
// require('dotenv').config();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// const BookRouter = require('./routers/BookRouter');
// app.use('/api/Book', BookRouter);

// app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//   res.send('home page');
// });

// app.get('/about', (req, res) => {
//   res.send('about page');
// });

// mongoose.connect(
// //   "mongodb+srv://kalalnaman02:abcdefgh1234567@cluster0.6kb3z.mongodb.net/books?retryWrites=true&w=majority",
// "mongodb+srv://kalalnaman02:abcdefgh1234567@cluster0.6kb3z.mongodb.net/books?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// )
//   .then(() => {
//     console.log("DB connected 👍...");
//   })
//   .catch((err) => {
//     console.error("DB connection error:", err);
//   });

// app.listen(PORT, () =>
//   console.log(`Server running on http://localhost:${PORT}`)
// );
