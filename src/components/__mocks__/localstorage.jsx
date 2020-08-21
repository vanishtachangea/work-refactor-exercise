import React, { useState } from 'react';

const useStateWithLocalStorage = localStorageKey =>{
    const [value, setValue] = useState(localStorage.getItem(localStorageKey) || '');
    React.useEffect(() => {
        localStorage.setItem(localStorageKey, value);
      }, [value]);
}

const LocalStorage = (props) => {

    //const [value, setValue] = useStateWithLocalStorage('workObjInLocalStorage');
    console.log("Affdsfs")
    console.log("local"+this.props.obj)
    return (
        <div>
            <p>{this.props.obj.value}</p>
        </div>
    );
};

export default LocalStorage;