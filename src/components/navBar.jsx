import React, { PureComponent } from 'react';

class NavBar extends PureComponent {
    render() {
        return (
            <div className="navBar">
                <span className="logo"><i className="fas fa-dog"></i></span>
                <span className="title">sehoon's habit</span>
                <span className="total-count">{this.props.totalCount}</span>
            </div>
        );
    }
}

export default NavBar;