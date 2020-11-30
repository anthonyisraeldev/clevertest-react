import React, { useContext } from 'react'
import { Row, Col } from 'antd'
import SearchUsers from '../../components/SearchUsers'
import CardUserNames from '../../components/CardUserNames'
import CardUsersInfo from '../../components/CardUsersInfo/CardUsersInfo'
import { UserListContext } from '../../context/UsersContext'

const Home = () => {
  const {
    usersData,
    user,
    findUser,
    filterSearch,
    setSearch
  } = useContext(UserListContext);

  return (
    <div className="container">
      <SearchUsers setSearch={ setSearch } filterSearch= { filterSearch }/>
      <Row align="center" justify="space-between">
        <Col xs={ 24 } md={ 11 }>
          <CardUserNames
            usersData= { usersData }
            findUser={ findUser }
            filterSearch={ filterSearch }
          />
        </Col>
        <Col xs={ 24 } md={ 11 }>
          <CardUsersInfo user={ user }/>
        </Col>
      </Row>
    </div>
  )
}

export default Home
