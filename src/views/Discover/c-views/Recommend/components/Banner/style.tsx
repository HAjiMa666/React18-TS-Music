import styled from 'styled-components'

type BannerContentProps = {
  blurImg: string
}

const BannerWrapper = styled.div``

const BannerContent = styled.div<BannerContentProps>`
  background-image: url(${(props) => props.blurImg});
  background-size: cover;
  position: relative;
  img {
    width: 50%;
    margin: 0 auto;
  }
  .anticon {
    font-size: 96px;
    color: #fff;
    position: absolute;
    cursor: pointer;
    &:hover {
      transition: all 0.2s ease-in-out;
      color: #a8a8a8;
    }
    &:active {
      color: #878787;
    }
  }
  .anticon-left {
    left: 10%;
    top: 50%;
    transform: translateY(-50%);
  }
  .anticon-right {
    right: 10%;
    top: 50%;
    transform: translateY(-50%);
  }
`

export { BannerWrapper as default, BannerContent }
