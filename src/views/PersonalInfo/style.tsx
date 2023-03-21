import styled from 'styled-components'

const PersonInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .personalInfo {
    color: #fff;
    width: 95%;
    margin: 50px 0;
    display: flex;

    .avatar {
      width: 160px;
      height: 160px;
      flex-shrink: 0;
    }

    .info {
      width: 100%;
      margin-left: 30px;
      .title {
        margin-bottom: 15px;
      }
      .nickName {
        font-size: 24px;
        font-weight: bolder;
      }

      .underline {
        width: 100%;
        height: 1px;
        background-color: #8c8c8c;
        margin: 15px 0px;
      }

      .signature {
        font-size: 12px;
        color: #8c8c8c;
      }
    }
  }
`

export { PersonInfoWrapper }
