//creating an express application

const express = require('express');
const morgan = require('morgan');
const app = express(); //this initializes express package for us
const blogRoutes = require('./routes/blogRoutes');
//connection to mongoDB
const dbUri = 'mongodb+srv://denscholar:test1234@nodedb.4e1sf.mongodb.net/NodeDB?retryWrites=true&w=majority'
const mongoose = require('mongoose');
//then connect with the database using mongoose
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true }).then((result) => app.listen(3000)).catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs');

//middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); //this takes all the data from the form and pass it to the url
app.use(morgan('dev'));

// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog2',
//         snipet: 'About my new blog',
//         body: 'More about my new blog'
//     });
//     blog.save().then((result) => {
//         res.send(result)
//     }).catch((err) => {
//         console.log(err);
//     })
// })

// // getting all the blogs

// app.get('/all-blogs', (req, res) => {
//     Blog.find().then((result) =>{
//         res.send(result)
//     }).catch((err) => console.log(err));
// });

// //finding a single blog
// app.get('/single-blog', (req, res) =>{
//     Blog.findById('616dd3950f4d4abff3721683').then((result)=>{
//         res.send(result);
//     }).catch((err) => console.log(err));
// })

// listening for a get request
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });

});

//blog route
app.use(blogRoutes)


// app.get('/404', (req, res) => {
//     res.render('404', { title: '404' });
// });

//the position of this always matters 
app.use((req, res) => {
    res.status(404).render('404', { title: '404' })

})
// app.get('about-us', (req, res) =>{
//     res.redirect('/about');
// })


