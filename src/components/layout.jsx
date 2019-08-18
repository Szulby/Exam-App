import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Layout = ({ children }) => {
  return <Container className="container">{children}</Container>
}

export default Layout
