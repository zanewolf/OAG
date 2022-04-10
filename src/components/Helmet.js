import React from "react"
import { Helmet } from "react-helmet"

export default function HelmetComponent({title, content}) {


    return (
        <div className="application">
            <Helmet
                htmlAttributes={{
                lang: 'en',
            }}
            >
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="description"
                      content={content}/>
            </Helmet>
        </div>
    )
}
