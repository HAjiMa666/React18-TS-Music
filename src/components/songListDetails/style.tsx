import styled from 'styled-components'

const SongDetailsWrapper = styled.div`
  color: #fff;
  .ant-drawer-header,
  .ant-drawer-body {
    background-color: #2d2e37;
    padding: 0px;
  }
`

const SongListHeadWrapper = styled.div`
  background-color: #2d2e37;
`

const SongWrapper = styled.div`
  height: 40px;
  background-color: #2d2e37;
  padding: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: #c4c4c463;
  }

  .index {
    margin-right: 6px;
  }

  .name {
    width: 200px;
  }
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
