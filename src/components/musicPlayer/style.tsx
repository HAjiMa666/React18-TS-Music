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
`

export { MusicPlayerWrapper }
