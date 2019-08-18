import React from 'react'
import { useDataFromDummy } from '../hooks/api'
import Layout from '../components/layout'
import Box from '../components/box'
import Helmet from 'react-helmet'

const App = ({ history }) => {
  const [users, isLoading] = useDataFromDummy('https://dummyapi.io/api/user')
  const redirect = id => {
    history.push(`/user/${id}`)
  }

  return (
    <Layout>
      <Helmet title="Exam App" />
      {isLoading &&
        users.data.map(user => (
          <Box key={user.id} redirect={() => redirect(user.id)} user={user} />
        ))}
    </Layout>
  )
}

export default App
