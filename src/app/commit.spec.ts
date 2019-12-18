import {Commit} from './commit';
import {isBoolean} from "util";

describe('Commit', () => {
  it('should create an instance', () => {
    expect(new Commit()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const commit = new Commit({
      title: 'hello',
      complete: true
    });
    expect(commit.title).toEqual('hello');
    expect(commit.complete).toEqual('true');
  });
});
