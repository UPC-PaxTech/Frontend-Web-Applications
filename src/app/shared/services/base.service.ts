import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {inject} from '@angular/core';
import {catchError, Observable, retry, throwError} from 'rxjs';

export abstract class BaseService<R> {
  protected httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  protected serverBaseUrl: string = environment.serverBaseUrl;
  protected resourceEndpoint: string = '/resources';
  protected http: HttpClient = inject(HttpClient);

  protected handleError(error: HttpErrorResponse) {
    console.error(error);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  protected resourcePath(): string {
    return `${this.serverBaseUrl}${this.resourceEndpoint}`;
  }

  public getAll(): Observable<R[]> {
    return this.http.get<R[]>(this.resourcePath(), this.httpOptions).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  public getById(id: any): Observable<R> {
    return this.http.get<R>(`${this.resourcePath()}/${id}`, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
}
