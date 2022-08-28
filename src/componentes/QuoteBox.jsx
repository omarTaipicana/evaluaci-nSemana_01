import React from 'react';
import Box from "./Box"

const QuoteBox = ({ quotes, changerUser, index, colors, randomColor }) => {
    return (
        <div >
            <Box index={index} quotes={quotes} colors={colors} randomColor={randomColor} />
            <div className='box_two'>
                <div className='author' style={{ color: colors[randomColor] }} >
                    {quotes[index].author}
                </div>
                <div className='quotes_right'  >
                    <button onClick={changerUser} className='btn' style={{ backgroundColor: colors[randomColor] }} >{<i class="fa-solid fa-angle-right"  ></i>}</button>
                </div>
            </div>
        </div>
    );
};

export default QuoteBox;