'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { getRandomNumber } from '@/app/lib/helpers/helpers';

import { type ISportFact } from './types';

import './SportFact.scss';

// TODO from BE return type of event (football/hockey) and return only this kind of facts. For now debug value
const typeOfEvent = 'football';

const SportFact: React.FC = () => {
    const [sportFacts, setSportFacts] = useState<ISportFact[]>([]);
    const [selectedSportFact, setSelectedSportFact] = useState<ISportFact>();

    const fetchFacts = async (): Promise<void> => {
        const response = await fetch('/profileFacts.json');
        const data: ISportFact[] = await response.json();
        const filteredData = data.filter((fact) => fact.type === typeOfEvent);
        setSportFacts(filteredData);
    };
    useEffect(() => {
        void fetchFacts();
    }, []);

    useEffect(() => {
        setSelectedSportFact(sportFacts[getRandomNumber(sportFacts)]);
    }, [sportFacts]);

    return (
        <main className='sportFactContainer'>
            <Image
                src={selectedSportFact ? selectedSportFact.image : '/placeholderImage.webp'}
                width={600}
                height={400}
                alt='Obrázek sportovní zajímavosti'
            />
            <div className='textContainer'>
                <h1 className='sportFactHeading'>{selectedSportFact?.factHeading}</h1>
                <p className='sportFactText'>{selectedSportFact?.factText}</p>
            </div>
        </main>
    );
};

export default SportFact;
