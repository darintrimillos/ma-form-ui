import React from 'react';

function ValidationError(props) {
    return props.showError ? <p>{props.message}</p> : null;
}

export default ValidationError;