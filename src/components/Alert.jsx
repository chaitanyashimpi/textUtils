import React from 'react';

const Alert = (props) => {
    return (
            props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={{position: 'fixed', top: '60px', right: '0'}}>
                <strong style={{textTransform: 'capitalize'}}>{props.alert.type}</strong>: {props.alert.msg}
                {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>
    );
}

export default Alert;
