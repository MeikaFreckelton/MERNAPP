import React, { useState } from 'react'
import { useForm, useStep } from 'react-hooks-helper'

// form components : 
import Details from './formComponents/Details'
import Skills from './formComponents/Skills'
import Work from './formComponents/Work'
import Education from './formComponents/Education'
import Links from './formComponents/Links'
import Review from './formComponents/Review'
// import profileImg from './../../img/default-profile.png'

// import ImageUpload from './../ImageUpload'

// steps/sections to the form : 
const steps = [
    { id: "details" },
    { id: "skills" },
    { id: "work" },
    { id: "education" },
    { id: "links" },
    { id: "review" }
]

const initialDetailsData = {
    profilePhoto: "file",
    firstName: "a",
    lastName: "aaa",
    username: "aaa",
    location: "aa",
    phoneNumber: "aa",
    birthday: "aa",
    interests: ["front end", "full stack", "ai"],
    bio: "lalalslmdndjifkwsnjif",
    briefDescription: "kklodjdidfijdj"
}

const initialSkillsData = {
    technical: ["js", "ruby", "react"],
    soft: ["teamwork", "communication", "leadership"],
    skillLevel: "mid level",
    yearsOfExperience: "5"
}

const initialWorkData = {
    status: "looking",
    currentTitle: "dev",
    currentCompany: "company",
    currentStartDate: "2020-02-05",
    pastRoles: [{
        title: "dev",
        company: "company",
        startDate: "8229292",
        endDate: "lalalala"
    },{
        title: "dev",
        company: "company",
        startDate: "8229292",
        endDate: "lalalala"
    }]
}

const initialEducationData = {
    recentSchool: "ca",
    recentDegree: "it",
    recentStartDate: "8292",
    recentEndDate: "0202",
    pastEducation: [{
        school: "tafe",
        degree: "gd",
        startDate: '8383939',
        endDate: "738393"
    }]
}

const initialLinkData = {
    linkedIn: "akskoss",
    twitter: "sllsls",
    instagram: "instaaa",
    facebook: "faceyy",
    portfolio: "portfolio",
    github: "gttt",
    resume: "file",
    additionalLinks: {
        youtube: "kakksks",
        pinterest: "jajkakaa"
    }

}



const MultiStepForm = () => {
    const [detailsData, setDetails] = useState(initialDetailsData)
    const [skillsData, setSkills] = useState(initialSkillsData)
    const [workData, setWork] = useState(initialWorkData)
    const [educationData, setEducation] = useState(initialEducationData)
    const [linkData, setLinks] = useState(initialLinkData)
    // console.log('Links: ', linkData)


    const { step, navigation } = useStep({ initialStep: 0, steps })
    const { id } = step

    const props = { navigation, detailsData, setDetails, skillsData, setSkills, 
    workData, setWork, educationData, setEducation, linkData, setLinks }

    // switch (id) {
    //     case "details":
    //         return <Details {...props} />
    //     case "skills":
    //         return <Skills {...props} />
    //     case "work":
    //         return <Work {...props} />
    //     case "education":
    //         return <Education {...props} />
    //     case "links":
    //         return <Links {...props} />
    //     case "review":
    //         return <Review {...props} />
    //     default:
    //         return null
    // }
    return <Review {...props} />
 

    
}

export default MultiStepForm