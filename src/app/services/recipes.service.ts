import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IRecipeModel } from '../../models/recipe.model';

export type Endpoint = 'recipes';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor(private http: HttpClient) {}

  requestEndpoint(url: Endpoint, id: string = ''): string {
    return `${environment.API}${environment[url]}` + (id ? '/' + id : '');
  }

  create(data: IRecipeModel): Observable<any> {
    return this.http.post(this.requestEndpoint('recipes'), data);
  }

  read(id: IRecipeModel['id'] = ''): Observable<any> {
    if (id) {
      return this.http.get(this.requestEndpoint('recipes', id));
    } else {
      return this.http.get(this.requestEndpoint('recipes'));
    }
  }

  update(id: IRecipeModel['id'], data: IRecipeModel): Observable<any> {
    return this.http.put(this.requestEndpoint('recipes', id), data);
  }

  delete(data: IRecipeModel['id'] | IRecipeModel['id'][]): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: { ids: data },
    };
    return this.http.delete(this.requestEndpoint('recipes'), options);
  }

  dropTable(reason: string): Observable<any> {
    return this.http.post(environment.API + 'recipes/drop_table', { reason });
  }

  createTable(): Observable<any> {
    return this.http.get(environment.API + 'recipes/create_table');
  }
}
