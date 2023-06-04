import React, {useState} from 'react'
import Input from '../../shared/components/input'

const App = () => {
  const [search, setSearch] = useState('')

  return (
    <div className='p-4 w-96'>
      <Input
        placeholder='Enter a command'
        autoFocus={true}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

export default App
