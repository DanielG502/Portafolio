import { createRoot } from 'react-dom';
import { useEffect } from 'react';
import WebContent from './App';
import './index.css';

const App = () => {
    useEffect(() => {
        const addToggleEvent = () => {
            const toggle = document.querySelector('.hover-show');
            toggle.addEventListener('click', () => {
                toggle.classList.toggle('active');
            });
        };

        window.onload = () => {
            addToggleEvent();

            const icons = document.querySelectorAll('.navigation .icon');
            icons.forEach((icon) => {
                icon.addEventListener('click', () => {
                    changeActive();
                    icon.classList.add('active-nav');
                });
            });
        };

        return () => {
            window.onload = null;

            const toggle = document.querySelector('.hover-show');
            toggle.removeEventListener('click', () => {
                toggle.classList.toggle('active');
            });

            const icons = document.querySelectorAll('.navigation .icon');
            icons.forEach((icon) => {
                icon.removeEventListener('click', () => {
                    changeActive();
                    icon.classList.add('active-nav');
                });
            });
        };
    }, []);

    const changeActive = () => {
        const icons = document.querySelectorAll('.navigation .icon');
        icons.forEach((icon) => {
            icon.classList.remove('active-nav');
        });
    };

    return <WebContent />;
};

const rootElement = document.getElementById('root');
createRoot(rootElement).render(<App />);
