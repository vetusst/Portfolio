import React from 'react'
import { DiCss3 } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";


const Svgs = () => {
    return (
        <div class="about__devSvgs">
            <DiGithubBadge class="circle-animation" id="svg-git" size="cssSize"/>
            <DiNodejsSmall class="circle-animation" id="svg-nodejs" size="cssSize"/>
            <DiCss3 class="circle-animation" id="svg-css" size="cssSize"/>
            <DiJsBadge class="circle-animation" id="svg-js" size="cssSize"/>
            <DiHtml5 class="circle-animation" id="svg-html" size="cssSize"/>
            <DiPython class="circle-animation" id="svg-python" size="cssSize"/>
            <DiReact class="circle-animation" id="svg-react" size="cssSize"/>
        </div>
    )
}

export default Svgs