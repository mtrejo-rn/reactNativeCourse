import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer WN8n0pDT_V9ucrqugHnekldQLKUVX2z0IP9gwNHIzFQWUAd_nXp4KRURJMu-JZUOvei1nG7ZU2pQI0NFUTnvSwOr2ZjZ7mMMy5FBJHEciYbNzDrCfDbmXYnr93R2X3Yx',
  },
});
