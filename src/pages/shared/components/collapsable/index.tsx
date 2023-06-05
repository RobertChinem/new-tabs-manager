import React, {useState} from 'react'
import {FiChevronDown} from 'react-icons/fi'

interface CollapsableProps extends React.InputHTMLAttributes<HTMLDivElement> {
  title: string
  children: React.ReactNode
}

const Collapsable = ({
  title,
  className,
  children,
  ...props
}: CollapsableProps) => {
  const baseStyle = 'border border-gray-300 rounded-md'
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <div
      {...props}
      className={`${baseStyle} ${className}`}
    >
      <button
        className='w-full flex justify-between p-2 items-center'
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <h3 className='text-lg inline'>{title}</h3>
        <FiChevronDown className='text-xl inline' />
      </button>
      <div className={`${isCollapsed ? 'hidden' : ''} p-2`}>{children}</div>
    </div>
  )
}

export default Collapsable
