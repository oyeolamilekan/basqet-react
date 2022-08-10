/* eslint-disable camelcase */
export interface ErrorType {
  type: string
}

export interface ConfigProps {
  public_key: string
  amount: string | number
  email: string
  currency: string
  metadata?: {
    [key: string]: any
  }
  onSuccess: (response: string) => void
  onError?: (response: ErrorType) => void
  onAbandoned: () => void
  onClose?: () => void
}
