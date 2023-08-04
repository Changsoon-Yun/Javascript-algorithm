function solution(my_string, s, e) {
  const prefix = my_string.slice(0, s);
  const reversedSubstring = my_string.slice(s, e + 1).split('').reverse().join('');
  const suffix = my_string.slice(e + 1);

  return prefix + reversedSubstring + suffix;
}