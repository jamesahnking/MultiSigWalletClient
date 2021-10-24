import React from 'react';

const Header = ({ approvers, quorum }) => {
    return (
        <div>
            <ul>
                <li>Approvers: {approvers.join(', ')}</li>
                <li>Quorum: {quorum}</li>
            </ul>
        </div>
    )
}

export default Header;
