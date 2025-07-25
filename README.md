# Website Generator - Full Stack Application

A complete full-stack application built with React.js frontend, NestJS backend, and MongoDB database that allows users to generate website section suggestions based on their ideas.

## 🚀 Features

- **Interactive Form**: Enter website ideas and get instant section suggestions
- **Smart Section Generation**: AI-powered logic that generates relevant sections based on website type
- **Data Persistence**: All ideas and sections are saved to MongoDB
- **Real-time Updates**: See your saved ideas immediately after creation
- **Responsive Design**: Beautiful UI built with Tailwind CSS and shadcn/ui components
- **Loading States**: Smooth user experience with loading indicators
- **Error Handling**: Comprehensive error handling for both frontend and backend

## 🛠️ Tech Stack

### Frontend
- **React.js** - Modern JavaScript framework
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Lucide Icons** - Beautiful icon library

### Backend
- **NestJS** - Progressive Node.js framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
website-generator/
├── frontend/                 # React.js frontend application
│   ├── src/
│   │   ├── components/ui/   # shadcn/ui components
│   │   ├── App.jsx         # Main application component
│   │   ├── App.css         # Application styles
│   │   └── main.jsx        # Entry point
│   ├── dist/               # Production build files
│   └── package.json        # Frontend dependencies
├── backend/                 # NestJS backend application
│   ├── src/
│   │   ├── website-ideas/  # Website ideas module
│   │   │   ├── website-idea.schema.ts      # MongoDB schema
│   │   │   ├── website-ideas.service.ts    # Business logic
│   │   │   ├── website-ideas.controller.ts # API endpoints
│   │   │   └── website-ideas.module.ts     # Module definition
│   │   ├── app.module.ts   # Main application module
│   │   └── main.ts         # Application entry point
│   └── package.json        # Backend dependencies
├── README.md               # This documentation
└── todo.md                # Development progress tracker
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (v6.0 or higher)
- npm or pnpm

### Installation

1. **Clone or extract the project**
   ```bash
   cd website-generator
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../backend
   npm install
   ```

4. **Start MongoDB**
   ```bash
   # On Ubuntu/Debian
   sudo systemctl start mongod
   
   # On macOS with Homebrew
   brew services start mongodb-community
   
   # On Windows
   net start MongoDB
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm run start:dev
   ```
   The backend will run on `http://localhost:3001`

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

3. **Open your browser** and navigate to `http://localhost:5173`

## 🔧 API Endpoints

### Website Ideas

- `POST /api/website-ideas` - Create a new website idea
- `GET /api/website-ideas` - Get all saved website ideas
- `GET /api/website-ideas/:id` - Get a specific website idea
- `POST /api/website-ideas/generate-sections` - Generate sections for an idea (without saving)

### Example API Usage

```javascript
// Create a new website idea
const response = await fetch('http://localhost:3001/api/website-ideas', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ idea: 'Landing page for a bakery' }),
});

// Get all saved ideas
const ideas = await fetch('http://localhost:3001/api/website-ideas');
```

## 🎨 Section Generation Logic

The application includes intelligent section generation based on website type:

- **Bakery/Restaurant/Food**: Hero, Our Offerings, About Us & Contact
- **Portfolio/Personal**: Hero, About Me, Portfolio, Contact
- **Business/Company**: Hero, Services, About Us, Contact
- **Blog/News**: Hero, Latest Posts, Categories, About
- **E-commerce/Shop**: Hero, Featured Products, Categories, Cart & Checkout
- **Default**: Hero, Features, About, Contact

## 🏗️ Building for Production

### Frontend
```bash
cd frontend
npm run build
```
The production files will be in the `dist/` directory.

### Backend
```bash
cd backend
npm run build
npm run start:prod
```

## 🧪 Testing

The application has been thoroughly tested with:
- ✅ Form submission and validation
- ✅ API integration and error handling
- ✅ Database persistence and retrieval
- ✅ Loading states and user feedback
- ✅ Responsive design across devices

## 🔒 Environment Variables

Create a `.env` file in the backend directory for production:

```env
MONGODB_URI=mongodb://localhost:27017/website-generator
PORT=3001
NODE_ENV=production
```

## 🚀 Deployment Options

### Frontend
- **Vercel**: Deploy the `frontend/dist` folder
- **Netlify**: Deploy the `frontend/dist` folder
- **GitHub Pages**: Deploy the `frontend/dist` folder

### Backend
- **Heroku**: Deploy the `backend` folder with MongoDB Atlas
- **Railway**: Deploy with built-in MongoDB
- **DigitalOcean**: Deploy on a droplet with MongoDB

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is open source and available under the MIT License.

## 🙋‍♂️ Support

If you encounter any issues or have questions:
1. Check the console for error messages
2. Ensure MongoDB is running
3. Verify all dependencies are installed
4. Check that ports 3001 and 5173 are available

## 🎯 Future Enhancements

- User authentication and personal idea collections
- Advanced section customization options
- Export functionality for generated sections
- Integration with website builders
- AI-powered content suggestions for each section

