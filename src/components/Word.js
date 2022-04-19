import React from 'react';

const Word = ({ selectedWord, correctLetters}) =>  {
    if(selectedWord) {
         return (
            <div className='word'>
                
            { [...selectedWord].map((letter, index) => {
                return (
                    <span className='letter' key={index}>{correctLetters.includes(letter) ? letter : "" }</span>
                )
            })}
            </div>
    );
    } else {
        return (
            <span>Loading . . .</span>
        )
                }
       
    
    
};

export default Word;