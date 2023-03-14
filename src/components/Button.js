import React from 'react';

export default function Button(props){
    return (
    <button onClick={props.fetchDog} className={'button-fetch-dog'}>
        Fetch new dog!
    </button>)
}