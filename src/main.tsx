import i18next from 'i18next'

import LanguageDetector from 'i18next-browser-languagedetector';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { initReactI18next } from 'react-i18next';
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { store } from './features/Store/store';
import './index.css'
import { router } from './router/router'
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './FireBase/FbConfig';
import { getAuth } from 'firebase/auth';



i18next
    .use(LanguageDetector)
    .use(initReactI18next).init({
        debug: true,
        fallbackLng: "he",
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    // here we will place our translations...
                }
            }
        }
    })


const FBAPP = initializeApp(firebaseConfig);
const auth = getAuth()
auth.currentUser?.getIdToken(true);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

    <Provider store={store}>

        <RouterProvider router={router} />
    </Provider>
)
