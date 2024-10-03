import { Component, inject, OnInit } from '@angular/core';
import { CountStore } from './counter.store';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  providers: [CountStore],
})
export class CounterComponent implements OnInit {
  store = inject(CountStore);

  ngOnInit() {
    console.log(this.store.count())
    this.store.setInitialCount();
  }

}
