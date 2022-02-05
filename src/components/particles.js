import Particles from "react-tsparticles";


const MyParticles = (props) => {  
  return (
    <Particles
      container={props.particlesRef}
      options={props.options}
      style= {{
        width: '50% !important',
        position: 'absolute'
      }}
    />
  );
};

export default MyParticles;
