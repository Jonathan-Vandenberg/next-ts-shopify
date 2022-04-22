import type { NextPage } from 'next'
import { useEffect } from 'react'
import { play2 } from '../playground'


const message: string = 'Hello World'

const Home: NextPage = () => {

  useEffect(() => {
    play2()
  }, [])

  return (
    <div>{message}</div>
  )
}

export default Home
