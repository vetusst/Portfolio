import React, { useContext } from 'react'
import { IoMdFlashOff } from "react-icons/io"
import { BsThreeDots } from "react-icons/bs"
import { Context } from '../App'

const ParticlesToggle = props => {
    const ctx = useContext(Context)

    const toggleParticles = (e) => {
        if (ctx.particlesPaused) {
            ctx.setParticlesPaused(false)
            props.particlesRef?.current.play()
        }else{
            ctx.setParticlesPaused(true)
            props.particlesRef?.current.pause()
        }
    }
    return (
        <div className="settings">
            <div className='settings-body'>
                <IoMdFlashOff 
                    onClick={(e) => toggleParticles(e)} 
                    class={ctx.particlesPaused ? 'paused' : ''} 
                    title={ctx.particlesPaused 
                        ? 'Turn on particles background animation' 
                        : 'Turn off particles background animation in case of low performance'
                    } 
                    size='cssSize'/>
            </div>
            <BsThreeDots className='settings-opener' size='cssSize'/>
        </div>
    )
}

export default ParticlesToggle