const API_KEY = "9c05e70eef45735b17dbef6d7094f34a"; // Store API Key securely
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (type="", searchQuery="") => {
  let url = `${BASE_URL}/movie/${type}?api_key=${API_KEY}`;

  if (searchQuery) {
    url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchQuery)}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch movies");

    const data = await response.json();
    return data.results.slice(0,12);
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
