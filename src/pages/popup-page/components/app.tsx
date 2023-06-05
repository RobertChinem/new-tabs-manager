import React, {useEffect, useMemo, useState} from 'react'
import Input from '../../shared/components/input'
import Gateway from '../../shared/gateway'
import Command from '../../../entities/command'

const App = () => {
  const [search, setSearch] = useState('')
  const [params, setParams] = useState('')
  const [commands, setCommands] = useState<Command[]>([])
  const filteredCommands = useMemo(() => {
    if (!search || search.length === 0) return commands
    const words = search.split(' ').filter((word) => word.length > 0)
    return commands.filter((command) => {
      return words.every((word) => {
        return command.description.toLowerCase().includes(word.toLowerCase())
      })
    })
  }, [commands, search])
  const selectedCommand = filteredCommands[0]

  useEffect(() => {
    const gateway = new Gateway()
    gateway.getCommands().then((commands) => {
      setCommands(
        commands.sort((a, b) => {
          if (a.description < b.description) return -1
          if (a.description > b.description) return 1
          return 0
        })
      )
    })
  }, [])

  const handleExecuteCommand = () => {
    const command = filteredCommands[0]
    const gateway = new Gateway()
    gateway.executeCommand(command.action, params)
    setSearch('')
    setParams('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleExecuteCommand()
    }
  }

  return (
    <div className='w-96 p-4'>
      <Input
        placeholder='Enter a command'
        autoFocus={true}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className='my-2'>
        {filteredCommands.map((command, index) => (
          <div className={`${index === 0 ? 'bg-blue-700 rounded-md' : ''} p-4`}>
            <h3
              className={`${
                index === 0 ? 'text-white rounded-md' : ''
              } text-lg`}
            >
              {command.description}
            </h3>
          </div>
        ))}
      </div>

      {selectedCommand && !!selectedCommand.hint && (
        <Input
          placeholder={selectedCommand.hint}
          value={params}
          onChange={(e) => setParams(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      )}
    </div>
  )
}

export default App
