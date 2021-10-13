export function superFunctionForWorkingWithArray(arr, idCollection, idx){
  return arr.filter((item) => item._id !== idCollection)

  //TODO подумать над реализацией

  // if (item.count === 0) {
  //   return [
  //     ...arr.slice(0, idx),
  //     ...arr.slice(idx + 1)
  //   ]
  // }

  // if ( idx === -1) {
  //   return [
  //     ...arr,
  //     item
  //   ];
  // }
  //
  // return [
  //   ...arr.slice(0, idx),
  //   item,
  //   ...arr.slice(idx + 1)
  // ]
}