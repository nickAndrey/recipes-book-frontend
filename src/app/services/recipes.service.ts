import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IRecipeModel } from '../../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor(private http: HttpClient) {}

  create(data: IRecipeModel): Observable<any> {
    return this.http.post(environment.API + 'recipes', data);
  }

  read(id: IRecipeModel['recipeId'] = ''): Observable<any> {
    if (id) {
      return this.http.get(environment.API + 'recipes/' + id);
    } else {
      return this.http.get(environment.API + 'recipes');
    }
  }

  update(id: IRecipeModel['recipeId'], data: IRecipeModel): Observable<any> {
    return this.http.put(environment.API + 'recipes/' + id, data);
  }

  delete(data: IRecipeModel): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: data,
    };
    return this.http.delete(environment.API + 'recipes', options);
  }
}
