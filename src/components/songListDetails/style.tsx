import styled from 'styled-components'

const SongDetailsWrapper = styled.div`
  color: #fff;
  .ant-drawer-header {
    padding: 0px;
  }
`

const SongListHeadWrapper = styled.div``

const SongWrapper = styled.div`
  height: 40px;
  background-color: #3d3abc;
`

type ListInfoProps = {
  bgUrl: string
}
const ListInfo = styled.div<ListInfoProps>`
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
  .cover {
    width: 80px;
    height: 80px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    width: 240px;
    .title {
      font-size: 16px;
    }
    .author {
      margin-top: 8px;
      font-size: 14px;
    }
  }
`

export { SongDetailsWrapper, SongListHeadWrapper, ListInfo, SongWrapper }
