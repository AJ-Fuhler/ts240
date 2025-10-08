type MovieApiResponse = {
  status: string;
  data: {
    title: string;
    releaseYear: number;
  };
};

function handleMovieApiResponse(response: unknown) {
  if (!response || typeof response !== "object") {
    console.log("No data received!");
    return;
  }

  const movieApiReponse = response as MovieApiResponse;
}