import React, { useState, useEffect } from 'react';

export default function Dog(props){
    
    return (
        <img src={props.dog} className={'dog-image'} alt='Dog image'/>
    )
}