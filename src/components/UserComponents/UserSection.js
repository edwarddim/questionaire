import React from 'react';
import FreeText from './FreeText';
import MC from './MC';

const UserSection = ({section}) => {
        const questionBody = section.questions.map(function(question, i){
            if(question.type === "freetext"){
                return <FreeText key={i} question={question} />
                
            }
            else{
                return <MC key={i} question={question} />
            }
        })
        return(
            <h1>{questionBody}</h1>
        )
}

export default UserSection;