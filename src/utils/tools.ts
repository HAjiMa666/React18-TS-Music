const formatNum = (num: number) => {
  if (num >= 1000_000_00) return `${(num / 1000_000_00).toFixed(2)}亿`
  if (num >= 100000) return `${(num / 10000).toFixed(2)}万`
  else return `${num}`
}

export { formatNum }
