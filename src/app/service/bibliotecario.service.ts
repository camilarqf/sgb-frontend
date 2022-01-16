import { Bibliotecario } from './../models/bibliotecario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root',
})
export class BibliotecarioService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<Bibliotecario[]> {
    return this.http.get<Bibliotecario[]>(
      `${API_CONFIG.baseUrl}/bibliotecarios`
    );
  }
}
