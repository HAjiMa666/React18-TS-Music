type PlayState = boolean //false:暂停 true:播放
type SongPlayWay = 0 | 1 | 2 //0:循环播放 1:随机播放 2:单曲循环

interface MusicPlayerInitialState {
  playState: PlayState
  songPlayWay: SongPlayWay
}

export type { MusicPlayerInitialState }
