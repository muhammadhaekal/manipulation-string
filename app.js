//------------------level 0--------------


const sentenceA = "Hello World"
const sentenceB = "Good Bye !"

console.log(`-------------------level 0----------------`)
console.log(sentenceA)
console.log(sentenceB)

//------------------level 1--------------


const sentenceC = sentenceA + " " + sentenceB
const sentenceD = `${sentenceA} ${sentenceB}`

console.log(`-------------------level 1----------------`)
console.log(sentenceC)
console.log(sentenceD)

//------------------level 2--------------

const sentenceE = sentenceC.toUpperCase()
const sentenceF = sentenceD.toUpperCase()

console.log(`-------------------level 2----------------`)
console.log(sentenceE);
console.log(sentenceF);

//------------------level 3--------------


function firstCharToUppercase(str){
  var arrString = str.split(" ");
  var newString = "";

  for( var i=0 ; i<arrString.length ; i++){
    var firstChar = arrString[i].charAt(0).toUpperCase()
    arrString[i] = firstChar + arrString[i].slice(1)
    newString = newString + arrString[i] + " "
  }

  return newString
}

const sentenceG = "hello goodness"
const sentenceH = firstCharToUppercase(sentenceG);

console.log(`-------------------level 3----------------`)
console.log(sentenceH);
