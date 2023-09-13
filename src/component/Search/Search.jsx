// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Search = () => {
//   const [seacrhQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSearch = async () => {
//     // API request
//     try {
//       setIsLoading(true);
//       const api = api_key;
//       const url = `https://api.themoviedb.org/3/search/movie?api=${api}&query=${seacrhQuery}`;

//       // GET request to the TMDB API
//       const response = await fetch(url);
//       const data = await response.json();

//       // Check request status
//       if (response.ok) {
//         const movies = data.results.map((movie) => ({
//           id: movie.id,
//           title: movie.title,
//           releaseDate: movie.release_date,
//           poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
//         }));

//         setSearchResults(movies);
//       } else {
//         console.error('API Error:', data);
//       }
//     } catch {
//       console.error('Error', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="search">
//       <h1>Movie Search</h1>
//       <input
//         type="text"
//         placeholder="Search"
//         value={seacrhQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//       <button className="btn-1" onClick={handleSearch}>
//         Search
//       </button>
//       {isLoading && <p className="alert">Loading...</p>}
//       <ul>
//         {searchResults.map((movie) => (
//           <li key={movie.id}>
//             <Link to={`/movies/${movie.id}`}>
//               <img src={movie.poster} alt={movie.title} />
//               <h2>{movie.title}</h2>
//               <p>{movie.releaseDate}</p>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default Search;
