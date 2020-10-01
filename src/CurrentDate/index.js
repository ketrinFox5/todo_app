import React from 'react';

const  CurrentDate = () => {
    const  addZero = number => {
        return number < 10 ? '0' + number : number;
    }
    const date = new Date();
    const day = addZero(date.getDate()),
        month = addZero(date.getMonth() + 1),
        year = addZero(date.getFullYear());
    const fullDate = `${day}.${month}.${year}`;
    return(
        <h5 className="date">
            Текущая дата: {fullDate}
        </h5>
    )
}

export default CurrentDate ;