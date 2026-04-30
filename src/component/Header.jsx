import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <div>
        <div className="bg-red-300 py-5">
        <header className="max-w-240 flex justify-between text-1xl text-black    m-auto">
          <h1>
            <span className="font-extrabold text-3xl ">B</span>Rand
          </h1>
          <div className="flex gap-10">
            <a href="">Features</a>
            <a href="">Use Cases</a>
            <a href="">Integration</a>
            <a href="">Portfolio</a>
          </div>
        <Button title= "Join Now" />
        </header>
      </div>
    </div>
  )
}

export default Header
