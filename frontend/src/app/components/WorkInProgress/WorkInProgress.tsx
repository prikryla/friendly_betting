import React from "react";
import './WorkInProgress.scss';
import Image from "next/image";

const WorkInProgress: React.FC = () => {

    return (
        <div className="workInProgress">
            <Image src="/Warning.png" width={30} height={30} alt="Ikona varování"/>
            <p>Některé funkcionality nejsou dostupné, pracujeme na nápravě.</p>
        </div>
    )
}

export default WorkInProgress;