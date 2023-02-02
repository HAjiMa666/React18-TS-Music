import styled from 'styled-components'

const SongCardWrapper = styled.div`
  width: 220px;
  margin-bottom: 16px;

  .description {
    margin-top: 6px;
    color: #fff;
  }
`

interface BoxProps {
  imgUrl: string
}

const Box = styled.div<BoxProps>`
  width: 220px;
  height: 220px;
  background-image: url(${(props) => props.imgUrl});
  background-size: 100%;
  position: relative;

  .mask {
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    margin: 0;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .playCount {
    font-size: 12px;
    margin: 6px 6px 0px 0px;
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;

    .icon {
      transform: translateY(-1px);
      margin-right: 4px;
    }
  }
`

export { SongCardWrapper, Box }
