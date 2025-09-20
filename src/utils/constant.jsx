export const LOGO_URL = 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg';

export const BACKGROUND_IMAGE_URL = 'https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_small.jpg';

export const AVATAR_URL='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnb_I_OQt7Mcts15Kf9qwVchNCE7SJlkfYQ&s';

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_API_KEY,
  }
};

export const POSTER_CDN_URL = 'https://image.tmdb.org/t/p/w500/';

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY; // THIS IS A OPENROUTER.AI KEYS