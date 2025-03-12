import axios from "axios";

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

// Función para obtener el token de autenticación
async function getSpotifyToken() {
  const tokenUrl = "https://accounts.spotify.com/api/token";
  const authHeader = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);

  try {
    const response = await axios.post(
      tokenUrl,
      "grant_type=client_credentials",
      {
        headers: {
          Authorization: `Basic ${authHeader}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return response.data.access_token;
  } catch (error) {
    console.error(
      "Error obteniendo el token de Spotify:",
      error.response?.data || error.message
    );
    return null;
  }
}

// Función para obtener datos de una playlist usando la API de Spotify
async function getPlaylistInfo(playlistUrl, token) {
  const playlistId = playlistUrl.split("/playlist/")[1].split("?")[0]; // Extraer ID

  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/playlists/${playlistId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return {
      playlistName: response.data.name,
      urlCoverImage: response.data.images[0]?.url || "",
    };
  } catch (error) {
    console.error(
      `Error obteniendo datos de la playlist ${playlistUrl}:`,
      error.response?.data || error.message
    );
    return null;
  }
}

// Función para obtener y actualizar las playlists
export async function fetchUpdatedPlaylists(originalPlaylists) {
  const token = await getSpotifyToken();
  if (!token) return originalPlaylists; // Si no hay token, devuelve el JSON original

  const updatedPlaylists = await Promise.all(
    originalPlaylists.map(async (playlist) => {
      const updatedInfo = await getPlaylistInfo(playlist.urlPlaylist, token);
      return updatedInfo ? { ...playlist, ...updatedInfo } : playlist;
    })
  );

  return updatedPlaylists;
}
