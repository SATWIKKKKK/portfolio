# Personal Portfolio Website

A modern, responsive portfolio website built with React frontend and Node.js backend, featuring a contact form with MongoDB integration.

## 🌟 Features

- **Modern Design**: Clean, professional layout with Tailwind CSS
- **Responsive**: Mobile-first design that works on all devices
- **Interactive**: Smooth scrolling navigation and animations
- **Contact Form**: Functional contact form with backend API
- **Project Showcase**: Display your projects with links and technologies
- **Skills Section**: Categorized skills with proficiency levels
- **About Section**: Personal introduction and background

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **Create React App** - Build tool and development server

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📁 Project Structure

```
portfolio-website/
├── frontend/                 # React Frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/       # React Components
│   │   │   ├── Navbar.js
│   │   │   ├── About.js
│   │   │   ├── Projects.js
│   │   │   ├── ProjectCard.js
│   │   │   ├── Skills.js
│   │   │   ├── SkillItem.js
│   │   │   ├── Contact.js
│   │   │   └── Footer.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   ├── tailwind.config.js
│   └── .env
└── backend/                  # Node.js Backend
    ├── models/
    │   └── Contact.js        # MongoDB Contact model
    ├── routes/
    │   └── contact.js        # Contact API routes
    ├── controllers/
    │   └── contactController.js
    ├── server.js
    ├── package.json
    └── .env
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

### Installation

1. **Clone or download the project**

2. **Set up the Backend**

```bash
cd backend
npm install
```

3. **Configure Backend Environment**

Create a `.env` file in the backend directory:

```env
MONGODB_URI=mongodb://localhost:27017/portfolio
PORT=5000
NODE_ENV=development
```

For MongoDB Atlas:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
PORT=5000
NODE_ENV=production
```

4. **Set up the Frontend**

```bash
cd ../frontend
npm install
```

5. **Configure Frontend Environment**

Create a `.env` file in the frontend directory:

```env
REACT_APP_API_URL=http://localhost:5000
```

### Running the Application

1. **Start the Backend Server**

```bash
cd backend
npm run dev  # Development mode with auto-restart
# or
npm start    # Production mode
```

The backend will run on `http://localhost:5000`

2. **Start the Frontend Application**

```bash
cd frontend
npm start
```

The frontend will run on `http://localhost:3000`

## 📝 Customization

### Personal Information

1. **Update About Section** (`frontend/src/components/About.js`):
   - Replace "Your Name" with your actual name
   - Update the description and bio
   - Add your profile image
   - Update resume link

2. **Update Projects** (`frontend/src/components/Projects.js`):
   - Replace example projects with your actual projects
   - Add project images, links, and descriptions
   - Update technology stacks

3. **Update Skills** (`frontend/src/components/Skills.js`):
   - Modify the skills array with your technologies
   - Adjust skill levels and categories

4. **Update Contact Information** (`frontend/src/components/Contact.js`):
   - Replace placeholder email and location
   - Update social media links

5. **Update Navigation** (`frontend/src/components/Navbar.js`):
   - Change the brand name/logo

### Styling

- Modify `frontend/tailwind.config.js` to customize the design system
- Update colors, fonts, and spacing in `frontend/src/index.css`
- Customize individual component styles

### Backend API

The contact form sends data to `/api/contact` endpoint. You can:

- Extend the Contact model in `backend/models/Contact.js`
- Add email notifications in `backend/controllers/contactController.js`
- Add authentication for admin routes
- Add more API endpoints as needed

## 🔧 Available Scripts

### Frontend Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

### Backend Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests (placeholder)

## 🌐 Deployment

### Frontend Deployment (Netlify/Vercel)

1. Build the frontend:
```bash
cd frontend
npm run build
```

2. Deploy the `build` folder to your hosting service
3. Update environment variables for production API URL

### Backend Deployment (Heroku/Railway/DigitalOcean)

1. Set up MongoDB Atlas for production database
2. Configure production environment variables
3. Deploy using your preferred platform
4. Update frontend API URL to point to deployed backend

### Environment Variables for Production

**Backend:**
```env
MONGODB_URI=your_mongodb_atlas_connection_string
PORT=5000
NODE_ENV=production
```

**Frontend:**
```env
REACT_APP_API_URL=https://your-backend-domain.com
```

## 📧 Contact Form Features

- Form validation (client and server-side)
- MongoDB storage of contact messages
- Email format validation
- Message length limits
- Error handling and user feedback
- Admin endpoints to view/manage messages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 TODO

- [ ] Add email notifications for contact form submissions
- [ ] Implement admin dashboard for managing contacts
- [ ] Add blog functionality
- [ ] Add project filtering and search
- [ ] Add dark mode toggle
- [ ] Add animations and transitions
- [ ] Add SEO optimization
- [ ] Add analytics integration

## 💡 Tips

- Replace placeholder content with your actual information
- Add your own project images and links
- Consider adding a favicon
- Test the contact form functionality
- Optimize images for web performance
- Add meta tags for SEO

---

**Happy coding!** 🚀