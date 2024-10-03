import { computed, inject } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { CountService } from './count.service';

type CounterState = {
  count: number;
};

const INITIAL_STATE: CounterState = {
  count: 0,
};

export const CountStore = signalStore(
  { providedIn: 'root' },
  withState<CounterState>(INITIAL_STATE),
  withComputed(({ count }) => ({
    doubleCount: computed(()=> count() * 2)
  })

  ),
  withMethods((store, service = inject(CountService)) => ({
    setInitialCount() {
      patchState(store, (state) => ({ count: service.initialCount() }));
    },
    increment() {
      patchState(store, (state) => ({ count: state.count + 1 }));
    },

    decrement() {
      patchState(store, (state) => {
        return { count: state.count - 1 };
      });
    },
  }))
);
