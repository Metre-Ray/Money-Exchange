// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  if (currency <= 0) return {};
  if (currency > 10000) return {"error": "You are rich, my friend! We don't have so much coins for exchange"};
  var h = 0, q = 0, d = 0, n = 0, p = 0,
      remainder = 0,
      answer = {};
  h = Math.floor(currency / 50);
  remainder = (currency - h * 50);
  q = Math.floor(remainder / 25);
  remainder = remainder - q * 25;
  d = Math.floor(remainder / 10);
  remainder = remainder - d * 10;
  n = Math.floor(remainder / 5)
  p = remainder - n * 5;
  if (h !== 0) answer.H = h;
  if (q !== 0) answer.Q = q;
  if (d !== 0) answer.D = d;
  if (n !== 0) answer.N = n;
  if (p !== 0) answer.P = p;
  return answer;
}
