import styled from 'styled-components'

const MusicPlayerWrapper = styled.div`
  width: 100vw;
  height: 50px;
  background-color: #2d2e37;
  position: fixed;
  bottom: 0px;
  z-index: 9999;
  display: flex;
  align-items: center;

  .cover {
    width: 50px;
    height: 50px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .songInfo {
    margin-left: 16px;
    color: #fff;
    .title {
      width: 150px;
      font-size: 14px;
      margin-bottom: 4px;
    }
    .author {
      color: #ffffff97;
      font-size: 12px;
    }
  }

  .options {
    flex: 1;
    display: flex;

    .circle,
    .lastSong,
    .play,
    .nextSong,
    .love,
    .add,
    .sound,
    .stop,
    .circleOne,
    .random {
      cursor: pointer;

      &:hover {
        filter: brightness(0.4);
      }
    }

    .playOption {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      .lastSong {
        margin: 0px 12px;
      }

      .play,
      .stop {
        margin-right: 12px;
      }
    }

    .audioOptions {
      width: 300px;
      height: 100%;
      display: flex;
      align-items: center;

      .add {
        margin: 0 12px;
      }
    }
  }

  .audioProgress {
    /* 音乐播放器进度条样式定制 */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 50px;
    z-index: 9999;
    .ant-slider {
      margin: 0px;
      height: 4px;

      &:hover {
        .ant-slider-handle {
          display: block;
        }
      }
    }

    .ant-slider-track {
      background-color: #fff;
    }

    .ant-slider-handle {
      display: none;

      &::after {
        box-shadow: 0 0 0 2px #fff;
      }

      &:hover::after {
        box-shadow: 0 0 0 4px #fff;
      }
    }
  }
`

export { MusicPlayerWrapper }
