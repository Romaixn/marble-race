import { Level } from './Level.js'
import { Physics, Debug } from '@react-three/rapier'
import Lights from './Lights.js'
import Player from './Player.js'

export default function Experience() {
    return <>
        <Physics>
            <Lights />

            <Level count={10} />

            <Player />
        </Physics>
    </>
}
