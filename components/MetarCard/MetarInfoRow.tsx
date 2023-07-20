import React from 'react'

type Props = {
  title: string,
  content: any
}

const MetarInfoRow = ({ title, content }: Props) => {
  return (
    <div className='flex flex-row justify-between'>
      <p>{title}</p>
      <p>{content}</p>
    </div>
  )
}

export default MetarInfoRow