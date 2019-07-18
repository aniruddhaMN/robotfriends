import React from 'react';

const searching = ({searchfield,searchChange}) => {
    return(
        <div className = 'tc'>
            <input type = 'Search' 
                   placeholder = 'Search' 
                   className = 'bg-light-blue'
                   onChange = {searchChange}
                   />
        </div>    
    );
}

export default searching;