import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEO = ({ title, description, name, type }) => {
    return (
        <Helmet>
            { /* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />

            { /* End of standard metadata tags */}

            { /* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />

            { /* End of Facebook tags */}

            { /* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />

            { /* End of Twitter tags */}
        </Helmet>
    )
}

SEO.defaultProps = {
    title: 'Portfólio | João Leão',
    description: 'Portfólio de João Leão, desenvolvedor Full Stack especializado em ETL e Geoprocessamento.',
    name: 'João Leão',
    type: 'website'
}

export default SEO;
