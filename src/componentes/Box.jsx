import React from 'react';

const btn = ({ quotes, index, colors, randomColor }) => {
    return (
        <div className='box_one'>
            <div>
                {<i class="fa-solid fa-quote-left" style={{ color: colors[randomColor] }} ></i>}
            </div>
            <div className='quote' style={{ color: colors[randomColor] }} >
                {quotes[index].quote}
            </div>
        </div>
    );
};

export default btn;