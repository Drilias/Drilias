import React, {useState} from 'react';
import {GlobalStyles} from './globalStyle/GlobalStyles'
import Header from './components/Header/Header';
import SearchPage from './pages/SearchPage/SearchPage';
import HistoryPage from './pages/HistoryPage/HistoryPage';

function App() {
  const [currentPage, setCurrentPage] = useState('profileSearcher');
  
  const changePage = (namePage) => {
    setCurrentPage(namePage)
  }

  const choosePage = () => {
    switch (currentPage) {
      case 'profileSearcher':
        return <SearchPage/>
      case 'searcherHistory':
        return <HistoryPage/>
      default:
        return <SearchPage/>
    }
  }
  
  return (
    <>
      <GlobalStyles/>
      <Header changePage={changePage} />
        {choosePage()}     
    </>
  );
}

export default App;
