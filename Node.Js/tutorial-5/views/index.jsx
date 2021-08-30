import React from 'react';
import {Head} from '@react-ssr/express';

import './index.css';

const Index = ({pages}) => {
    return (
        <React.Fragment>
            <Head>
                <title>
                    custom-views - @react-ssr/express
                </title>
            </Head>

            <div className="root-page">
                <h1>Welcome to the app!</h1>
                {pages.map(page => (<a key={page} href={`/${page}`}>{page}</a>))}
            </div>

        </React.Fragment>
    );
};

export default Index;