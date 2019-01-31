/**
 *  选择排序
 *  每次找出一个最小的元素， 放入新数组
 *
 */

function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;
  arr.forEach((item, index) => {
    if (item < smallest) {
      smallest = item;
      smallestIndex = index;
    }
  });
  return smallestIndex;
}

function selectionSort(arr) {
  let newArr = [];
  // arr 是引用， length不先存起来， 后面会出bug
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let smallestIndex = findSmallest(arr);
    newArr = newArr.concat(arr.splice(smallestIndex, 1));
    console.log("arr:", arr);
    console.log("newArr:", newArr);
  }
  return newArr;
}
