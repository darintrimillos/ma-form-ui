import React from 'react';

function ValidationError(props) {
    return props.showError ? <p className="error">{props.message}</p> : null;
}

export default ValidationError;