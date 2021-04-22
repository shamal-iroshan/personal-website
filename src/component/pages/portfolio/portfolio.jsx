import React from 'react';
// import { Link } from 'react-router-dom';

// import Custom Components
import PageHeader from "../../common/page-header/page-header";
import BreadCrumb from "../../common/bread-crumb/bread-crumb";
import Work from "../../features/portfolio/work";
import './style.css';

export default function Portfolio() {

    let test = [
        {
            image: `${process.env.PUBLIC_URL}/assets/img/portfolio/0.png`,
            description: "Description 1"
        },
        {
            image: `${process.env.PUBLIC_URL}/assets/img/portfolio/0.png`,
            description: "Description 2"
        },
        {
            image: `${process.env.PUBLIC_URL}/assets/img/portfolio/0.png`,
            description: "Description 3"
        },
        {
            image: `${process.env.PUBLIC_URL}/assets/img/portfolio/0.png`,
            description: "Description 4"
        },
        {
            image: `${process.env.PUBLIC_URL}/assets/img/portfolio/0.png`,
            description: "Description 5"
        },
        {
            image: `${process.env.PUBLIC_URL}/assets/img/portfolio/0.png`,
            description: "Description 6"
        },
        {
            image: `${process.env.PUBLIC_URL}/assets/img/portfolio/0.png`,
            description: "Description 7"
        },
    ]

    return (
        <>
            <div className="mb-3"/>
            <PageHeader title="Portfolio"/>
            <BreadCrumb path={['Portfolio']}/>

            <div className="container mt-5">
                <div className="row">
                    {
                        test.map((item, index) => (
                            <Work data={item} key={index}/>
                        ))
                    }
                </div>
            </div>
            <div className="mb-5"/>
        </>
    )
}