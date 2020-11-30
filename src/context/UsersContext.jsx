import React, { createContext, useState, useEffect } from 'react'
import { getUsers } from '../constants'

export const UserListContext = createContext();

const UsersContextProvider = ({ children }) => {
  const [ usersData, setUsersData ] = useState([]);
  const [ user, setUser ] = useState([])
  const [ search, setSearch ] = useState('');


  // Fetch
  useEffect(() => {
    getData();
  }, [])

  // GET USERS DATA FROM API
  const getData = async () => {
  try {
    const res = await fetch( getUsers() )
    const data_json = await res.json();
    setUsersData(data_json);
  } catch (error) {
      console.log(`Error get users: ${ error.message }`)
    }
  }

  // ADD USER
  const saveUser = (user) => {
    setUsersData([user, ...usersData]);
  }

  // FIND USER AND SELECT USER
  const findUser = (id) => {
    setUser(usersData.filter(item => item.id === id));
  }

  // FIRST FILTER:  ALL DATA API BY KEY
  const filteredItems = usersData.filter(item => item.nombre !== undefined)

  // SECOND FILTER: BY SEARCH CRITERIA (INPUT)
  const filterSearch = filteredItems.filter(item => {
    return search !== "" ? item.nombre.toLowerCase().includes(search) : item
  });

  return (
    <UserListContext.Provider value={{
      saveUser,
      filterSearch,
      usersData,
      setUsersData,
      findUser,
      search,
      setSearch,
      user,
      setUser
    }}>
      { children }
    </UserListContext.Provider>
  )
}

export default UsersContextProvider
