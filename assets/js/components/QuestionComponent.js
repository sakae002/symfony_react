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
                            {question.choices.map((choice, j) => 
                                <li key={j}>{choice}</li>
                            )}
                        </ul>
                    }
                </div>
            ))}
        </div>
    )
}

export default QuestionComponent;