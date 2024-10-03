import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  constructor() { }



  initialCount() {
    return 12;
  }
}
