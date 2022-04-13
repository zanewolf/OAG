import React from "react"
import { Helmet } from "react-helmet"
import ocean3 from '../images/ocean3.jpg'

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
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta property="og:image"  content={ocean3}/>
            </Helmet>
        </div>
    )
}
