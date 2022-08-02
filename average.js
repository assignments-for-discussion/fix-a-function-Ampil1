
function average(numbers) {

  const eaxactvalue = numbers.filter(Boolean)//[1,2,4]
  return eaxactvalue.reduce((p, c)=> p + c, 0) / eaxactvalue.length;
}

module.exports = {average};
