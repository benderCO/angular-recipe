import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, ReplaySubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Special } from '../../interfaces/index';

@Injectable({
  providedIn: 'root'
})
export class SpecialsService {

  public special: ReplaySubject<Special[]> = new ReplaySubject<Special[]>(1);

  constructor(
    private http: HttpClient
  ) { }

  public loadSpecials(ingredientId: String) : Observable<Special[]> {
    return this.http.get<Special[]>(environment.baseUrl + 'specials?ingredientId=' + ingredientId).pipe(
      tap(() => new ReplaySubject(1)),
      tap((resp) => 
      {
        console.log('WTF ', resp);
        this.special.next(resp)
      })
    );
  }
}
