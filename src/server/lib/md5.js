import crypto from 'crypto'

let result = {};

result.md5 = function(old) {
  let md5 = crypto.createHash('md5');
  md5.update(old);
  let news = md5.digest('hex');
  return news;
}

export default result
