import React from 'react'
import PastEducation from './educationSections/PastEducation'
import FormInput from './reusable/FormInput'

const Education = ( { setEducation, educationData, navigation }) => {
    
    const props = { setEducation, educationData }

    const { recentSchool, recentDegree, recentStartDate, recentEndDate } = educationData

    const { previous, next } = navigation;


    // handles regular input changes and saves to state :
    function changeHandler (e){
        const { name, value } = e.target
        setEducation({
            ...educationData,
            [name]: value
        })
    }

    return(
        <div>
            <div className="heading">
                Education
            </div>
            <div className="profileFormDiv">

                <form className="profileForm">
                    <div>
                        <div>
                            <h3>Most Recent </h3>
                            <div>
                                <label>
                                    School
                                </label>
                                <FormInput name="recentSchool" value={recentSchool} onChange={changeHandler} />

                            </div>
                            <div>
                                <label>
                                    Degree
                                </label>
                                <FormInput name="recentDegree" value={recentDegree} onChange={changeHandler} />

                            </div>
                            <div>
                                <label>
                                    Start Date
                                </label>
                                <FormInput type="date" name="recentStartDate" value={recentStartDate} onChange={changeHandler} />

                            </div>
                            <div>
                                <label>
                                    End date
                                </label>
                                <FormInput type="date" name="recentEndDate" value={recentEndDate} onChange={changeHandler} />

                            </div>
                    
                            <h3>Past Education</h3>
                            <PastEducation {...props} />
                            
                        </div>
                        </div>
                </form>

                <button onClick={previous}>back</button>  
                <button onClick={next}>Next</button>

            </div>
        </div>
    )
}


export default Education