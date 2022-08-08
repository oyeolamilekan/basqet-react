import { useEffect, useState } from 'react'
import { ConfigProps } from './types'
declare const window: Window &
  typeof globalThis & {
    payWithBasqet: any
  }

const loadedScripts: {
  src?: string
} = {}

type ScriptStatusType = {
  loaded: boolean
  error: boolean
}

const basqJS = 'https://checkout.basqet.com/static/prod/basqet.js'

const useBasqet = (props: ConfigProps) => {
  const [state, setState] = useState<ScriptStatusType>({
    loaded: false,
    error: false
  })

  useEffect(() => {
    const scriptTag = document.getElementById('basqScript')
    const scriptSrc = scriptTag && scriptTag.getAttribute('src')

    if (scriptSrc)
      return setState({
        loaded: true,
        error: false
      })

    loadedScripts.src = basqJS
    const script = document.createElement('script')
    script.id = 'basqScript'
    script.type = 'application/javascript'
    script.src = basqJS
    script.async = true

    const onScriptLoad = () => {
      setState({
        loaded: true,
        error: false
      })
    }

    const onScriptError = () => {
      delete loadedScripts.src

      setState({
        loaded: true,
        error: true
      })

      throw new Error('Unable to load Basqet pay modal')
    }

    script.addEventListener('load', onScriptLoad)
    script.addEventListener('complete', onScriptLoad)
    script.addEventListener('error', onScriptError)

    document.body.appendChild(script)

    return () => {
      script.removeEventListener('load', onScriptLoad)
      script.removeEventListener('complete', onScriptLoad)
      script.removeEventListener('error', onScriptError)
    }
  }, [])

  const handlePayment = () => {
    if (state.error) throw new Error('Unable to load Basqet pay modal')
    if (state.loaded) {
      const basqet =
        window.payWithBasqet &&
        window.payWithBasqet({ ...props, amount: +props.amount })
        return basqet
    }
  }
  return handlePayment
}

export default useBasqet