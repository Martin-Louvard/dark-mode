import React from 'react';
import { useParams } from "react-router-dom";
import works from '../../data/works'

const StudyCase = ()=>{
    const { worksSlug } = useParams();
    const [currentWork, setCurrentWork] = React.useState(undefined);



    React.useEffect(() => {
        const foundWork = works.find((work) => work.slug === worksSlug);
        setCurrentWork(foundWork);
      }, [worksSlug]);

      if (currentWork){
        return(
            <div>
                <h1>{currentWork.title}</h1>
            <p>{currentWork.description}</p>
            </div>
        )
    } else{
        return(
            <h1>Erreur Case Study introuvable</h1>
        )
    }
};

export default StudyCase