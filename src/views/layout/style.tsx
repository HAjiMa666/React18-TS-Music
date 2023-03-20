import styled from 'styled-components'

const LayoutStyle = styled.div`
  user-select: none;
  .container {
    background-color: #141414;
  }
  .antdLayout {
    min-height: 100vh;
    margin-bottom: 40px;
  }
`

const Title = styled.h1`
  text-align: center;
  padding: 12px 16px;
  font-size: 20px;
  color: #fff;
`

export default LayoutStyle

export { Title }
