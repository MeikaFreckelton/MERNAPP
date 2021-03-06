import React, { useEffect } from 'react'
import SkillsForm from './skillsComponents/SkillForm'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css';
import FormInput from '../../reusable/FormInput'


const Skills = ({ setSkills, skillsData, navigation, form, profile, detailsData }) => {

    useEffect(() => {
        if (form === "edit"){
            setSkills(profile.skillsData)
        }
    })
    console.log(detailsData)

    

    const props = { setSkills, skillsData, navigation }
    const { skilllevel, yearsofexperience } = skillsData
    const { previous, next } = navigation;

    // due to current bug, have to disable enter keypress from submitting :
    // function onKeyPress (e) {
    //     if (e.which === 13 /* Enter */) {
    //         e.preventDefault();
    //     }
    // }

    // function to handle dropdown and assign its value to the skill level in form data :
    function onSelect (e) {
        // console.log(e)
        const { label, value } = e
        setSkills({
            ...skillsData,
            [value]: label
        })
        console.log(skillsData)

    }
    // options for skill level drop down :

    const levelOptions = [
        {label: "Junior-level", value: "skilllevel"},
        {label: "Mid-level", value: "skilllevel"},
        {label: "Senior-level", value: "skilllevel"}
    ]

    const experienceOptions = [
        {label: "<1", value: "yearsofexperience"},
        {label: "1+", value: "yearsofexperience"},
        {label: "3+", value: "yearsofexperience"},
        {label: "5+", value: "yearsofexperience"},
        {label: "7+", value: "yearsofexperience"}
    ]

    return(
        <div>
            <div className="profileFormDiv">
                <div className="heading">
                    <h4>
                        Skills
                    </h4>
                </div>
                <form >
                    <div className="skillsFormSection">
                        <div className="skillsFormDisplay">
                            <div className="greySection">
                                <h3>Technical Skills</h3>
                                <SkillsForm {...props} skillType="technical"/>
                            </div>
                            
                        </div>
                        <div>
                            <h3>Experience</h3>
                            <div className="skillExperience">
                                <div className="formFields">
                                    <label>
                                        Skill level
                                    </label>
                                    {/* dropdown component from package : */}
                                    <Dropdown options={levelOptions} onChange={onSelect} value={skilllevel} id="skillDropDown" name="skilllevel" />
                                </div>
                                <div className="formFields">
                                    <label>
                                        Years of Experience
                                    </label>
                                    {/* <FormInput name="yearsOfExperience" value={yearsOfExperience} onChange={handleChange} className="yearsExp" /> */}
                                    <Dropdown options={experienceOptions} onChange={onSelect} value={yearsofexperience} id="expDropDown" name="yearsofexperience" />
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </form>
                <div className="navigationDiv">
                    <button className="nextBtn" onClick={previous}>back</button>  
                    <button className="nextBtn" onClick={next}>Next</button>
                </div>

                
                
            </div>
            
        </div>
    )
}


export default Skills