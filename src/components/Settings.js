import React from 'react'
import { IoMdFlashOff } from "react-icons/io"
import { BsThreeDots } from "react-icons/bs"

const Settings = props => {
    const toggleParticles = (e) => {
        if (props.particles?.current.paused) {
            props.setParticlesPaused(false)
            props.particles?.current.play()
        }else{
            props.setParticlesPaused(true)
            props.particles.current.pause()
        }
    }
    return (
        <div className="settings">
            <div className='settings-body'>
                <IoMdFlashOff 
                    onClick={(e) => toggleParticles(e)} 
                    class={props.particlesPaused ? 'paused' : ''} 
                    title={props.particlesPaused 
                        ? 'Turn on particles background animation' 
                        : 'Turn off particles background animation in case of low performance'
                    } 
                    size='cssSize'/>
            </div>
            <BsThreeDots className='settings-opener' size='cssSize'/>
        </div>
    )
}

export default Settings