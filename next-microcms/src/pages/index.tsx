import styled from 'styled-components'
import { GetStaticProps } from 'next'
import { client } from '@/lib/client'

export default function Home(props) {
  console.log(props)
  return (
    <>
      <Main></Main>
    </>
  )
}

const Main = styled.main``

export const getStaticProps: GetStaticProps = async () => {
  const res = await client.get({ endpoint: 'news' })
  return {
    props: {
      date: res.contents,
    },
  }
}