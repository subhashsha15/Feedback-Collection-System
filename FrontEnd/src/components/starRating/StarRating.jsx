import React from 'react';
import StarRatings from 'react-star-ratings';
import { useField } from 'formik';

const StarRating = ({ field }) => {
    const [fieldProps, , helpers] = useField(field.name);
    const { setValue } = helpers;

    const changeRating = (newRating) => {
        setValue(newRating);
    };

    const currentRating = Number(fieldProps.value) || 0;

    return (
        <div>
            <StarRatings
                rating={currentRating}
                starRatedColor="#219653"
                starHoverColor="#024D3E"
                starSpacing="15px"
                starDimension="40px"
                changeRating={changeRating}
                numberOfStars={5}
                name={field.name}
            />
        </div>
    );
};

export default StarRating;
