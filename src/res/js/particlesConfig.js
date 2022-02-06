const particlesConfig = {
    about: {
        fpsLimit: 60,
        autoPlay: false,
        "background": {
            "color": {
                "value": "#000000"
            },
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
        },
        "style": {
            position: 'absolute'
        },
        "interactivity": {
            "events": {
                "onClick": {
                    "mode": "push"
                },
                "onDiv": {
                    "selectors": "#repulse-div",
                    "mode": "repulse"
                },
                "onHover": {
                    "enable": true,
                    "mode": "none",
                    "parallax": {
                        "enable": true,
                        "force": 60
                    }
                }
            },
        },
        "particles": {
            "color": {
                "value": "#ffffff"
            },
            "links": {
                "color": {
                    "value": "#ffffff"
                },
                "distance": 200,
                "enable": true,
                "opacity": 0.4
            },
            "move": {
                "attract": {
                    "rotate": {
                        "x": 600,
                        "y": 1200
                    }
                },
                "enable": true,
                "path": {},
                "outModes": {
                    "bottom": "out",
                    "left": "out",
                    "right": "out",
                    "top": "out"
                },
                "spin": {}
            },
            "number": {
                "density": {
                    "enable": true
                },
                "value": 80
            },
            "opacity": {
                "random": {
                    "enable": true
                },
                "value": {
                    "min": 0.1,
                    "max": 0.5
                },
                "animation": {
                    "enable": true,
                    "speed": 1,
                    "minimumValue": 0.1
                }
            },
            "size": {
                "random": {
                    "enable": true
                },
                "value": {
                    "min": 0.1,
                    "max": 5
                },
                "animation": {
                    "enable": true,
                    "speed": 20,
                    "minimumValue": 0.1
                }
            },
            // "browserslist": {
            //     "production": [
            //         "> 5%",
            //         "not dead",
            //         "not op_mini all"
            //     ],
            //     "development": [
            //         "> 5%",
            //         "not dead",
            //         "not op_mini all"
            //     ]
            // },
        }
    },
    projects: {
        fpsLimit: 60,
        autoPlay: true,
        "background": {
            "color": {
                "value": "#ffffff"
            },
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
        },
        "fullScreen": {
            "zIndex": 1
        },
        "style": {
            position: 'absolute'
        },
        "interactivity": {
            "events": {
                "onClick": {
                    "mode": "push"
                },
                "onDiv": {
                    "selectors": "#repulse-div",
                    "mode": "repulse"
                },
                "onHover": {
                    "enable": true,
                    "mode": "none",
                    "parallax": {
                        "enable": true,
                        "force": 60
                    }
                }
            },
        },
        "particles": {
            "color": {
                "value": "#000000"
            },
            "links": {
                "color": {
                    "value": "#000000"
                },
                "distance": 200,
                "enable": true,
                "opacity": 0.4
            },
            "move": {
                "attract": {
                    "rotate": {
                        "x": 600,
                        "y": 1200
                    }
                },
                "enable": true,
                "path": {},
                "outModes": {
                    "bottom": "out",
                    "left": "out",
                    "right": "out",
                    "top": "out"
                },
                "spin": {}
            },
            "number": {
                "density": {
                    "enable": true
                },
                "value": 80
            },
            "opacity": {
                "random": {
                    "enable": true
                },
                "value": {
                    "min": 0.1,
                    "max": 0.5
                },
                "animation": {
                    "enable": true,
                    "speed": 1,
                    "minimumValue": 0.1
                }
            },
            "size": {
                "random": {
                    "enable": true
                },
                "value": {
                    "min": 0.1,
                    "max": 5
                },
                "animation": {
                    "enable": true,
                    "speed": 20,
                    "minimumValue": 0.1
                }
            },
            // "browserslist": {
            //     "production": [
            //         "> 5%",
            //         "not dead",
            //         "not op_mini all"
            //     ],
            //     "development": [
            //         "> 5%",
            //         "not dead",
            //         "not op_mini all"
            //     ]
            // },
        }
    }
}
const particlesOldConfig = {
    options1: {
        background: {
            color: {
                value: "#000000",
            },
        },
        particles: {
            number: {
                value: 200,
                density: {
                    enable: true,
                    value_area: 1000,
                },
            },
            color: {
                value: "#ffffff",
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000",
                },
                polygon: {
                    nb_sides: 5,
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100,
                },
            },
            opacity: {
                value: 0.7970391180485954,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                },
            },
            size: {
                value: 3,
                random: false,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false,
                },
            },
            line_linked: {
                enable: true,
                distance: 176.3753266952075,
                color: "#ffffff",
                opacity: 1,
                width: 2,
            },
            move: {
                enable: true,
                speed: 0.2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "bounce",
                bounce: true,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
            },
        },
        interactivity: {
            detectsOn: "window",
            events: {
                onHover: {
                    enable: true,
                    mode: "connect",
                    parallax: {
                        enable: false,
                        force: 200,
                        smooth: 50,
                    },
                },
                resize: true,
            },
            modes: {
                connect: {
                    distance: 150,
                    links: {
                        opacity: 0.1,
                    },
                    radius: 150,
                },
            },
        },
        retina_detect: true,
    },
    options2: {
        fpsLimit: 30,
        background: {
            color: {
                value: "#000000",
            },
        },
        particles: {
            number: {
                value: 50,
                density: {
                    enable: true,
                    value_area: 900,
                },
            },
            color: {
                value: "#ffffff",
            },
            shape: {
                type: "circle",
            },
            opacity: {
                value: 0.6,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                },
            },
            size: {
                value: 10,
                random: false,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false,
                },
            },
            line_linked: {
                enable: true,
                distance: 250,
                color: "#ffffff",
                opacity: 1,
                width: 2,
            },
            move: {
                enable: true,
                speed: 0.2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "bounce",
                bounce: true,
                size: true,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
            },
        },
        interactivity: {
            detectsOn: "window",
            events: {
                onHover: {
                    enable: true,
                    mode: "connect",
                    parallax: {
                        enable: false,
                        force: 200,
                        smooth: 50,
                    },
                },
                resize: true,
            },
            modes: {
                connect: {
                    distance: 160,
                    links: {
                        opacity: 0.5,
                    },
                    radius: 400,
                },
            },
        },
        retina_detect: true,
    },
    options3: {
        background: {
            color: {
                value: "#000000",
            },
        },
        particles: {
            number: {
                value: 10,
                density: {
                    enable: false,
                    value_area: 1000
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "circle",
            },
            opacity: {
                value: 1,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 1,
                    sync: false
                },
            },
            size: {
                value: 3,
                random: false,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                },
            },
            line_linked: {
                enable: false,
                distance: 150,
                color: "#ffffff",
                opacity: 1,
                width: 2,
            },
            move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                },
            },
        },
        interactivity: {
            detect_on: "windows",
            events: {
                onhover: {
                    enable: false,
                    mode: "bubble"
                },
                onclick: {
                    enable: false,
                    mode: "push"
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 203.7962037962038,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 105,
                    size: 4,
                    duration: 2,
                    opacity: 1,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                },
            },
        },
        retina_detect: true,
    },
    options4: {
        "autoPlay": true,
        "backgroundMask": {
            "composite": "destination-out",
            "cover": {
                "color": {
                    "value": "#fff"
                },
                "opacity": 1
            },
            "enable": false
        },
        "fullScreen": {
            "enable": true,
            "zIndex": 1
        },
        "detectRetina": true,
        "duration": 0,
        "fpsLimit": 60,
        "interactivity": {
            "detectsOn": "window",
            "events": {
                "onClick": {
                    "enable": false,
                    "mode": "push"
                },
                "onDiv": {
                    "selectors": "#repulse-div",
                    "enable": true,
                    "mode": "repulse",
                    "type": "circle"
                },
                "onHover": {
                    "enable": true,
                    "mode": "connect",
                    "parallax": {
                        "enable": false,
                        "force": 2,
                        "smooth": 10
                    }
                },
                "resize": true
            },
            "modes": {
                "attract": {
                    "distance": 200,
                    "duration": 0.4,
                    "easing": "ease-out-quad",
                    "factor": 1,
                    "maxSpeed": 50,
                    "speed": 1
                },
                "bounce": {
                    "distance": 200
                },
                "bubble": {
                    "distance": 400,
                    "duration": 2,
                    "mix": false,
                    "opacity": 0.8,
                    "size": 40
                },
                "connect": {
                    "distance": 200,
                    "links": {
                        "opacity": 0.1
                    },
                    "radius": 151
                },
                "grab": {
                    "distance": 400,
                    "links": {
                        "blink": false,
                        "consent": false,
                        "opacity": 1
                    }
                },
                "light": {
                    "area": {
                        "gradient": {
                            "start": {
                                "value": "#ffffff"
                            },
                            "stop": {
                                "value": "#000000"
                            }
                        },
                        "radius": 1000
                    },
                    "shadow": {
                        "color": {
                            "value": "#000000"
                        },
                        "length": 2000
                    }
                },
                "push": {
                    "default": true,
                    "groups": [],
                    "quantity": 4
                },
                "remove": {
                    "quantity": 2
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4,
                    "factor": 100,
                    "speed": 1,
                    "maxSpeed": 50,
                    "easing": "ease-out-quad"
                },
                "slow": {
                    "factor": 3,
                    "radius": 200
                },
                "trail": {
                    "delay": 1,
                    "pauseOnStop": false,
                    "quantity": 1
                }
            }
        },
        "manualParticles": [],
        "motion": {
            "disable": false,
            "reduce": {
                "factor": 4,
                "value": true
            }
        },
        "particles": {
            "bounce": {
                "horizontal": {
                    "random": {
                        "enable": false,
                        "minimumValue": 0.1
                    },
                    "value": 1
                },
                "vertical": {
                    "random": {
                        "enable": false,
                        "minimumValue": 0.1
                    },
                    "value": 1
                }
            },
            "collisions": {
                "bounce": {
                    "horizontal": {
                        "random": {
                            "enable": false,
                            "minimumValue": 0.1
                        },
                        "value": 1
                    },
                    "vertical": {
                        "random": {
                            "enable": false,
                            "minimumValue": 0.1
                        },
                        "value": 1
                    }
                },
                "enable": false,
                "mode": "bounce",
                "overlap": {
                    "enable": true,
                    "retries": 0
                }
            },
            "color": {
                "value": "#ffffff",
                "animation": {
                    "h": {
                        "count": 0,
                        "enable": false,
                        "offset": 0,
                        "speed": 1,
                        "sync": true
                    },
                    "s": {
                        "count": 0,
                        "enable": false,
                        "offset": 0,
                        "speed": 1,
                        "sync": true
                    },
                    "l": {
                        "count": 0,
                        "enable": false,
                        "offset": 0,
                        "speed": 1,
                        "sync": true
                    }
                }
            },
            "destroy": {
                "mode": "none",
                "split": {
                    "count": 1,
                    "factor": {
                        "random": {
                            "enable": false,
                            "minimumValue": 0
                        },
                        "value": 3
                    },
                    "rate": {
                        "random": {
                            "enable": false,
                            "minimumValue": 0
                        },
                        "value": {
                            "min": 4,
                            "max": 9
                        }
                    },
                    "sizeOffset": true
                }
            },
            "gradient": [],
            "groups": {},
            "life": {
                "count": 0,
                "delay": {
                    "random": {
                        "enable": false,
                        "minimumValue": 0
                    },
                    "value": 0,
                    "sync": false
                },
                "duration": {
                    "random": {
                        "enable": false,
                        "minimumValue": 0.0001
                    },
                    "value": 0,
                    "sync": false
                }
            },
            "links": {
                "blink": false,
                "color": {
                    "value": "#ffffff"
                },
                "consent": false,
                "distance": 150,
                "enable": true,
                "frequency": 1,
                "opacity": 0.4,
                "shadow": {
                    "blur": 5,
                    "color": {
                        "value": "#00ff00"
                    },
                    "enable": false
                },
                "triangles": {
                    "enable": false,
                    "frequency": 1
                },
                "width": 1,
                "warp": false
            },
            "move": {
                "angle": {
                    "offset": 0,
                    "value": 90
                },
                "attract": {
                    "distance": 200,
                    "enable": false,
                    "rotate": {
                        "x": 600,
                        "y": 1200
                    }
                },
                "decay": 0,
                "distance": {},
                "direction": "none",
                "drift": 0,
                "enable": true,
                "gravity": {
                    "acceleration": 9.81,
                    "enable": false,
                    "inverse": false,
                    "maxSpeed": 50
                },
                "path": {
                    "clamp": true,
                    "delay": {
                        "random": {
                            "enable": false,
                            "minimumValue": 0
                        },
                        "value": 0
                    },
                    "enable": false,
                    "options": {}
                },
                "outModes": {
                    "default": "out",
                    "bottom": "out",
                    "left": "out",
                    "right": "out",
                    "top": "out"
                },
                "random": false,
                "size": false,
                "speed": 2,
                "spin": {
                    "acceleration": 0,
                    "enable": false
                },
                "straight": false,
                "trail": {
                    "enable": false,
                    "length": 10,
                    "fillColor": {
                        "value": "#000000"
                    }
                },
                "vibrate": false,
                "warp": false
            },
            "number": {
                "density": {
                    "enable": true,
                    "area": 800,
                    "factor": 1000
                },
                "limit": 0,
                "value": 80
            },
            "opacity": {
                "random": {
                    "enable": true,
                    "minimumValue": 0.1
                },
                "value": {
                    "min": 0.1,
                    "max": 0.5
                },
                "animation": {
                    "count": 0,
                    "enable": true,
                    "speed": 3,
                    "sync": false,
                    "destroy": "none",
                    "startValue": "random",
                    "minimumValue": 0.1
                }
            },
            "orbit": {
                "animation": {
                    "count": 0,
                    "enable": false,
                    "speed": 1,
                    "sync": false
                },
                "enable": false,
                "opacity": 1,
                "rotation": {
                    "random": {
                        "enable": false,
                        "minimumValue": 0
                    },
                    "value": 45
                },
                "width": 1
            },
            "reduceDuplicates": false,
            "repulse": {
                "random": {
                    "enable": false,
                    "minimumValue": 0
                },
                "value": 0,
                "enabled": false,
                "distance": 1,
                "duration": 1,
                "factor": 1,
                "speed": 1
            },
            "roll": {
                "darken": {
                    "enable": false,
                    "value": 0
                },
                "enable": false,
                "enlighten": {
                    "enable": false,
                    "value": 0
                },
                "mode": "vertical",
                "speed": 25
            },
            "rotate": {
                "random": {
                    "enable": false,
                    "minimumValue": 0
                },
                "value": 0,
                "animation": {
                    "enable": false,
                    "speed": 0,
                    "sync": false
                },
                "direction": "clockwise",
                "path": false
            },
            "shadow": {
                "blur": 0,
                "color": {
                    "value": "#000000"
                },
                "enable": false,
                "offset": {
                    "x": 0,
                    "y": 0
                }
            },
            "shape": {
                "options": {},
                "type": "circle"
            },
            "size": {
                "random": {
                    "enable": true,
                    "minimumValue": 1
                },
                "value": {
                    "min": 0.1,
                    "max": 5
                },
                "animation": {
                    "count": 0,
                    "enable": true,
                    "speed": 20,
                    "sync": false,
                    "destroy": "none",
                    "startValue": "random",
                    "minimumValue": 0.1
                }
            },
            "stroke": {
                "width": 0
            },
            "tilt": {
                "random": {
                    "enable": false,
                    "minimumValue": 0
                },
                "value": 0,
                "animation": {
                    "enable": false,
                    "speed": 0,
                    "sync": false
                },
                "direction": "clockwise",
                "enable": false
            },
            "twinkle": {
                "lines": {
                    "enable": false,
                    "frequency": 0.05,
                    "opacity": 1
                },
                "particles": {
                    "enable": false,
                    "frequency": 0.05,
                    "opacity": 1
                }
            },
            "wobble": {
                "distance": 5,
                "enable": false,
                "speed": 50
            },
            "zIndex": {
                "random": {
                    "enable": false,
                    "minimumValue": 0
                },
                "value": 0,
                "opacityRate": 1,
                "sizeRate": 1,
                "velocityRate": 1
            }
        },
        "pauseOnBlur": true,
        "pauseOnOutsideViewport": true,
        "responsive": [],
        "themes": [],
        "zLayers": 100
    },
    polygon1: {
        "autoPlay": true,
        "background": {
            "color": {
                "value": "#000000"
            },
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover",
            "opacity": 1
        },
        "backgroundMask": {
            "composite": "destination-out",
            "cover": {
                "color": {
                    "value": "#fff"
                },
                "opacity": 1
            },
            "enable": false
        },
        "fullScreen": {
            "enable": true,
            "zIndex": 1
        },
        "detectRetina": false,
        "duration": 0,
        "fpsLimit": 30,
        "interactivity": {
            "detectsOn": "window",
            "events": {
                "onClick": {
                    "enable": false,
                    "mode": "push"
                },
                "onDiv": {
                    "selectors": "#repulse-div",
                    "enable": false,
                    "mode": "repulse",
                    "type": "circle"
                },
                "onHover": {
                    "enable": true,
                    "mode": "bubble",
                    "parallax": {
                        "enable": false,
                        "force": 2,
                        "smooth": 10
                    }
                },
                "resize": true
            },
            "modes": {
                "attract": {
                    "distance": 200,
                    "duration": 0.4,
                    "easing": "ease-out-quad",
                    "factor": 1,
                    "maxSpeed": 50,
                    "speed": 1
                },
                "bounce": {
                    "distance": 200
                },
                "bubble": {
                    "distance": 40,
                    "duration": 2,
                    "mix": false,
                    "opacity": 8,
                    "size": 6
                },
                "connect": {
                    "distance": 80,
                    "links": {
                        "opacity": 0.5
                    },
                    "radius": 60
                },
                "grab": {
                    "distance": 400,
                    "links": {
                        "blink": false,
                        "consent": false,
                        "opacity": 1
                    }
                },
                "light": {
                    "area": {
                        "gradient": {
                            "start": {
                                "value": "#ffffff"
                            },
                            "stop": {
                                "value": "#000000"
                            }
                        },
                        "radius": 1000
                    },
                    "shadow": {
                        "color": {
                            "value": "#000000"
                        },
                        "length": 2000
                    }
                },
                "push": {
                    "default": true,
                    "groups": [],
                    "quantity": 4
                },
                "remove": {
                    "quantity": 2
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4,
                    "factor": 100,
                    "speed": 1,
                    "maxSpeed": 50,
                    "easing": "ease-out-quad"
                },
                "slow": {
                    "factor": 1,
                    "radius": 0
                },
                "trail": {
                    "delay": 1,
                    "pauseOnStop": false,
                    "quantity": 1
                }
            }
        },
        "manualParticles": [],
        "motion": {
            "disable": false,
            "reduce": {
                "factor": 4,
                "value": true
            }
        },
        "particles": {
            "bounce": {
                "horizontal": {
                    "random": {
                        "enable": false,
                        "minimumValue": 0.1
                    },
                    "value": 1
                },
                "vertical": {
                    "random": {
                        "enable": false,
                        "minimumValue": 0.1
                    },
                    "value": 1
                }
            },
            "collisions": {
                "bounce": {
                    "horizontal": {
                        "random": {
                            "enable": false,
                            "minimumValue": 0.1
                        },
                        "value": 1
                    },
                    "vertical": {
                        "random": {
                            "enable": false,
                            "minimumValue": 0.1
                        },
                        "value": 1
                    }
                },
                "enable": false,
                "mode": "bounce",
                "overlap": {
                    "enable": true,
                    "retries": 0
                }
            },
            "color": {
                "value": [
                    "#4285f4",
                    "#34A853",
                    "#FBBC05",
                    "#EA4335"
                ],
                "animation": {
                    "h": {
                        "count": 0,
                        "enable": false,
                        "offset": 0,
                        "speed": 1,
                        "sync": true
                    },
                    "s": {
                        "count": 0,
                        "enable": false,
                        "offset": 0,
                        "speed": 1,
                        "sync": true
                    },
                    "l": {
                        "count": 0,
                        "enable": false,
                        "offset": 0,
                        "speed": 1,
                        "sync": true
                    }
                }
            },
            "destroy": {
                "mode": "none",
                "split": {
                    "count": 1,
                    "factor": {
                        "random": {
                            "enable": false,
                            "minimumValue": 0
                        },
                        "value": 3
                    },
                    "rate": {
                        "random": {
                            "enable": false,
                            "minimumValue": 0
                        },
                        "value": {
                            "min": 4,
                            "max": 9
                        }
                    },
                    "sizeOffset": true
                }
            },
            "gradient": [],
            "groups": {},
            "life": {
                "count": 0,
                "delay": {
                    "random": {
                        "enable": false,
                        "minimumValue": 0
                    },
                    "value": 0,
                    "sync": false
                },
                "duration": {
                    "random": {
                        "enable": false,
                        "minimumValue": 0.0001
                    },
                    "value": 0,
                    "sync": false
                }
            },
            "links": {
                "blink": false,
                "color": {
                    "value": "random"
                },
                "consent": false,
                "distance": 40,
                "enable": true,
                "frequency": 1,
                "opacity": 1,
                "shadow": {
                    "blur": 5,
                    "color": {
                        "value": "#00ff00"
                    },
                    "enable": false
                },
                "triangles": {
                    "enable": false,
                    "frequency": 1
                },
                "width": 1,
                "warp": false
            },
            "move": {
                "angle": {
                    "offset": 0,
                    "value": 90
                },
                "attract": {
                    "distance": 200,
                    "enable": false,
                    "rotate": {
                        "x": 600,
                        "y": 1200
                    }
                },
                "decay": 0,
                "distance": {},
                "direction": "none",
                "drift": 0,
                "enable": true,
                "gravity": {
                    "acceleration": 9.81,
                    "enable": false,
                    "inverse": false,
                    "maxSpeed": 50
                },
                "path": {
                    "clamp": true,
                    "delay": {
                        "random": {
                            "enable": false,
                            "minimumValue": 0
                        },
                        "value": 0
                    },
                    "enable": false,
                    "options": {}
                },
                "outModes": {
                    "default": "",
                    "bottom": "bounce",
                    "left": "bounce",
                    "right": "bounce",
                    "top": "bounce"
                },
                "random": false,
                "size": false,
                "speed": 0.1,
                "spin": {
                    "acceleration": 0,
                    "enable": false
                },
                "straight": false,
                "trail": {
                    "enable": false,
                    "length": 10,
                    "fillColor": {
                        "value": "#000000"
                    }
                },
                "vibrate": false,
                "warp": false
            },
            "number": {
                "density": {
                    "enable": false,
                    "area": 2000,
                    "factor": 1000
                },
                "limit": 0,
                "value": 200
            },
            "opacity": {
                "random": {
                    "enable": false,
                    "minimumValue": 0.1
                },
                "value": {
                    "min": 0.05,
                    "max": 0.4
                },
                "animation": {
                    "count": 0,
                    "enable": true,
                    "speed": 2,
                    "sync": false,
                    "destroy": "none",
                    "startValue": "random",
                    "minimumValue": 0.05
                }
            },
            "orbit": {
                "animation": {
                    "count": 0,
                    "enable": false,
                    "speed": 1,
                    "sync": false
                },
                "enable": false,
                "opacity": 1,
                "rotation": {
                    "random": {
                        "enable": false,
                        "minimumValue": 0
                    },
                    "value": 45
                },
                "width": 1
            },
            "reduceDuplicates": false,
            "repulse": {
                "random": {
                    "enable": false,
                    "minimumValue": 0
                },
                "value": 0,
                "enabled": false,
                "distance": 1,
                "duration": 1,
                "factor": 1,
                "speed": 1
            },
            "roll": {
                "darken": {
                    "enable": false,
                    "value": 0
                },
                "enable": false,
                "enlighten": {
                    "enable": false,
                    "value": 0
                },
                "mode": "vertical",
                "speed": 25
            },
            "rotate": {
                "random": {
                    "enable": false,
                    "minimumValue": 0
                },
                "value": 0,
                "animation": {
                    "enable": false,
                    "speed": 0,
                    "sync": false
                },
                "direction": "clockwise",
                "path": false
            },
            "shadow": {
                "blur": 0,
                "color": {
                    "value": "#000000"
                },
                "enable": false,
                "offset": {
                    "x": 0,
                    "y": 0
                }
            },
            "shape": {
                "options": {},
                "type": "circle"
            },
            "size": {
                "random": {
                    "enable": true,
                    "minimumValue": 1
                },
                "value": 1,
                "animation": {
                    "count": 0,
                    "enable": false,
                    "speed": 40,
                    "sync": false,
                    "destroy": "none",
                    "startValue": "random",
                    "minimumValue": 0.1
                }
            },
            "stroke": {
                "width": 0
            },
            "tilt": {
                "random": {
                    "enable": false,
                    "minimumValue": 0
                },
                "value": 0,
                "animation": {
                    "enable": false,
                    "speed": 0,
                    "sync": false
                },
                "direction": "clockwise",
                "enable": false
            },
            "twinkle": {
                "lines": {
                    "enable": false,
                    "frequency": 0.05,
                    "opacity": 1
                },
                "particles": {
                    "enable": false,
                    "frequency": 0.05,
                    "opacity": 1
                }
            },
            "wobble": {
                "distance": 5,
                "enable": false,
                "speed": 50
            },
            "zIndex": {
                "random": {
                    "enable": false,
                    "minimumValue": 0
                },
                "value": 0,
                "opacityRate": 1,
                "sizeRate": 1,
                "velocityRate": 1
            }
        },
        "pauseOnBlur": true,
        "pauseOnOutsideViewport": true,
        "responsive": [],
        "themes": [],
        "zLayers": 100,
        "polygon": {
            "draw": {
                "enable": false,
                "stroke": {
                    "color": {
                        "value": "rgba(255,255,255,1)"
                    },
                    "width": 0.5,
                    "opacity": 0.2
                }
            },
            "enable": true,
            "inline": {
                "arrangement": "random-length"
            },
            "move": {
                "radius": 1,
                "type": "path"
            },
            "scale": 0.1,
            "type": "inline",
            "data": `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           viewBox="0 0 1280 1280" style="enable-background:new 0 0 1280 1280;" xml:space="preserve">
        <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)">
          <path d="M550,12465c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C706,12478,612,12485,550,12465z"/>
          <path d="M1830,12465c-151-50-253-216-222-362c25-119,136-230,254-255c194-41,395,142,375,339c-11,105-90,213-190,262
            C1986,12478,1892,12485,1830,12465z"/>
          <path d="M3110,12465c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C3266,12478,3172,12485,3110,12465z"/>
          <path d="M4390,12465c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C4546,12478,4452,12485,4390,12465z"/>
          <path d="M5670,12465c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C5826,12478,5732,12485,5670,12465z"/>
          <path d="M6950,12465c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C7106,12478,7012,12485,6950,12465z"/>
          <path d="M8230,12465c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C8386,12478,8292,12485,8230,12465z"/>
          <path d="M9510,12465c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C9666,12478,9572,12485,9510,12465z"/>
          <path d="M10790,12465c-105-35-200-141-222-248c-25-117,32-244,142-319c107-74,229-75,337-3c177,118,201,338,53,485
            C11015,12466,10893,12499,10790,12465z"/>
          <path d="M12070,12465c-105-35-200-141-222-248c-25-117,32-244,142-319c107-74,229-75,337-3c177,118,201,338,53,485
            C12295,12466,12173,12499,12070,12465z"/>
          <path d="M550,11185c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C706,11198,612,11205,550,11185z"/>
          <path d="M1830,11185c-151-50-253-216-222-362c25-119,136-230,254-255c194-41,395,142,375,339c-11,105-90,213-190,262
            C1986,11198,1892,11205,1830,11185z"/>
          <path d="M3110,11185c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C3266,11198,3172,11205,3110,11185z"/>
          <path d="M4390,11185c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C4546,11198,4452,11205,4390,11185z"/>
          <path d="M5670,11185c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C5826,11198,5732,11205,5670,11185z"/>
          <path d="M6950,11185c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C7106,11198,7012,11205,6950,11185z"/>
          <path d="M8230,11185c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C8386,11198,8292,11205,8230,11185z"/>
          <path d="M9510,11185c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C9666,11198,9572,11205,9510,11185z"/>
          <path d="M10790,11185c-105-35-200-141-222-248c-25-117,32-244,142-319c107-74,229-75,337-3c177,118,201,338,53,485
            C11015,11186,10893,11219,10790,11185z"/>
          <path d="M12070,11185c-105-35-200-141-222-248c-25-117,32-244,142-319c107-74,229-75,337-3c177,118,201,338,53,485
            C12295,11186,12173,11219,12070,11185z"/>
          <path d="M550,9905c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C706,9918,612,9925,550,9905z"/>
          <path d="M1830,9905c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C1986,9918,1892,9925,1830,9905z"/>
          <path d="M3110,9905c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C3266,9918,3172,9925,3110,9905z"/>
          <path d="M4390,9905c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C4546,9918,4452,9925,4390,9905z"/>
          <path d="M5670,9905c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C5826,9918,5732,9925,5670,9905z"/>
          <path d="M6950,9905c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C7106,9918,7012,9925,6950,9905z"/>
          <path d="M8230,9905c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C8386,9918,8292,9925,8230,9905z"/>
          <path d="M9510,9905c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C9666,9918,9572,9925,9510,9905z"/>
          <path d="M10790,9905c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C10946,9918,10852,9925,10790,9905z"/>
          <path d="M12070,9905c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C12226,9918,12132,9925,12070,9905z"/>
          <path d="M550,8625c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C706,8638,612,8645,550,8625z"/>
          <path d="M1830,8625c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C1986,8638,1892,8645,1830,8625z"/>
          <path d="M3110,8625c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C3266,8638,3172,8645,3110,8625z"/>
          <path d="M4390,8625c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C4546,8638,4452,8645,4390,8625z"/>
          <path d="M5670,8625c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C5826,8638,5732,8645,5670,8625z"/>
          <path d="M6950,8625c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C7106,8638,7012,8645,6950,8625z"/>
          <path d="M8230,8625c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C8386,8638,8292,8645,8230,8625z"/>
          <path d="M9510,8625c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C9666,8638,9572,8645,9510,8625z"/>
          <path d="M10790,8625c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C10946,8638,10852,8645,10790,8625z"/>
          <path d="M12070,8625c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C12226,8638,12132,8645,12070,8625z"/>
          <path d="M550,7345c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C706,7358,612,7365,550,7345z"/>
          <path d="M1830,7345c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C1986,7358,1892,7365,1830,7345z"/>
          <path d="M3110,7345c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C3266,7358,3172,7365,3110,7345z"/>
          <path d="M4390,7345c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C4546,7358,4452,7365,4390,7345z"/>
          <path d="M5670,7345c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C5826,7358,5732,7365,5670,7345z"/>
          <path d="M6950,7345c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C7106,7358,7012,7365,6950,7345z"/>
          <path d="M8230,7345c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C8386,7358,8292,7365,8230,7345z"/>
          <path d="M9510,7345c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C9666,7358,9572,7365,9510,7345z"/>
          <path d="M10790,7345c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C10946,7358,10852,7365,10790,7345z"/>
          <path d="M12070,7345c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C12226,7358,12132,7365,12070,7345z"/>
          <path d="M550,6065c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C706,6078,612,6085,550,6065z"/>
          <path d="M1830,6065c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C1986,6078,1892,6085,1830,6065z"/>
          <path d="M3110,6065c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C3266,6078,3172,6085,3110,6065z"/>
          <path d="M4390,6065c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C4546,6078,4452,6085,4390,6065z"/>
          <path d="M5670,6065c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C5826,6078,5732,6085,5670,6065z"/>
          <path d="M6950,6065c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C7106,6078,7012,6085,6950,6065z"/>
          <path d="M8230,6065c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C8386,6078,8292,6085,8230,6065z"/>
          <path d="M9510,6065c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C9666,6078,9572,6085,9510,6065z"/>
          <path d="M10790,6065c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C10946,6078,10852,6085,10790,6065z"/>
          <path d="M12070,6065c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C12226,6078,12132,6085,12070,6065z"/>
          <path d="M550,4785c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C706,4798,612,4805,550,4785z"/>
          <path d="M1830,4785c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C1986,4798,1892,4805,1830,4785z"/>
          <path d="M3110,4785c-105-35-200-141-222-248c-25-117,32-244,142-319c107-74,229-75,337-3c177,118,201,338,53,485
            C3335,4786,3213,4819,3110,4785z"/>
          <path d="M4390,4785c-105-35-200-141-222-248c-25-117,32-244,142-319c107-74,229-75,337-3c177,118,201,338,53,485
            C4615,4786,4493,4819,4390,4785z"/>
          <path d="M5670,4785c-151-50-253-216-222-362c25-119,136-230,255-255c193-41,394,142,374,339c-11,105-90,213-190,262
            C5826,4798,5732,4805,5670,4785z"/>
          <path d="M6950,4785c-151-50-253-216-222-362c25-119,136-230,255-255c193-41,394,142,374,339c-11,105-90,213-190,262
            C7106,4798,7012,4805,6950,4785z"/>
          <path d="M8230,4785c-151-50-253-216-222-362c25-119,136-230,255-255c193-41,394,142,374,339c-11,105-90,213-190,262
            C8386,4798,8292,4805,8230,4785z"/>
          <path d="M9510,4785c-151-50-253-216-222-362c25-119,136-230,255-255c193-41,394,142,374,339c-11,105-90,213-190,262
            C9666,4798,9572,4805,9510,4785z"/>
          <path d="M10790,4785c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C10946,4798,10852,4805,10790,4785z"/>
          <path d="M12070,4785c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C12226,4798,12132,4805,12070,4785z"/>
          <path d="M550,3505c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C706,3518,612,3525,550,3505z"/>
          <path d="M1830,3505c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C1986,3518,1892,3525,1830,3505z"/>
          <path d="M3110,3505c-105-35-200-141-222-248c-25-117,32-244,142-319c107-74,229-75,337-3c177,118,201,338,53,485
            C3335,3506,3213,3539,3110,3505z"/>
          <path d="M4390,3505c-105-35-200-141-222-248c-25-117,32-244,142-319c107-74,229-75,337-3c177,118,201,338,53,485
            C4615,3506,4493,3539,4390,3505z"/>
          <path d="M5670,3505c-151-50-253-216-222-362c25-119,136-230,255-255c193-41,394,142,374,339c-11,105-90,213-190,262
            C5826,3518,5732,3525,5670,3505z"/>
          <path d="M6950,3505c-151-50-253-216-222-362c25-119,136-230,255-255c193-41,394,142,374,339c-11,105-90,213-190,262
            C7106,3518,7012,3525,6950,3505z"/>
          <path d="M8230,3505c-151-50-253-216-222-362c25-119,136-230,255-255c193-41,394,142,374,339c-11,105-90,213-190,262
            C8386,3518,8292,3525,8230,3505z"/>
          <path d="M9510,3505c-151-50-253-216-222-362c25-119,136-230,255-255c193-41,394,142,374,339c-11,105-90,213-190,262
            C9666,3518,9572,3525,9510,3505z"/>
          <path d="M10790,3505c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C10946,3518,10852,3525,10790,3505z"/>
          <path d="M12070,3505c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C12226,3518,12132,3525,12070,3505z"/>
          <path d="M550,2225c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C706,2238,612,2245,550,2225z"/>
          <path d="M1830,2225c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C1986,2238,1892,2245,1830,2225z"/>
          <path d="M3110,2225c-105-35-200-141-222-248c-25-117,32-244,142-319c107-74,229-75,337-3c177,118,201,338,53,485
            C3335,2226,3213,2259,3110,2225z"/>
          <path d="M4390,2225c-105-35-200-141-222-248c-25-117,32-244,142-319c107-74,229-75,337-3c177,118,201,338,53,485
            C4615,2226,4493,2259,4390,2225z"/>
          <path d="M5670,2225c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C5826,2238,5732,2245,5670,2225z"/>
          <path d="M6950,2225c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C7106,2238,7012,2245,6950,2225z"/>
          <path d="M8230,2225c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C8386,2238,8292,2245,8230,2225z"/>
          <path d="M9510,2225c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C9666,2238,9572,2245,9510,2225z"/>
          <path d="M10790,2225c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C10946,2238,10852,2245,10790,2225z"/>
          <path d="M12070,2225c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C12226,2238,12132,2245,12070,2225z"/>
          <path d="M550,945c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C706,958,612,965,550,945z"/>
          <path d="M1830,945c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C1986,958,1892,965,1830,945z"/>
          <path d="M3110,945c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C3266,958,3172,965,3110,945z"/>
          <path d="M4390,945c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C4546,958,4452,965,4390,945z"/>
          <path d="M5670,945c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C5826,958,5732,965,5670,945z"/>
          <path d="M6950,945c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C7106,958,7012,965,6950,945z"/>
          <path d="M8230,945c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C8386,958,8292,965,8230,945z"/>
          <path d="M9510,945c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C9666,958,9572,965,9510,945z"/>
          <path d="M10790,945c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C10946,958,10852,965,10790,945z"/>
          <path d="M12070,945c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262
            C12226,958,12132,965,12070,945z"/></g></svg>`,
            "position": {
                "x": 0,
                "y": 0
            }
        }
    },
    polygon2: {
        fpsLimit: 30,
        background: {
            color: {
                value: "#000000",
            },
        },
        particles: {
            number: {
                value: 60,
                density: {
                    enable: false,
                    value_area: 900,
                },
            },
            color: {
                value: "#ffffff",
            },
            shape: {
                type: "circle",
            },
            opacity: {
                value: 1,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                },
            },
            size: {
                value: 4,
                random: false,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false,
                },
            },
            line_linked: {
                enable: true,
                distance: 250,
                color: "#ffffff",
                opacity: 1,
                width: 2,
            },
            move: {
                enable: true,
                speed: 0.5,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "bounce",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
            },
        },
        interactivity: {
            detectsOn: "window",
            events: {
                onHover: {
                    enable: false,
                    mode: "connect",
                    parallax: {
                        enable: false,
                        force: 200,
                        smooth: 50,
                    },
                },
                resize: true,
            },
            modes: {
                connect: {
                    distance: 160,
                    links: {
                        opacity: 0.5,
                    },
                    radius: 400,
                },
            },
        },
        "polygon": {
            "draw": {
                "enable": false,
                "stroke": {
                    "color": {
                        "value": "rgba(255,255,255,1)"
                    },
                    "width": 1,
                    "opacity": 0.5
                }
            },
            "enable": true,
            "inline": {
                "arrangement": "one-per-point"
            },
            "move": {
                "radius": 10,
                "type": "radius"
            },
            "scale": 1,
            "type": "inline",
            "data": `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 1920 1080" style="enable-background:new 0 0 1920 1080;" xml:space="preserve">
      <style type="text/css">
        .st0{fill:#FFFFFF;stroke:#000000;stroke-miterlimit:10;}
      </style>
      <path class="st0" d="M73.5,80.5c9.18,56.12,12.58,102.31,14,134c3.02,67.56-0.66,123.38-8,235c-2.53,38.39-2.54,32.48-6,84
        c-1.17,17.39-3.97,59.78-10,175c-0.99,18.89,0.31-5.6-4,148c-1.46,52.18-2.01,69.17,10,88c21.12,33.12,72.67,58.73,118,40
        c35.09-14.5,54.34-50.56,57-81c3.5-39.96-23.62-47.06-33-99c-0.57-3.18-12.49-74.86,27-136c28.61-44.3,59-44.02,60-72
        c1.17-32.8-40.27-42.42-53-97c-3.98-17.07-9.61-41.18,3-57c23.38-29.32,83.65,2.25,107-27c11.15-13.97,11.19-38.44,2-55
        c-24.41-43.97-103.26-12.97-138-60c-16.69-22.59-17.16-55.01-8-77c13.46-32.34,48.98-44.56,120-69c25.64-8.82,47.07-16.2,78-21
        c35.47-5.51,119.84-18.61,138,15c16.23,30.03-27.92,83.52-30,86c-31.71,37.7-61.14,33.62-81,71c-3.61,6.79-20.87,39.28-8,63
        c19.56,36.04,90.39,18.12,97,41c6.65,23.01-58.59,63.33-71,71c-46.78,28.91-71.46,28.47-76,47c-5.77,23.57,26.56,55.27,57,72
        c76.07,41.82,158.27,0.04,167,21c6.56,15.76-34.81,51.58-71,72c-50.81,28.66-75.13,17.77-116,49c-11.12,8.5-52.14,39.84-46,70
        c4.95,24.32,38.27,36.59,72,49c58.13,21.39,97.87,17.3,99,26c2.22,17.14-151.84,35.47-153,71c-0.62,19.05,42.98,34.48,84,49
        c67.43,23.87,136.47,48.3,174,14c30.14-27.54,26.75-80.87,26-90c-3.25-39.58-22.66-49.31-17-65c17.6-48.79,242.37-57.89,285,35
        c12.39,27,9.26,62.33-8,87c-25.87,36.97-82.98,49.23-121,28c-30.05-16.78-47.42-54.05-47-88c1.42-113.59,201.65-155.84,192-241
        c-4.95-43.71-63.01-79.38-100-92c-56.29-19.21-88.58,6.5-115-18c-31.68-29.38-28.56-106.51,8-137c41.73-34.8,109.38,5.85,131-26
        c12.67-18.68,2.05-51.26-12-71c-40.75-57.25-123.87-25.4-152-74c-18.05-31.19-5.48-81.72,21-105c29.71-26.12,59.94-2.97,114-31
        c31.81-16.49,27.45-27.67,66-51c15.7-9.5,81.47-49.3,109-28c18.58,14.38,1.29,42.31,18,103c5.69,20.66,18.41,66.84,40,69
        c24.2,2.42,50.48-51.32,65-81c22.42-45.84,23.32-70.07,35-71c10.4-0.83,19.87,17.59,56,98c33.04,73.55,35.42,81.07,44,83
        c41.08,9.26,64.51-145.48,170-181c64.07-21.58,154.52,2.14,183,60c11.77,23.92,15.96,59.78,0,90c-18.84,35.66-54.48,42.17-221,88
        c-69.16,19.03-110.36,30.94-157,64c-25.66,18.19-70.42,49.91-65,79c6.92,37.14,92.91,55.35,155,56c123.92,1.29,235.9-66.55,269-88
        c60.42-39.14,84.69-70.56,122-62c37.65,8.63,71.14,53.97,65,93c-5.98,38-47.52,57.32-87,75c-58.45,26.17-113.05,32.19-222,33
        c-71.06,0.53-123.32,0.92-200-4c-89.54-5.74-150.8-14.78-231,10c-68.14,21.05-72.4,42.55-73,48c-2.95,26.95,41.09,51.58,49,56
        c48.17,26.93,98.77,21.32,198,9c125.73-15.61,188.6-23.42,203-26c47.1-8.44,93.06-15.63,185-30c66.8-10.44,105.76-15.97,129,8
        c14.63,15.09,21.72,40.51,14,60c-10.73,27.09-47.38,35.96-107,45c-140.02,21.23-253.71,20.21-270,20c-98.87-1.3-148.31-1.94-161-4
        c-21.38-3.47-107.04-18.6-157,4c-8.68,3.92-17.68,9.62-19,18c-2.52,16.01,24.56,32.16,31,36c46.22,27.56,101.78,18.25,116,16
        c116.42-18.41,99.72,19.38,315,5c48.8-3.26,96.53-3.84,192-5c56.9-0.69,93.52-0.42,107,22c13.2,21.96,1.53,60.73-20,85
        c-46.66,52.57-124.62,20.1-384,13c-104.33-2.86-97.8,2.23-149-3c-106.99-10.93-166.89-36.35-192-7c-13.83,16.17-14.4,45.77-4,67
        c32.95,67.28,160.85,19.45,469,39c63.42,4.02,135.55,10.97,218-25c41.34-18.03,99.97-43.61,108-79
        c32.99-145.37-810.61-354.67-795-554c13.74-175.39,688.26-285.7,691-276c2.28,8.08-422.04,238.37-796,104
        c-179.44-64.48-281.03-189.11-343-148c-96.33,63.91,69.58,417.94,9,449c-72.75,37.29-358.28-449.5-389-432
        c-32.96,18.78,161.93,655.43,440,646c125.42-4.25,223.81-138.45,278-233"/>
      </svg>`,
            "position": {
                "x": 0,
                "y": -10
            }
        },
        retina_detect: true,
    },
}

export default particlesConfig