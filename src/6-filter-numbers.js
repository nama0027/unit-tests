export const filterNumbers = (array, largerThan) => {

  const filteredArray = array.filter((item)=> (item <= largerThan))
  return filteredArray
}
