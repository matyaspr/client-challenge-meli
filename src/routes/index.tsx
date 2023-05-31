import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { Details } from '@/pages/Details'
import { SearchResults } from '@/pages/SearchResults'
import { PageNotFound } from '@/pages/PageNotFound'

const RoutesConfig: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/items' element={<SearchResults />} />
      <Route path='/items/:id' element={<Details />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default RoutesConfig
