import {useEffect, useState} from 'react'
import Gateway from '../../../shared/gateway'
import DomainRule from '../../../../entities/domain-rule'
import {FiX} from 'react-icons/fi'
import Button from '../../../shared/components/button'
import React from 'react'
import Input from '../../../shared/components/input'

const GroupByDomain = () => {
  const [domainRules, setDomainRules] = useState<DomainRule[]>([])

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

  const handleDeleteRule = (index: number) => {
    const newDomainRules = [...domainRules]
    newDomainRules.splice(index, 1)
    setDomainRules(newDomainRules)
  }

  return (
    <div className='border rounded-md shadow-md p-4'>
      <h2 className='text-2xl'>Group by domain</h2>
      {domainRules.map((domainRule, index) => (
        <div
          className='grid grid-cols-7 gap-4 py-2'
          key={index}
        >
          <Input
            className='col-span-3'
            value={domainRule.domain}
            placeholder='example.com'
            onChange={(event) => {
              const newDomainRules = [...domainRules]
              newDomainRules[index].domain = event.target.value
              setDomainRules(newDomainRules)
            }}
          />
          <Input
            className='col-span-3'
            value={domainRule.title}
            placeholder='new tab title'
            onChange={(event) => {
              const newDomainRules = [...domainRules]
              newDomainRules[index].title = event.target.value
              setDomainRules(newDomainRules)
            }}
          />
          <Button
            className='col-span-1 justify-center'
            styleType='secondary'
            onClick={() => handleDeleteRule(index)}
          >
            <FiX className='text-red-500 text-xl inline' />
          </Button>
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

export default GroupByDomain
