import rx from 'rxjs/Rx'

export default function() {
  return rx.Observable
    .fromEvent(window, 'scroll')
    .map(_ => window.scrollY)
    .filter(current => current >= document.body.clientHeight - window.innerHeight)
    .debounceTime(200)
}
