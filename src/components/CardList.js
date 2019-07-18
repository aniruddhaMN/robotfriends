import React from 'react';
import Card from './card';

const CardList = ({robot}) => {
    const cardComponent = robot.map((user,i) => {
        return <Card id = {robot[i].id} name ={robot[i].name} email = {robot[i].email}/>
    })
    return(
        <div>    
            {cardComponent}
        </div>  
    );
}

export default CardList;