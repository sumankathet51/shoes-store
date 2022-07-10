import React from 'react';

export const Form = ({feild}) => {
    return (
        <div className="field">
            <input type={feild.type} name={feild.name} required/>
            <label>{feild.name}</label>
        </div>
    );
}

export default Form;