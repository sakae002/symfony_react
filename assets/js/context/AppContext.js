import React, { createContext } from 'react';
export const AppContext = createContext();

class AppContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {
                    text: "Hola! wie gehts?",
                    choices: [
                        "Sehr gut und dir?",
                        "Naja ...",
                        "Es geht.",
                        "Gut und selbst?",
                    ]
                },
                {
                    text: "zweite Frage?",
                    choices: [
                        "Sehr gut und dir?",
                        "Naja ...",
                        "Es geht.",
                        "Gut und selbst?",
                    ]
                }
            ]
        }
    }

    createQuestion() {}

    showQuestion() {}

    editQuestion() {}

    removeQuestion() {}

    render() {
        return (
            <AppContext.Provider value={{
                ...this.state,
                createQuestion: this.createQuestion.bind(this),
                showQuestion: this.showQuestion.bind(this),
                editQuestion: this.editQuestion.bind(this),
                removeQuestion: this.removeQuestion.bind(this),
            }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppContextProvider;