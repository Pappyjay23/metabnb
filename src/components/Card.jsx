import React from 'react'

const Card = ({item}) => {
  return (
    <div className='w-fit p-3 border border-[#D7D7D7] rounded-[15px] cursor-pointer'>
        <img className='h-[250px] mb-4' src={item.img} alt="Inspirations" />
        <div className='flex text-[10px] justify-between my-2'>
            <p>{item.name}</p>
            <p className='font-bold'>{item.price}</p>
        </div>
        <div className='flex text-[10px] justify-between my-2'>
            <p>{item.distance}</p>
            <p>{item.availability}</p>
        </div>
        <span>
            <img src={item.rating} alt="StarRating" />
        </span>
    </div>
  )
}

export default Card