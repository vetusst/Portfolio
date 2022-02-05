const particlesConfig = {
    about: {
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

export default particlesConfig