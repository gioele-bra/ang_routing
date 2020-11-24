import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAUCbWEkX00ZSmWve8xF7T__fSjagwf8Hd6zoyVYDm4AG4TWgVsAhtIctPDNv2I7rogQhQqZme9YGNH2fZYGIPgtYI-kev3xIknsQrqbay44uD-iOeY59xpYFdunEsTWnDGFDOnrU-WPU4dubHXQkMK9wCnSd1OqSA'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}