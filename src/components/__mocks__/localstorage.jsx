import React from 'react';


const useStateWithLocalStorage = localStorageKey => {
    const [value, setValue] = React.useState(
        localStorage.getItem(localStorageKey) || {}
    );

    React.useEffect(() => {
        localStorage.setItem(localStorageKey, value);
    }, [value]);

    return [value, setValue];
};

const LocalStorage = props => {
    const [obj, setObj] = useStateWithLocalStorage(
        'workObjectInLocalStorage'
    );
    if (obj.value)
        return (
            <div>
                <p>{obj.value}</p>
            </div>
        );
    else {
        if (props.obj) {
            setObj(props.obj)
        }
        else {
            return (
                <div>
                    <p>Error in Local Storage</p>
                </div>
            );
        }
    }

};

export default LocalStorage;