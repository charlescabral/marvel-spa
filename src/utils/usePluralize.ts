const usePluralize = (word: string, count: number): string => {
  if (count === 1 || !word) return word
  if (word.endsWith('l')) {
    return `${word.substring(0, word.length - 1)}is`
  }

  return `${word}s`
}
export default usePluralize
