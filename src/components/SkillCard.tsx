import React from 'react'

type Props = {
    text: String
}

const SkillCard = ({text}: Props) => {
  return (
    <span className="px-4 py-2 bg-gray-100 rounded-md font-medium text-black text-xs">{text}</span>
  )
}

export default SkillCard