import { useState, useEffect } from 'react'
import axios from 'axios'

export const useDataFromDummy = url => {
  const [state, setState] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    axios.get(url).then(res => {
      setState(res.data)
      setIsLoading(true)
    })
  }, [url])
  return [state, isLoading]
}
