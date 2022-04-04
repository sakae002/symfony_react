import React from 'react';
import { AppContext } from '../context/AppContext';


function  QuestionComponent() {
    const context = React.useContext(AppContext);
    
    return (
        <div>
            {context.questions.map((question, i) => (
                <div key={i}>
                    <div>{question.text}</div>
                    {question.choices.length > 0 &&
                        <ul>
                            <li>{question.choices.length}</li>
                            {question.choices.map(choice => {
                                <li>{choice}</li>
                            })}
                        </ul>
                    }
                </div>
            ))}
        </div>
    )
}

export default QuestionComponent;