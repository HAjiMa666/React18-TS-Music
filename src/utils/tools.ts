// 播放量格式化
const formatNum = (num: number) => {
  if (num >= 1000_000_00) return `${(num / 1000_000_00).toFixed(2)}亿`
  if (num >= 100000) return `${(num / 10000).toFixed(2)}万`
  else return `${num}`
}

// 格式化序号
const formatIndex = (index: number) => {
  if (index > 0 && index < 10) return `0${index}`
  else return index
}

export { formatNum, formatIndex }
