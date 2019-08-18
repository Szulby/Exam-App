import React from 'react'
import styled from 'styled-components'
import media from './media'

const StyledBox = styled.div`
  width: 400px;
  ${media.xs`width:300px;`}
  height: 100px;
  margin: 40px 0;
  position: relative;
  img {
    display: block;
    border-radius: 50%;
    width: 120px;
  }
  div {
    position: absolute;
    width: 70%;
    top: 30px;
    left: 115px;
    text-align: center;
    p {
      transition: transform 1s;
      margin: 0;
    }
    hr {
      position: relative;
      z-index: -1;
    }
  }
  &:hover {
    cursor: pointer;
    p {
      transform: scale(1.3);
    }
  }
`

const Box = ({ user, redirect }) => {
  return (
    <StyledBox onClick={redirect}>
      <img src={user.image} alt="" />
      <div>
        <p>{`${user.nameTitle} ${user.firstName} ${user.lastName}`}</p>
        <hr />
      </div>
    </StyledBox>
  )
}

export default Box
