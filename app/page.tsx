import Image from 'next/image'
import Container from './components/Container'
import HomeBanner from './components/HomeBanner'
import Products from './components/Products/Products'

export default function Home() {
  return (
    <div className='p-3 lg:p-8'>
      <Container>
        <div>
          <HomeBanner />
          <Products />
        </div>
      </Container>
    </div>
  )
}
