import React from 'react'
import Tag from '../../../../../entities/tag'
import Collapsable from '../../../../shared/components/collapsable'
import Input from '../../../../shared/components/input'
import Button from '../../../../shared/components/button'
import {FiPlus, FiX} from 'react-icons/fi'

interface TagVisualizerProps {
  tag: Tag
  onChange: (tag: Tag) => void
}

const TagVisualizer = ({tag, onChange}: TagVisualizerProps) => {
  const handleAddURL = () => {
    onChange({...tag, urls: [...tag.urls, '']})
  }

  const handleRemoveURL = (index: number) => {
    onChange({...tag, urls: tag.urls.filter((_, i) => i !== index)})
  }

  return (
    <Collapsable title={tag.name}>
      <div className='mb-2'>
        <label className='block mb-2 text-sm font-medium text-gray-900 '>
          name
        </label>
        <Input
          onChange={(e) => onChange({...tag, name: e.target.value})}
          value={tag.name}
          placeholder='Tag name'
        />
      </div>
      <div className='flex justify-between items-center'>
        <h3 className='inline text-base'>URLs</h3>
        <Button
          styleType='secondary'
          onClick={handleAddURL}
        >
          <FiPlus className='inline text-xl' />
        </Button>
      </div>
      {tag.urls.map((url, index) => (
        <div
          key={index}
          className='grid grid-cols-8 gap-4 py-2'
        >
          <Input
            className='col-span-7'
            value={url}
            placeholder='https://example.com'
            onChange={(e) => {
              const newUrls = [...tag.urls]
              newUrls[index] = e.target.value
              onChange({...tag, urls: newUrls})
            }}
          />
          <Button
            styleType='secondary'
            className='col-span-1 justify-center'
            onClick={() => handleRemoveURL(index)}
          >
            <FiX className='text-red-500 text-xl inline' />
          </Button>
        </div>
      ))}
    </Collapsable>
  )
}
export default TagVisualizer
