import React from 'react';
import {Helmet} from 'react-helmet';

export default class Application extends React.Component {
    render() {
        return (
            <div className="application">
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>RBA Blog</title>
                    <link rel="icon" href="../assets/img/rba.ico"/>
                </Helmet>
            </div>
        )
    }
}