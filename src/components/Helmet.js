import React from "react"
import { Helmet } from "react-helmet"
import ocean3 from '../images/ocean3.jpg'
import {withPrefix,Link} from 'gatsby'

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
                <link href={withPrefix('https://unpkg.com/leaflet/dist/leaflet.css')} rel="stylesheet" type="text/css" />
                <link href={withPrefix('https://unpkg.com/react-leaflet-markercluster/dist/styles.min.css')} rel="stylesheet" type="text/css" />


            </Helmet>
        </div>
    )
}
