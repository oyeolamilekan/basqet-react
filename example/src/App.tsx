import React from 'react'
import { useBasqet } from 'basqet-react'
import { ErrorType } from '../../dist/types'
// ...
export default function App() {
  const config = {
    email: 'example@gmail.com',
    public_key: 'pub_test_Y4oKBXgfTU1JbJiHeGFc66rc1FFivg-',
    amount: '100',
    currency: 'USD',
    metadata: {
      refrence: 'badmus'
    },
    onSuccess: (data: string) => {
      console.log('🚀 onSuccess', data)
    },
    onError: (error: ErrorType) => {
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
      <button onClick={handlePayment}>Pay with Basqet</button>
    </div>
  )
}
