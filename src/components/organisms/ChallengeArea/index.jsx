import React, { useState } from 'react';
import ChallengeTable from "../../atoms/ChallengeTable";
import ChallengeButtons from "../../molecules/ChallengeButtons";
import './ChallengeArea.scss';
import { data } from "./data";
import ChallengeHeader from '../../atoms/ChallengeHeader';
import Footer from '../Footer';
import Navbar from '../../molecules/Navbar'

export default function ChallengeArea() {
    const [sortCategory, setSortCategory] = useState('');

    const handleClick = (category) => {
        setSortCategory(category);
    };

    const handleSortChange = ({ column, order }) => {
        return { column, order };
    };

    return (
        <div className="challenge-tab">
            <div className="table-button">
                <ChallengeHeader />
                <ChallengeButtons handleClick={handleClick} activeCategory={sortCategory} />
                <ChallengeTable challenges={data} sortCategory={sortCategory} onSortChange={handleSortChange} />
                <Footer/>
            </div>
        </div>
    );
}



