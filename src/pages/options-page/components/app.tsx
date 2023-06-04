import React, {useEffect} from 'react'
import DomainRule from '../../../entities/domain-rule'
import Gateway from '../../shared/gateway'
import Button from '../../shared/components/button'
import Input from '../../shared/components/input'

const App = () => {
  const [domainRules, setDomainRules] = React.useState<DomainRule[]>([])

  useEffect(() => {
    const gateway = new Gateway()
    gateway.getDomainRules().then((domainRules) => {
      setDomainRules(domainRules)
    })
  }, [])

  const handleAddNewRule = () => {
    const newDomainRule = new DomainRule('', '')
    setDomainRules([...domainRules, newDomainRule])
  }

  const handleSaveChanges = () => {
    const gateway = new Gateway()
    gateway.saveDomainRules(domainRules)
  }

  return (
    <div className='p-8'>
      <h1 className='text-4xl mb-8'>Settings</h1>
      {domainRules.map((domainRule, index) => (
        <div className='grid grid-cols-2 gap-4 py-2'>
          <Input
            key={`domain-${index}`}
            value={domainRule.domain}
            placeholder='example.com'
            onChange={(event) => {
              const newDomainRules = [...domainRules]
              newDomainRules[index].domain = event.target.value
              setDomainRules(newDomainRules)
            }}
          />
          <Input
            key={`title-${index}`}
            value={domainRule.title}
            placeholder='new tab title'
            onChange={(event) => {
              const newDomainRules = [...domainRules]
              newDomainRules[index].title = event.target.value
              setDomainRules(newDomainRules)
            }}
          />
        </div>
      ))}
      <div className='grid grid-cols-2 gap-4 mt-4'>
        <Button
          styleType='secondary'
          onClick={handleAddNewRule}
        >
          Add new rule
        </Button>
        <Button
          styleType='primary'
          onClick={handleSaveChanges}
        >
          Save Changes
        </Button>
      </div>
    </div>
  )
}

export default App
