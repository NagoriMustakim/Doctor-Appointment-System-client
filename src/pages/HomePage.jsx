import React from 'react'

export const HomePage = () => {
    return (
        <div className='text-2xl bg-red-700 sm:bg-blue-700 lg:bg-green-700 xl:bg-yellow-200 2xl:bg-gray-400'>{process.env.REACT_APP_DEV_SERVER}</div>
    )
}
