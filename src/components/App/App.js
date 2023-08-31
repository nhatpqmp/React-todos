import React from 'react';
import {AppProvider, FormLayout} from '@shopify/polaris';
import TopBarTodos from "../TopBar/TopBarTodos";
import en from "@shopify/polaris/locales/en.json";
import '@shopify/polaris/dist/styles.css';

function App() {
    return (
        <FormLayout>
            <AppProvider i18n={en}>
                <TopBarTodos />
            </AppProvider>
        </FormLayout>
    );
}

export default App;
