# 🍿 MoviesHub - Movies Catalog Website

A modern, responsive web application to search, browse, and explore detailed information about movies using the OMDB API. Built with React and designed for movie enthusiasts.

## 🌐 Live Demo

**[🎬 View Live Site](https://wowmoviesoinfo.netlify.app/)** 

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat&logo=react&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6.9.0-CA4245?style=flat&logo=react-router&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-1.13.2-5A29E4?style=flat&logo=axios&logoColor=white)
![Deployed](https://img.shields.io/badge/Deployed-Netlify-00C7B7?style=flat&logo=netlify&logoColor=white)

---

## ✨ Features

- 🔍 **Smart Search** - Real-time movie search with instant results
- 🎬 **Detailed Information** - View comprehensive movie details including:
  - Title, Year, Rating, Runtime, Release Date
  - Genre, Director, Writer, and Cast
  - Plot summary and Awards
  - IMDB Rating and Votes
  - Box Office performance
  - Multiple rating sources (IMDB, Rotten Tomatoes, Metacritic)
- 🎨 **Clean UI** - Modern, intuitive interface with smooth navigation
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Fast Performance** - Optimized React components with efficient state management
- 🎯 **Easy Navigation** - Browse between About, Movies, and detail pages effortlessly

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/deepak12321/movies-catalog-site.git
   cd movies-catalog-site/movie
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
movie/
├── public/
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Accordian.jsx      # Collapsible ratings component
│   │   ├── Card.jsx            # Movie card component
│   │   ├── Details.jsx         # Footer details
│   │   ├── FetchData.js        # Context API for data fetching
│   │   ├── Loader.jsx          # Loading spinner
│   │   ├── Navbar.jsx          # Navigation bar
│   │   └── Rating.jsx          # Rating display
│   ├── screens/
│   │   ├── About.jsx           # Landing/About page
│   │   ├── Desc.jsx            # Movie details page
│   │   ├── Favourite.jsx       # Favourites page (WIP)
│   │   └── Movie.jsx           # Movie search/browse page
│   ├── style/
│   │   ├── about.css
│   │   ├── accordian.css
│   │   ├── card.css
│   │   ├── desc.css
│   │   ├── details.css
│   │   ├── movies.css
│   │   ├── navbar.css
│   │   └── universal.css
│   ├── App.js                  # Main app component
│   └── index.js                # React entry point
└── package.json
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React** | JavaScript library for building UI |
| **React Router DOM** | Client-side routing |
| **Axios** | HTTP client for API requests |
| **Context API** | State management |
| **OMDB API** | Movie data source |
| **CSS3** | Styling and responsive design |

---

## 📖 Usage Guide

### Searching for Movies

1. Navigate to the **Movies** page from the navbar
2. Use the search bar to type in any movie title
3. Results appear in real-time as you type
4. Click on any movie poster to view detailed information

### Viewing Movie Details

- Click on any movie card to open the detailed view
- Scroll to see all information including plot, cast, ratings, and awards
- Use the **Ratings** accordion to see ratings from multiple sources
- Click the **X** button to return to the search page

---

## 🎨 Pages Overview

### About Page
- Introduction to the Movies Catalog website
- Project description and features
- Developer information

### Movies Page
- Real-time search functionality
- Grid display of movie posters
- Navigate to individual movie details

### Movie Details Page
- Comprehensive movie information
- Movie poster and metadata
- Plot summary and awards
- Expandable ratings section

---

## 🔧 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder
- Optimized and minified code
- Ready for deployment

### `npm run eject`
**Note:** This is a one-way operation. Ejects from Create React App for full control.

---

## 🌐 API Integration

This project uses the [OMDB API](http://www.omdbapi.com/) to fetch movie data.

**API Features:**
- Search movies by title
- Fetch detailed movie information by IMDB ID
- Access ratings from multiple sources

---

## 🐛 Recent Bug Fixes

All critical bugs have been resolved in the latest version:
- ✅ Fixed duplicate AppProvider wrapping
- ✅ Corrected API URL construction
- ✅ Added missing React useEffect dependencies
- ✅ Improved null/undefined handling
- ✅ Enhanced error handling in components

See the [bug fixes walkthrough](./docs/walkthrough.md) for detailed information.

---

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build folder is ready to be deployed. You can deploy to:
- **Vercel** - `vercel deploy`
- **Netlify** - Drag and drop the `build` folder
- **GitHub Pages** - Use `gh-pages` package
- **Heroku** - Push to Heroku remote

---

## 📝 Future Enhancements

- [ ] Add favourites functionality
- [ ] Implement user authentication
- [ ] Add movie trailers integration
- [ ] Create watchlist feature
- [ ] Add dark mode toggle
- [ ] Implement advanced filters (year, genre, rating)

---

## 👨‍💻 Developer

**Deepak Phulara**

---

## 📄 License

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

## 🙏 Acknowledgments

- [OMDB API](http://www.omdbapi.com/) for providing movie data
- [Create React App](https://create-react-app.dev/) for the React boilerplate
- [React Router](https://reactrouter.com/) for routing functionality

---

## 📞 Support

If you encounter any issues or have questions, please open an issue in the repository.

---

<div align="center">
  <p>Made with ❤️ by Deepak Phulara</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
