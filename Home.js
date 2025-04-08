import React, { useState } from 'react';

function Home() {
  // 🎥 Step 1: Create a state to store the movie list
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Inception',
      description: 'A mind-bending thriller by Christopher Nolan.',
      poster: 'https://via.placeholder.com/300x150?text=Inception'
    },
    {
      id: 2,
      title: 'Interstellar',
      description: 'Journey through space and time to save humanity.',
      poster: 'https://via.placeholder.com/300x150?text=Interstellar'
    },
    {
      id: 3,
      title: 'The Dark Knight',
      description: 'Batman fights Joker in this dark superhero classic.',
      poster: 'https://via.placeholder.com/300x150?text=Dark+Knight'
    }
  ]);

  return (
    <div className="container-fluid bg-black text-white min-vh-100 p-5">
      <h1 className="text-center mb-4">Welcome to Movie hub 🎬</h1>
      <p className="text-center">Your personalized movie dashboard</p>

      <div className="row mt-5">
        {/* 🎬 Step 2: Map through the movie array */}
        {movies.map((movie) => (
          <div key={movie.id} className="col-md-4 mb-4">
            <div className="card bg-dark text-white h-100">
              <img src={movie.poster} className="card-img-top" alt={movie.title} />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
