import { OrbitControls } from '@react-three/drei'
import { Level } from './Level.js'
import { Physics, Debug } from '@react-three/rapier'
import Lights from './Lights.js'
import Player from './Player.js'

export default function Experience() {
    return <>
        <OrbitControls makeDefault />

        <Physics>
            <Lights />

            <Level />

            <Player />
        </Physics>
    </>
}
