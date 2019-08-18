import React from 'react'
import { useDataFromDummy } from '../hooks/api'
import Box from '../components/box'
import Layout from '../components/layout'
import Comments from '../components/comments'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import Helmet from 'react-helmet'

const Navigation = styled.div`
  width: 100%;
  button {
    background: none;
    border: 0;
    margin-top: 50px;
    font-size: 60px;
    color: #495057;
  }
`
const User = ({ match, history }) => {
  const [user, userLoading] = useDataFromDummy(
    `https://dummyapi.io/api/user/${match.params.id}`
  )
  const [posts, postLoading] = useDataFromDummy(
    `https://dummyapi.io/api/user/${match.params.id}/post`
  )
  return (
    <Layout>
      {userLoading && (
        <Helmet
          title={`${user.nameTitle} ${user.firstName} ${user.lastName}`}
        />
      )}
      <Navigation>
        <button onClick={() => history.push('/')}>
          <FontAwesomeIcon icon={faArrowCircleLeft} />
        </button>
      </Navigation>
      {userLoading && <Box user={user} />}
      {postLoading &&
        posts.data.map(post => <Comments key={post.id} post={post} />)}
    </Layout>
  )
}

export default User
