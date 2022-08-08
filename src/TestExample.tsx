import React from 'react'
import  useBasqet  from './useBasqet'

export default function TestApp() {
  const config = {
    email: "johnsonoye34@gmail.com",
    public_key: "PUBLIC_KEY",
    amount: "100",
    currency: "USD",
    metadata: {
      refrence: 'lekan'
    },
    onSuccess: (data: any) => {
      console.log('🚀 onSuccess', data)
    },
    onError: (error: any) => {
      console.log('🚀 onError', error)
    },
    onClose: () => {
      console.log('🚀 onClose: SDK closed')
    },
    onAbandoned: () => {
      console.log('🚀 onClose: SDK closed')
    }
  }

  const handlePayment = useBasqet(config)
  return (
    <div className='App'>
      <h1>Basqet SDK</h1>
      <button onClick={handlePayment} className="payment_button">Pay with Basqet</button>
    </div>
  )
}