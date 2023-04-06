let userId = "User 01";
let token = "8qlOkxz4wq";

const requests = {
  fetchTrending: `/trending?userId=${userId}&token=${token}`,
  fetchNetflixOriginals: `/All?userId=${userId}&token=${token}`,
  fetchTopRated: `/top_rated?userId=${userId}&token=${token}`,
  fetchActionMovies: `/discover/28?userId=${userId}&token=${token}`,
  fetchComedyMovies: `/discover/35?userId=${userId}&token=${token}`,
  fetchHorrorMovies: `/discover/27?userId=${userId}&token=${token}`,
  fetchRomanceMovies: `/discover/10749?userId=${userId}&token=${token}`,
  fetchDocumentaries: `/discover/99?userId=${userId}&token=${token}`,
  fetchSearch: `/search?userId=${userId}&token=${token}`,
};

export default requests;
