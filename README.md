# Netflix GPT 🎬🤖

A next-generation Netflix clone that goes beyond typical movie streaming interfaces by integrating **AI-powered intelligent search** capabilities. While most Netflix clones just replicate the UI, this project revolutionizes how users discover movies through natural language processing and smart recommendations.


## 🌟 What Makes This Project Unique

Unlike typical Netflix clones, this project features:

- **Smart Search with GPT**: GPT integration for intelligent movie search and recommendations
   - Contextual understanding of user queries
   - Personalized suggestions based on viewing history
- **Real Movie Data**: Live integration with TMDB (The Movie Database) API for authentic movie content
- **Interactive Video Backgrounds**: Auto-playing YouTube trailers as hero backgrounds
- **Smart Movie Discovery**: Multiple curated movie lists with horizontal scrolling
- **Modern Architecture**: Built with latest React patterns, Redux Toolkit, and custom hooks
- **Production-Ready**: Firebase hosting with proper authentication and state management

## ✅ Completed Features

### 🔐 Authentication System
- **Firebase Authentication** with email/password
- **Protected Routes** with automatic redirects
- **Persistent Login State** with proper session management
- **User Profile Management** with avatars and display names

### 🎥 Movie Browsing Experience
- **Hero Video Background** with auto-playing trailers
- **TMDB API Integration** for real movie data
- **Multiple Movie Categories**: Now Playing, Popular, Top Rated, Trending
- **Responsive Movie Cards** with hover effects and smooth transitions
- **Horizontal Scrolling Lists** for optimal browsing experience

### 🏗️ Technical Architecture
- **Redux Toolkit** for centralized state management
- **Custom React Hooks** for data fetching and business logic
- **Responsive Design** with Tailwind CSS
- **Modern Build Tools** with Vite for fast development
- **Clean Code Structure** with separated concerns

## 🔄 Currently in Development

### 🤖 GPT Integration
- OpenAI API integration for movie search
- Natural language movie queries
- Personalized recommendations based on user preferences

### 🎯 Search Like Never Before:**
- **By Title**: "Inception" or "that movie with Leonardo DiCaprio"
- **By Genre**: "funny movies", "sci-fi thriller", "romantic comedy"
- **By Actor/Actress**: "movies with Ryan Reynolds", "films starring Margot Robbie"
- **Scene Description**: "a movie where a guy dreams inside a dream" → **Finds Inception**
- **Mood-Based**: "something to watch on a rainy day", "movies that make you think"
- **Plot Elements**: "time travel movie with action", "superhero movie but funny"

### 🎯 Enhanced Features
- Movie watchlist functionality
- Advanced filtering and sorting
- User rating system
- Social features for sharing recommendations

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React with modern features
- **Redux Toolkit** - State management with RTK Query
- **React Router DOM** - Client-side routing
- **Tailwind CSS 4** - Modern utility-first CSS framework

### Backend & Services
- **Firebase Auth** - Authentication service
- **Firebase Hosting** - Production deployment
- **TMDB API** - Movie database and content
- **YouTube API** - Video trailers integration

### Development Tools
- **Vite** - Next-generation build tool
- **ESLint** - Code quality and consistency
- **Custom Hooks** - Reusable business logic

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Firebase account
- TMDB API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Balajee2k/NetflixGpt.git
   cd NetflixGpt
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Create a Firebase project and get configuration
   - Get TMDB API key from [TMDB](https://www.themoviedb.org/settings/api)
   - Update `src/utils/firebase.jsx` with your Firebase config
   - Update `src/utils/constant.jsx` with your TMDB API key

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Architecture

```
NetflixGpt/
├── src/
│   ├── components/           # React components
│   │   ├── Browse.jsx       # Main browsing interface
│   │   ├── Header.jsx       # Navigation with auth
│   │   ├── Login.jsx        # Authentication forms
│   │   ├── MainContainer.jsx # Hero section
│   │   ├── SecondaryContainer.jsx # Movie lists
│   │   ├── VideoTitle.jsx   # Hero movie info
│   │   ├── VideoBg.jsx      # Background video player
│   │   ├── MovieList.jsx    # Horizontal movie list
│   │   └── MovieCard.jsx    # Individual movie card
│   ├── utils/               # Utilities and configuration
│   │   ├── appStore.jsx     # Redux store configuration
│   │   ├── userSlice.jsx    # User state management
│   │   ├── movieSlice.jsx   # Movie state management
│   │   ├── firebase.jsx     # Firebase configuration
│   │   ├── constant.jsx     # API keys and constants
│   │   └── validate.jsx     # Form validation logic
│   └── hooks/               # Custom React hooks
│       ├── useNowPlayingMovies.jsx # Fetch current movies
│       └── useMovieTrailer.jsx     # Fetch movie trailers
├── public/                  # Static assets
└── dist/                   # Production build
```

## 🎯 Upcoming Features

### Phase 1: GPT Integration
- [ ] OpenAI API setup and configuration
- [ ] Natural language movie search
- [ ] AI-powered movie recommendations
- [ ] Smart search suggestions

### Phase 2: Enhanced User Experience
- [ ] Movie watchlist and favorites
- [ ] User ratings and reviews
- [ ] Advanced filtering (genre, year, rating)
- [ ] Movie details modal with cast info

### Phase 3: Social Features
- [ ] User profiles and preferences
- [ ] Share recommendations
- [ ] Follow other users
- [ ] Community reviews and discussions

## 🔧 Development Guidelines

### Code Quality
- Follow React best practices and hooks patterns
- Use TypeScript for better development experience
- Implement proper error handling and loading states
- Write reusable components and custom hooks

### Performance
- Implement lazy loading for images
- Optimize API calls with caching
- Use React.memo for expensive components
- Implement virtual scrolling for large lists

## 🌐 Live Demo

The project is deployed on Firebase Hosting. [View Live Demo](Under Processing)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [TMDB](https://www.themoviedb.org/) for providing the movie database API
- [Firebase](https://firebase.google.com/) for authentication and hosting services
- [React](https://reactjs.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) teams for amazing tools

---

**Built with ❤️ by [Balajee2k](https://github.com/Balajee2k)**

*This project showcases modern React development practices, API integration, state management, and Firebase services while creating a production-quality Netflix-inspired application with AI enhancements.*