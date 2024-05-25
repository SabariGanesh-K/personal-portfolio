import React from 'react'

const EpicVictoryBox = ({victory}:{victory:Victory}) => {
  return (
    <div className='mt-6'>
    <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-3xl">
      <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
      
        {victory.status}
      </span>{" "}
      
      {victory.entity}
    </h1>
    <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
  
      {victory.description}
    </p>
  </div>
  )
}

export default EpicVictoryBox