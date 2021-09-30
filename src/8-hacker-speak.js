export const hackerSpeak = (words) => {

  words = words.replace(/a/ig, 4).replace(/e/ig, 3).replace(/i/ig, 1).replace(/o/ig, 0).replace(/s/ig, 5)


  return words
}
