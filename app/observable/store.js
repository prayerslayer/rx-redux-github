import rx from 'rxjs/Rx'

export default function({store}) {
  return rx.Observable.create(observer => store.subscribe(() => observer.next(store.getState())))
}
