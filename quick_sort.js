/**
 *
 *  快速排序
 *
 *  一个数组，
 *  找一个基准值， 比这个值小的放左边， 比这个值大的放右边。
 *
 *
 */

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    let pivot = arr[0];
    let less = arr.slice(1).filter(item => item <= pivot);
    let greater = arr.slice(1).filter(item => item > pivot);
    return [...quickSort(less), pivot, ...quickSort(greater)];
  }
}



