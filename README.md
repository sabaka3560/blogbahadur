# BlogBahadur

A modern, dark-themed blog management platform built with Express.js and EJS templating.

![BlogBahadurr Demo](https://via.placeholder.com/800x400/0f172a/ffffff?text=BlogBahadur+Demo)

## ✨ Features

-  **Dark Theme** - Elegant dark interface that's easy on the eyes
-  **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
-  **Rectangular Design** - Clean, sharp edges with no curves
-  **Lightning Fast** - Lightweight and optimized for performance
-  **CRUD Operations** - Create, read, update, and delete blog posts
-  **Modern Typography** - Unique font combination for better readability

##  Typography

This project uses a carefully selected font combination:

- **Body Text**: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) - Modern geometric sans-serif
- **Headings**: [Crimson Text](https://fonts.google.com/specimen/Crimson+Text) - Classic serif with modern edge  
- **UI Elements**: [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) - Developer-focused monospace

##  Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sabaka3560/blogbahadur.git
   cd blogbahadur
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

##  Project Structure

```
blogbahadur/
├── public/
│   └── styles.css          # All CSS styles
├── views/
│   ├── index.ejs          # Home page with blog dashboard
│   ├── blog.ejs           # Individual blog post view
│   ├── about.ejs          # About page
│   ├── contact.ejs        # Contact form page
│   └── 404.ejs            # Error page
├── index.js               # Express server and routes
├── package.json           # Project dependencies
└── README.md              # Project documentation
```

##  Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start development server with auto-reload

##  Pages

| Route | Description |
|-------|-------------|
| `/` | Home dashboard with blog management |
| `/blog/:id` | Individual blog post view |
| `/about` | About page with project information |
| `/contact` | Contact form with FAQ |
| `*` | 404 error page for invalid routes |

##  Tech Stack

- **Backend**: Express.js
- **Templating Engine**: EJS
- **Styling**: Custom CSS3 with CSS Grid & Flexbox
- **Storage**: In-memory (no database required)
- **Fonts**: Google Fonts (Space Grotesk, Crimson Text, JetBrains Mono)

##  Key Design Principles

1. **Dark First**: Designed with dark theme as the primary interface
2. **Typography Focused**: Emphasis on readability and unique font choices
3. **Minimal & Clean**: No unnecessary elements or decorations
4. **Rectangular**: Sharp, geometric design with no rounded corners
5. **Responsive**: Mobile-first approach for all screen sizes

##  Deployment

### Deploy to Heroku

1. Install Heroku CLI
2. Login to Heroku: `heroku login`
3. Create app: `heroku create your-app-name`
4. Deploy: `git push heroku main`

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Build command: `npm install`
2. Publish directory: `/`
3. Node version: 18

##  Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

##  Author

**Your Name**
- GitHub: [@sabaka3560](https://github.com/sabaka3560)
- Email: your.email@example.com

##  Acknowledgments

- Typography inspiration from Medium.com
- Dark theme trends from modern design systems
- Express.js and EJS communities for excellent documentation

---

 **Star this repo if you found it helpful!**