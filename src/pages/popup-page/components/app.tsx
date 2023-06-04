import React, {useEffect, useMemo, useState} from 'react'
import Input from '../../shared/components/input'
import Gateway from '../../shared/gateway'
import Command from '../../../entities/command'

const App = () => {
  const [search, setSearch] = useState('')
  const [commands, setCommands] = useState<Command[]>([])

  useEffect(() => {
    const gateway = new Gateway()
    gateway.getCommands().then((commands) => {
      setCommands(commands)
    })
  }, [])

  const filteredCommands = useMemo(() => {
    if (!search || search.length === 0) return commands
    const words = search.split(' ').filter((word) => word.length > 0)
    return commands.filter((command) => {
      return words.every((word) => {
        return command.description.toLowerCase().includes(word.toLowerCase())
      })
    })
  }, [commands, search])

  const handleExecuteCommand = () => {
    const command = filteredCommands[0]
    const gateway = new Gateway()
    gateway.executeCommand(command.action)
    setSearch('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleExecuteCommand()
    }
  }

  return (
    <div className='w-96 p-4 pb-16'>
      <Input
        placeholder='Enter a command'
        autoFocus={true}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div>
        {filteredCommands.map((command) => (
          <div>{JSON.stringify(command, null, 2)}</div>
        ))}
      </div>
    </div>
  )
}

export default App
