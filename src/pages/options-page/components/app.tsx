import React from 'react'
import GroupByDomain from './group-by-domain'
import Tags from './tags'

const App = () => {
  return (
    <div className='p-8'>
      <h1 className='text-4xl mb-8'>Settings</h1>
      <div className='grid grid-cols-1 gap-4'>
        <GroupByDomain />
        <Tags />
      </div>
    </div>
  )
}

export default App
