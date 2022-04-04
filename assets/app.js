/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
// import './styles/app.css';

// start the Stimulus application
// import './bootstrap';

import React from 'react';
import { createRoot } from 'react-dom/client';
import AppContextProvider from './js/context/AppContext';
import QuestionComponent from './js/components/QuestionComponent';

const root = createRoot(document.getElementById('root'));

class App extends React.Component {
    render () {
        return (
            <AppContextProvider>
                <QuestionComponent></QuestionComponent>
            </AppContextProvider>
        )
    }
}

root.render(<App/>);