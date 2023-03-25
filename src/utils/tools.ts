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

// 获取登录的cookie
const getLoginCookie = () => {
  const cookie = localStorage.getItem('cookie')
  return cookie
}

/**
 *  格式化歌词
 *  [00:00.000] 作词 : 虎二
 *  [00:01.000] 作曲 : 虎二
 *  [00:02.000] 编曲 : 虎二/姚瀚霄@骁Studio
 *  [00:03.000] 制作人 : 闫骁男@骁Studio
 *  [00:12.086]日坠尘芳 杯觥交错
 *  [00:17.736]新愁旧憾 与我何干
 */
const lyricEXP = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
function formatLyric(lyric: string) {
  const lyricArr = lyric && lyric.split('\n')
  const trueLyric: any = []
  lyricArr &&
    lyricArr.forEach((item) => {
      if (item) {
        const lyricObj: {
          time: number | null
          content: string | null
        } = { time: null, content: null }
        const newLyric: any = lyricEXP.exec(item)
        if (newLyric) {
          const minute = newLyric[1] * 60 * 1000
          const second = newLyric[2] * 1000
          const totalTime = (minute + second + newLyric[3] * 1) / 1000
          const content = item.replace(lyricEXP, '').trim()
          lyricObj.time = totalTime
          lyricObj.content = content
          trueLyric.push(lyricObj)
        }
      }
    })
  return trueLyric
}

export {
  formatNum,
  formatIndex,
  formatSongDuration,
  getLoginCookie,
  formatLyric
}
