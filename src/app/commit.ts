/**
 * Commit: Class to hold commit's information
 */
export class Commit {
  author: Object;
  commiter: Object;
  message: string;
  tree: Object;
  url: string;
  comment_count: number;
  varification: string;


  constructor(values: Object = {}) {
    // noinspection TypeScriptValidateTypes
    Object.assign(this, values);
  }
}
