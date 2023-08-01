
import api from './api';

export function getAlbums(id, market) {

    return api.get('/v1/albums', {
      params: {
        id,
        market 
      }
    });
  
  }

