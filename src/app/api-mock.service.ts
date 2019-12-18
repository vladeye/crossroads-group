import { Injectable } from '@angular/core';
import { Commit } from './commit';
import { Observable, of } from 'rxjs';

@Injectable()
export class ApiMockService {
  commitObj = {
    "sha": "ff36f8a77a1e85604cd4857fe57ca77e1eaa4788",
    "node_id": "MDY6Q29tbWl0MjI4OTA3OTU0OmZmMzZmOGE3N2ExZTg1NjA0Y2Q0ODU3ZmU1N2NhNzdlMWVhYTQ3ODg=",
    "commit": {
      "author": {
        "name": "Vladimir Rodriguez",
        "email": "vladeye@vladimirs-macbook-pro.local",
        "date": "2019-12-18T19:42:30Z"
      },
      "committer": {
        "name": "Vladimir Rodriguez",
        "email": "vladeye@vladimirs-macbook-pro.local",
        "date": "2019-12-18T19:42:30Z"
      },
      "message": "second commit",
      "tree": {
        "sha": "8de9b9f11a52b93a7d136d8ea1930cae41be52fa",
        "url": "https://api.github.com/repos/vladeye/crossroads-group/git/trees/8de9b9f11a52b93a7d136d8ea1930cae41be52fa"
      },
      "url": "https://api.github.com/repos/vladeye/crossroads-group/git/commits/ff36f8a77a1e85604cd4857fe57ca77e1eaa4788",
      "comment_count": 0,
      "verification": {
        "verified": false,
        "reason": "unsigned",
        "signature": null,
        "payload": null
      }
    },
    "url": "https://api.github.com/repos/vladeye/crossroads-group/commits/ff36f8a77a1e85604cd4857fe57ca77e1eaa4788",
    "html_url": "https://github.com/vladeye/crossroads-group/commit/ff36f8a77a1e85604cd4857fe57ca77e1eaa4788",
    "comments_url": "https://api.github.com/repos/vladeye/crossroads-group/commits/ff36f8a77a1e85604cd4857fe57ca77e1eaa4788/comments",
    "author": null,
    "committer": null,
    "parents": [
      {
        "sha": "f79a570a68a2a0a7971beb91e01fbb85c7d7d840",
        "url": "https://api.github.com/repos/vladeye/crossroads-group/commits/f79a570a68a2a0a7971beb91e01fbb85c7d7d840",
        "html_url": "https://github.com/vladeye/crossroads-group/commit/f79a570a68a2a0a7971beb91e01fbb85c7d7d840"
      }
    ]
  };
  constructor(
  ) {
  }

  public getAllCommits(): Observable<Commit[]> {
    return of([
      new Commit(this.commitObj)
    ]);
  }


}
