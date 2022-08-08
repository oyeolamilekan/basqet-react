import { ErrorType } from "./types"

export const config = {
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