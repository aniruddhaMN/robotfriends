import React from 'react';

const card = (props) => {
    return(
        <div className = 'bg-light-green dib br3 pa3 grow ma2'>
        <img alt = 'robots' src = {`https://robohash.org/${props.id}`}/>
            <div className = 'tc'>
                <h1>{props.name}</h1>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default card;