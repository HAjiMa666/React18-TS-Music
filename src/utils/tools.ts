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

/**
 * 格式化歌曲时间
 * @param time 歌曲持续时间
 * @param type 歌曲的时长是以毫秒为单位还是以秒为单位
 * @returns
 */
const formatSongDuration = (time: number, type: 'seconds' | 'millisecond') => {
  let seconds, minutes, remainSeconds
  if (type === 'millisecond') {
    seconds = time / 1000
    minutes = Math.floor(seconds / 60)
    remainSeconds = formatIndex(Math.floor(seconds % 60))
    return `${minutes}:${remainSeconds}`
  } else {
    minutes = Math.floor(time / 60)
    remainSeconds = formatIndex(Math.floor(time % 60))
    return `${minutes}:${remainSeconds}`
  }
}

export { formatNum, formatIndex, formatSongDuration }
