import React from 'react';
import {
    Link,
    Route,
    Switch,
} from 'react-router-dom';
import StudyCase from '../../components/StudyCase';
import works from '../../data/works'

const Works = () => {

    return (
        <div className="container">
            <h1>Au fil des années, nous avons pu accompagner les meilleurs.</h1>
            <p>Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.</p>
            {works.map((work) => {
                return <Link to={`/works/${work.slug}`}> {work.company}</Link>
            })}
                <Switch>
                    <Route path="/works/:worksSlug" >
                        <StudyCase />
                    </Route>
                </Switch>
        </div>
    )
};
export default Works;