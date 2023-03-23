import styled from 'styled-components'

const LayoutStyle = styled.div`
  user-select: none;
  .container {
    background-color: #141414;
  }

  .header {
    height: 50px;
    padding-inline: 0px;
    display: flex;
    background-color: #141414;
    justify-content: space-between;
    border-bottom: 1px solid #363636;
    .options {
      margin-right: 64px;
    }

    .login {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      .loginInfo {
        line-height: 0px;
      }
    }

    .title {
      display: flex;
      height: 100%;
      margin-left: 16px;

      h3 {
        font-weight: bolder;
        display: flex;
        align-items: center;
        margin-bottom: 0px;
      }
    }
  }

  .antdLayout {
    min-height: 100vh;
    margin-bottom: 40px;

    .antdLayout-sider {
      .ant-menu-vertical {
        height: 100%;
      }
    }
  }
`

export default LayoutStyle
