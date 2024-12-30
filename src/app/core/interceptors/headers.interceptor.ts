import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class headersInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedRequest = request.clone({
      setHeaders: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2VlMTliNjcwZWIxYWIwOWRhMWFlZmY1MmE4MjliZCIsIm5iZiI6MTcwNzQzNzg5MS43NTQsInN1YiI6IjY1YzU2ZjQzYWE2NTllMDE2NGVkOTkzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T0APXWjwSrUxNg2ylcQQUDQxYyV0sHaYDgshy9PHM_g',
      },
    });

    return next.handle(clonedRequest);
  }
}
