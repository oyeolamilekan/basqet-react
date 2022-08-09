# basqet-react

> Official React package for Basqet

# Basqet React package

Basqet - Allow your customers from anywhere in the world pay you in Bitcoin, QDX, XRP and USDT.

![Basqet pay SDK](https://github.com/oyeolamilekan/basqet-react/blob/master/001_screen_shot.png?raw=true)

## Installation

```sh
npm install basqet-react
```

## Usage

```js
import React from 'react'
import { useBasqet } from 'basqet-react'
// ...
export default function App() {
  const config = {
    email: 'example@gmail.com',
    public_key: 'PUBLIC_KEY',
    amount: '100',
    currency: 'USD',
    metadata: {
      refrence: 'lekan'
    },
    onSuccess: (data: string) => {
      console.log('🚀 onSuccess', data)
    },
    onError: (error) => {
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
```

## Configuration Options

- [`public_key`](#public_key)
- [`email`](#email)
- [`amount`](#amount)
- [`onSuccess`](#onSuccess)
- [`onError`](#onError)
- [`onClose`](#onClose)
- [`onAbandoned`](#onAbandoned)
- [`metadata`](#metadata)

### <a name="key"></a> `key`

**string: Required**
Your public key can be found on your [dashboard](https://dashboard.basqet.com/).

### <a name="email"></a> `email`

**string: Required**
The user's email address

### <a name="amount"></a> `amount`

**string | number: Required**
The amount you intend to send in kobo

### <a name="onSuccess"></a> `onSuccess`

**(response) => void: Required**
This is called when a transaction is successfully. It returns an object as a response with the transaction details.

Check the [Basqet Docs](https://docs.basqet.com/docs) for response object

### <a name="onError"></a> `onError`

**(response) => void: Optional**
This is called when a transaction fails. It returns a response with error type

Check the [Basqet Docs](https://docs.basqet.com/docs) for error object

### <a name="onClose"></a> `onLoad`

**(response) => void: Optional**
This is called when the SDK loads up.

### <a name="onClose"></a> `onClose`

**(response) => void: Optional**
This is called when a user clicks on the close button.

### <a name="metadata"></a> `metadata`

**object: Optional**
This object should contain additional/optional attributes you would like to have in your transaction response

## Support

If you're having trouble with Basqet React package please reach out to oye at <jolalekan@quidax.com> or me <adegbitebidmus@gmail.com> if you have issues with your integration. We're more than happy to help you out.

## Basqet API References

- [Basqet API Docs](https://docs.basqet.com/docs)
- [Basqet Dashboard](https://dashboard.basqet.com/)

## License

[MIT](https://github.com/kamsy/basqet-react/blob/master/LICENSE) for more information.
