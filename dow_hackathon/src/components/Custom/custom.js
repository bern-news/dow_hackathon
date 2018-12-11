import React, {Fragment} from 'react';

require('./style.css');

const Stream = (props) => {
    return (
        <Fragment>
            <div className="custom--component">
                <p className="custom--component__text">Import your own component.</p>
            </div>
        </Fragment>
    )
};

export default Stream;