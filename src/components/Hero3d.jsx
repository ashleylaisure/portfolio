import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import { useEffect, useState } from 'react';

const Hero3d = () => {
    const [primaryColor, setPrimaryColor] = useState('#A8A0ED'); // fallback

    useEffect(() => {
        const root = getComputedStyle(document.documentElement);
        const cssColor = root.getPropertyValue('--secondary').trim();
        setPrimaryColor(cssColor);
    }, []);

    return (
        <section className='w-[600px] h-[750px]'> 
            <Canvas>
                <mesh>
                    <Sphere args={[1, 50, 100]} scale={2}>
                        <MeshDistortMaterial 
                            color={primaryColor}
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

