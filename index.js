import express from 'express';
const app = express();

// Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.static('public')); // Serve CSS files from public folder
app.set('view engine', 'ejs');

// In-memory blog storage (since no database)
let blogs = [
    { 
        id: 1, 
        title: "Welcome to BlogBahadur", 
        content: "Welcome to BlogBahadur, your modern blog management platform! This is your first blog post, and we're excited to have you here.\n\nBlogBahadur makes it incredibly easy to create, manage, and organize your blog posts with a beautiful, modern interface. Whether you're a seasoned blogger or just starting out, our intuitive design will help you focus on what matters most - your content.\n\nFeatures you'll love:\n• Clean, minimalist design that puts your content first\n• Easy-to-use blog creation and editing tools\n• Responsive design that looks great on all devices\n• Fast and lightweight - no bloated features\n\nStart exploring by creating your own blog posts using the form above. Happy blogging!" 
    },
    { 
        id: 2, 
        title: "Getting Started with Express & EJS", 
        content: "Building dynamic web applications has never been easier with the powerful combination of Express.js and EJS templating engine.\n\nExpress.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It's designed for building web applications and APIs quickly and efficiently.\n\nEJS (Embedded JavaScript) is a simple templating language that lets you generate HTML markup with plain JavaScript. It's fast, has no dependencies, and makes it easy to render dynamic content.\n\nKey benefits of this stack:\n• Server-side rendering for better SEO\n• Dynamic content generation\n• Clean separation of logic and presentation\n• Easy to learn and implement\n• Great performance\n\nThis combination provides a solid foundation for building modern web applications with clean, maintainable code." 
    },
    { 
        id: 3, 
        title: "Modern CSS Design Principles", 
        content: "Creating beautiful, modern web interfaces requires understanding current design trends and best practices. Let's explore the key principles that make websites stand out in 2025.\n\n**Minimalism and Clean Design**\nLess is more. Modern design focuses on clean layouts, plenty of whitespace, and removing unnecessary elements. This creates a better user experience and makes content easier to digest.\n\n**Typography Matters**\nChoose fonts carefully. Modern websites often use system fonts or carefully selected web fonts like Inter or Roboto for better readability and performance.\n\n**Color and Contrast**\nUse a limited color palette with good contrast ratios. Dark mode support is becoming essential for user experience.\n\n**Responsive Design**\nMobile-first approach ensures your site works perfectly on all devices. Use CSS Grid and Flexbox for flexible layouts.\n\n**Micro-interactions**\nSubtle animations and hover effects make interfaces feel alive and responsive. But remember - less is more!\n\nThese principles help create engaging user experiences that are both beautiful and functional." 
    }
];

// Home page route
app.get("/", (req, res) => {
    res.render("index", { blogs: blogs, currentPage: 'home' });
});

// About page route
app.get("/about", (req, res) => {
    res.render("about", { currentPage: 'about' });
});

// Contact page route
app.get("/contact", (req, res) => {
    res.render("contact", { currentPage: 'contact' });
});

// Individual blog view route
app.get("/blog/:id", (req, res) => {
    const blogId = parseInt(req.params.id);
    const blog = blogs.find(b => b.id === blogId);
    
    if (!blog) {
        return res.status(404).render("404", { currentPage: 'blog' });
    }
    
    res.render("blog", { blog: blog, currentPage: 'blog' });
});

// Create new blog post
app.post("/submit", (req, res) => {
    if (req.body.title && req.body.title.trim()) {
        const newBlog = {
            id: blogs.length > 0 ? Math.max(...blogs.map(b => b.id)) + 1 : 1,
            title: req.body.title.trim(),
            content: req.body.content ? req.body.content.trim() : "This is a new blog post. Click edit to add your content and make it amazing!"
        };
        blogs.push(newBlog);
    }
    res.redirect("/");
});

// Delete blog post
app.post("/delete/:id", (req, res) => {
    const blogId = parseInt(req.params.id);
    blogs = blogs.filter(blog => blog.id !== blogId);
    res.redirect("/");
});

// Update blog post
app.post("/update/:id", (req, res) => {
    const blogId = parseInt(req.params.id);
    const blogIndex = blogs.findIndex(blog => blog.id === blogId);
    
    if (blogIndex !== -1 && req.body.title) {
        blogs[blogIndex].title = req.body.title.trim();
        if (req.body.content) {
            blogs[blogIndex].content = req.body.content.trim();
        }
    }
    res.redirect("/");
});

// 404 handler
app.use((req, res) => {
    res.status(404).render("404", { currentPage: 'error' });
});

app.listen(3000, () => {
    console.log('🚀 BlogBahadur server started on http://localhost:3000');
    console.log('📝 Ready to manage your blogs!');
});