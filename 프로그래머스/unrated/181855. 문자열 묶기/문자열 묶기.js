function solution(strArr) {
  const groupedMap = strArr.reduce((map, str) => {
    const length = str.length;
    if (!map.has(length)) {
      map.set(length, []);
    }
    map.get(length).push(str);
    return map;
  }, new Map());

  const largestGroupSize = Math.max(...Array.from(groupedMap.values()).map(group => group.length));
  return largestGroupSize;
}