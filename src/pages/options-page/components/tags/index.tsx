import React, {useEffect, useState} from 'react'
import Tag from '../../../../entities/tag'
import TagVisualizer from './tag-visualizer'
import Button from '../../../shared/components/button'
import Gateway from '../../../shared/gateway'

const Tags = () => {
  const [tags, setTags] = useState<Tag[]>([])

  useEffect(() => {
    const gateway = new Gateway()
    gateway.getTags().then((tags) => {
      setTags(tags)
    })
  }, [])

  const handleAddTag = () => {
    setTags([...tags, {name: '', urls: []}])
  }

  const handleSaveChanges = () => {
    const gateway = new Gateway()
    gateway.saveTags(tags)
  }

  const handleDeleteTag = (index: number) => {
    const newTags = [...tags]
    newTags.splice(index, 1)
    setTags(newTags)
  }

  return (
    <div className='border rounded-md shadow-md p-4'>
      <h2 className='text-2xl mb-2'>Tags</h2>
      <div className='grid grid-cols-1 gap-2'>
        {tags.map((tag, index) => (
          <TagVisualizer
            key={index}
            tag={tag}
            onChange={(newTag) => {
              const newTags = [...tags]
              newTags[index] = newTag
              setTags(newTags)
            }}
            onDelete={() => handleDeleteTag(index)}
          />
        ))}
      </div>
      <div className='grid grid-cols-2 gap-4 mt-4'>
        <Button
          styleType='secondary'
          onClick={handleAddTag}
        >
          Add new tag
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

export default Tags
