import React from 'react';

import * as StyleSheet from  './SideNavSectionView.css';

export default class SideNavSectionView extends React.Component {
    render() {
        return (
            <div className={StyleSheet.sidenavSection}>
                <div className={StyleSheet.sectionLink}>
                    <a href={`#${this.props.name}`}>{this.props.name}</a>
                </div>
                {this.props.items.map((item) => {
                    return (
                        <div className={StyleSheet.typeLink}>
                            <a href={`#${item.name}`}>
                                &nbsp;&nbsp;{item.name}
                            </a>
                        </div>
                    );
                })}
            </div>
        );
    }
}
