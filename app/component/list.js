import {h, Component} from 'preact'

export default class List extends Component {
  render({repos}) {
    return repos.length > 0 ?
      <ol>
        {repos.map(repo => <li><a href={repo.html_url}>{repo.full_name}</a></li>)}
      </ol>:
      <span>No repos to show</span>
  }
}
