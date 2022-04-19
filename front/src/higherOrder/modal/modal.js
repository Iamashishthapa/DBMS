import React, { Component } from 'react';

import './modal.css';

class Modal extends Component {

    render () {
        return (
            <div>
                <div
                    className="Modal"
                    style={{
                        transform:'translateY(0)',
                        opacity: '1'
                    }}>
                    Try
                </div>
            </div>
        )
    }
}

export default Modal;