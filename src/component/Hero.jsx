import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div>
      <div className="max-w-220   m-auto text-center py-32">
      <h1 className="text-7xl font-serif  font-bold">The Best way To <span className="bg-red-300 rounded-lg px-3">Review</span>  Creative Assets</h1>
      <p className="text-lg my-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque rerum nulla assumenda aut maiores reprehenderit modi accusantium asperiores, autem quod voluptatum similique? Quam reprehenderit quaerat eum nemo dicta sit corrupti.</p>

      <div className="text-3xl"> 
       <Button title="Join Subscription "  />
       </div>
     </div>
    </div>
  )
}

export default Hero
