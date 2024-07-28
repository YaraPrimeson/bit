import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './styles/index.scss';
// import reportWebVitals from './reportWebVitals';
import Router from "./components/Router";
import Container from "./components/Container";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Container>
                <Router/>
            </Container>
        </BrowserRouter>
    </React.StrictMode>,
);

// reportWebVitals();
