import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Explore from '../models/Explore'
import Background from '../models/Background'
import HomeInfo from '../components/HomeInfo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand } from '@fortawesome/free-regular-svg-icons'

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(null);
  const [showMessage, setShowMessage] = useState(true);
  const [currentRotation, setCurrentRotation] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className='w-full h-screen relative'>
      {showMessage && (
        <div className='absolute top-10 left-0 right-0 z-20 flex items-center justify-center'>
          <div className='bg-black/50 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2'>
            <FontAwesomeIcon icon={faHand} className='text-lg' />
            Hold and Drag to Explore
          </div>
        </div>
      )}
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`}
        camera={{ near: 0.1, far: 1000, position: [0, 0, 25] }}>
          <Suspense fallback={<Loader />}>
            <directionalLight position={[1, 10, 6]} intensity={2} />
            <ambientLight intensity={0.5}/>
            <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>

            <Background currentRotation={currentRotation}/>
            <Explore
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
              setCurrentRotation={setCurrentRotation}
            />
          </Suspense>
      </Canvas>
    </section>
  )
}

export default Home
