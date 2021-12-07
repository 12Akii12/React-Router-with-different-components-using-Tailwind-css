import React from 'react';
import HalfStar from '../../assets/Icons/Half_Star_Yellow.svg';
import FullStar from '../../assets/Icons/Full_Star_Yellow.svg';
import EmptyStar from '../../assets/Icons/Empty_Star.svg.png';

const Rating = (props) => {
    const getStar = (value) => {
        const stars = [];
        const [whole, part] = parseFloat(value).toString().split(".");
        for (let i = 0; i < whole; i++) stars.push(FullStar);
        if (part) stars.push(HalfStar);
        for (let i = whole; i < (part ? 4 : 5); i++) stars.push(EmptyStar);
        return stars;
    }
    return (
        <div class="flex m-20 border rounded-lg px-6 py-4 w-1/3">
            {
                getStar(props.value).map((value) => (
                    <img src={value} alt="" />
                ))
            }
        </div>
    )
}

export default Rating
