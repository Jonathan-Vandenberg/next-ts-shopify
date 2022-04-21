import type { NextPage } from 'next'
import { useEffect } from 'react'
import play from '../playground'


const message: string = 'Hello World'

const Home: NextPage = () => {

  useEffect(() => {
    play()
  }, [])

  return (
    <div>{message}</div>
  )
}

export default Home
