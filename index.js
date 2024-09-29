const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

const posts = [
  {
    _id: "64f3b9f3e7f9c2d2a4e5c9a1",
    title: "Exploring the Mountains",
    description: "My journey through the Rocky Mountains was amazing!",
    userName: "JohnDoe",
  },
  {
    _id: "64f3b9f3e7f9c2d2a4e5c9a2",
    title: "Delicious Pasta Recipe",
    description: "Today, I tried a new pasta recipe, and it turned out great!",
    userName: "JaneSmith",
  },
  {
    _id: "64f3b9f3e7f9c2d2a4e5c9a3",
    title: "Mastering JavaScript Tips",
    description: "Sharing some key tips and tricks for mastering JavaScript.",
    userName: "CodeMaster",
  },
  {
    _id: "64f3b9f3e7f9c2d2a4e5c9a4",
    title: "Grand Canyon Adventure",
    description: "Pictures from my recent hike in the Grand Canyon.",
    userName: "NatureLover",
  },
  {
    _id: "64f3b9f3e7f9c2d2a4e5c9a5",
    title: "Top 10 Books to Read This Year",
    description: "A list of my favorite books this year!",
    userName: "BookWorm",
  },
  {
    _id: "64f3b9f3e7f9c2d2a4e5c9a6",
    title: "Achieving Fitness Goals",
    description: "Finally hit my target weight this month! Feeling proud.",
    userName: "FitnessFanatic",
  },
  {
    _id: "64f3b9f3e7f9c2d2a4e5c9a7",
    title: "Dreaming of Japan",
    description: "Next on my travel list: Japan!",
    userName: "TravelAddict",
  },
  {
    _id: "64f3b9f3e7f9c2d2a4e5c9a8",
    title: "React Learning Journey",
    description: "Started learning React. It’s challenging but rewarding!",
    userName: "FrontEndDev",
  },
  {
    _id: "64f3b9f3e7f9c2d2a4e5c9a9",
    title: "Low Light Photography Tips",
    description: "Sharing some of my best tips for shooting in low light.",
    userName: "PhotoGuru",
  },
  {
    _id: "64f3b9f3e7f9c2d2a4e5c9b0",
    title: "Seasonal Gardening Success",
    description: "My flowers are blooming beautifully this season!",
    userName: "GreenThumb",
  },
];

// get all posts request
app.get("/posts", (req, res) => {
  res.send(posts);
});

// get single posts

app.get("/posts/:postid", (req, res) => {
  const data = posts.find((data) => data._id === req.params.postid);
  res.json(data);
});

// update Posts

app.put("/posts/:id", (req, res) => {
  const result = posts.find((product) => product._id === req.params.id);
  if (result) {
    result.title = req.body.title || result.title;
    result.userName = req.body.title || result.title;
    result.description = req.body.description || result.description;
    res.json({ products });
  }
});


// delete post

app.delete("/posts/:id", (req, res) => {
  const deleteId = req.params.id;
  const result = posts.filter((data) => data._id !== deleteId);
  res.json(result);
});


// insert new post 

app.post('/posts', (req, res) => {
 const data = req.body
  res.send (data)
 
});



// listen--------
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
