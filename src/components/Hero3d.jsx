import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere } from '@react-three/drei'

const Hero3d = () => {

    return (
        <section className='w-[600px] h-[750px]'> 
            <Canvas>
                <mesh>
                    <Sphere args={[1, 50, 100]} scale={2}>
                        <MeshDistortMaterial 
                            color="#A8A0ED"
                            attach="material" 
                            distort={0.5} 
                            speed={2} 
                            />
                    </Sphere>
                    
                    <ambientLight intensity={2} />
                    <directionalLight position={[1, 2, 3]} />
                </mesh>
            </Canvas>
        </section>
    )
}

export default Hero3d

