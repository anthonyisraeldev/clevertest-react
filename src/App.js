import React from 'react';
import Header from './components/Header'
import UsersContextProvider from './context/UsersContext';
import Layout from './layout';
import Home from './pages/Home/Home'

function App() {
  return (
    <Layout>
      <Header/>
      <UsersContextProvider>
        <Home/>
      </UsersContextProvider>
    </Layout>
  );
}

export default App;
