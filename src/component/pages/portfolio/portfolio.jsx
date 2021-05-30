import React, {useEffect, useState} from 'react';
import {Helmet} from "react-helmet";

// import Custom Components
import PageHeader from "../../common/page-header/page-header";
import BreadCrumb from "../../common/bread-crumb/bread-crumb";
import Work from "../../features/portfolio/work";
import {getWorks} from "../../../api";
import './style.css';

export default function Portfolio() {
    const [works, setWorks] = useState(null);

    useEffect(() => {
        getWorks().then(result => {
            if (result && result.success ) {
                setWorks(result.data);
            }
        })
    }, [])

    return (
        <>
            <Helmet>
                <title>Portfolio | Shamal iroshan</title>
            </Helmet>

            <div className="mb-3"/>
            <PageHeader title="Portfolio"/>
            <BreadCrumb path={['Portfolio']}/>

            <div className="container mt-5">
                <div className="row">
                    {
                        works && works.length > 0?
                            works.map((item, index) => (
                                <Work data={item} key={index}/>
                            ))
                            :
                            <div>
                                <h1 className="text-black-50">No works</h1>
                            </div>
                    }
                </div>
            </div>
            <div className="mb-5"/>
        </>
    )
}