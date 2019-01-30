function binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1;
  let count = 0;

  while (low <= high) {
    let mid = Math.floor(low + high / 2);
    let guess = list[mid];
    count++;
    if (guess === item) {
      console.log("cmp times", count);
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    }
    if (guess < item) {
      low = mid + 1;
    }
  }
}
