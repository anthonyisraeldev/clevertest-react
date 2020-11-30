import React from 'react'
import { Row, Col, Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import BtnAddUser from '../BtnAddUser/BtnAddUser';
import './SearchUsers.scss'

const { Search } = Input;

const SearchUsers = ({ setSearch, filterSearch }) => {
  const [searchValue, setSearchValue] = React.useState('')

  // Submit input search
  const handleSearch = (e) =>{
    e.preventDefault();
    setSearch(searchValue);
    setSearchValue('');
    e.currentTarget.reset();
  }

  return (
    <Row className="margin-b" style={{marginBottom: '5rem'}}>
      <Col xs={ 24 } md={ 12 } style={{marginBottom: "2rem"}}>
        <div className="container-search">
          <form className="form-search" onSubmit={handleSearch} >
          <Search
              onChange={e => setSearchValue(e.target.value.toLowerCase())}
              placeholder="Search user"
              allowClear
              style={{ width: 200, margin: '0 10px' }}
              value={searchValue}
              className="form-search__input"
              prefix={<SearchOutlined  className="form-search__input-icon" />}
            />
            <Button
              type="submit"
              className="form-search__btn-submit"
              size="large"
              htmlType="submit"
            >
              {!filterSearch.length ? 'Refresh' : 'Search'}
            </Button>
          </form>
        </div>
      </Col>
      <Col xs={ 24 } md={ 12 } style={{marginBottom: "2rem"}}>
        <BtnAddUser/>
      </Col>
    </Row>
  )
}

export default SearchUsers
