export const filterNumbers = (array, largerThan) => {
  return array.filter((number) => {
    return number <= largerThan;
  });
}
// let desiredNumbers = []
  
//   for(let i=0; i < array.length; i++) {
//     if (array[i] <= largerThan) {
//       desiredNumbers.push(array[i]);
//     }
//   }
// return desiredNumbers
