import {Commit} from './commit';
import {isBoolean} from "util";

const commitObj = {
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
};


describe('Commit', () => {
  it('should create an instance', () => {
    expect(new Commit()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const commit = new Commit(commitObj);
    expect(commit.message).not.toEqual(null);
    expect(commit.author).toBeTruthy();
  });
});
