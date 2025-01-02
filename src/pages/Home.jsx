import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import PurplePlanet from '../models/PurplePlanet'
import Explore from '../models/Explore'
import Background from '../models/Background'

const Home = () => {
  return (
    <section className='w-full h-screen relative'>
      <Canvas className='w-full h-screen bg-transparent'
        camera={{ near: 0.1, far: 1000 }}>
          <Suspense fallback={<Loader />}>
            <directionalLight position={[1, 10, 6]} intensity={2} />
            <ambientLight intensity={0.5}/>
            <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>

            <Background/>
            <Explore/>
          </Suspense>
      </Canvas>
    </section>
  )
}

export default Home
