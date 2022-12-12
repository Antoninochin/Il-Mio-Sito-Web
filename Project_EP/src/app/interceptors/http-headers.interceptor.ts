import { Injectable } from '@angular/core';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(
    req: HttpRequest<any>, 
    next: HttpHandler
    ): Observable<HttpEvent<any>> {
      req = req.clone({
        setHeaders: {
            'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': '303df10c14msh14901127afe3b8bp121776jsnd0ba57cd245c',
            // 'dd60c116d1mshb095acd8ba7e201p1633b6jsn64d6ceb2f138',,
        },
        setParams:{
          key: 'e40e743af2c94b0c916a8aa618fb4473',
        }
      });
    return next.handle(req);
  }
}
