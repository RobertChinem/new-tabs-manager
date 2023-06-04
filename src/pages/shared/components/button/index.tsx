import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  styleType: 'primary' | 'secondary'
}

const styles: Record<Props['styleType'], string> = {
  primary: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300',
  secondary: 'text-blue-700 bg-white hover:bg-gray-100 focus:ring-blue-300',
}

const Button = ({styleType, children, ...props}: Props) => {
  const baseStyle =
    'focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none'

  return (
    <button
      {...props}
      className={`${baseStyle} ${styles[styleType]}`}
    >
      {children}
    </button>
  )
}

export default Button
