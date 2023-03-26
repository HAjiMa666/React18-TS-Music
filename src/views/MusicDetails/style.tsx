import styled from 'styled-components'

const MusicDetailsWrapper = styled.div`
  background-color: #fff;
  min-width: 1200px;
  margin: 0 auto;
  display: flex;

  .musicRecord {
    width: 500px;
    height: 500px;
    margin: 0px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    .recordIcon {
      position: relative;
      width: 280px;
      height: 280px;
      border-radius: 50%;
      background-color: #1d1d1d;
      box-shadow: 0px 0px 0px 10px #262626, 0px 0px 0px 30px #393939;

      img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 180px;
        height: 180px;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 0px 0px 0px 10px #0e0e0e;
      }
    }
  }

  .lyric {
    flex: 1;
    text-align: center;
  }
`

export { MusicDetailsWrapper }
