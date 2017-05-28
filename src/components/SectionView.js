import React from 'react';

import * as StyleSheet from  './SectionView.css';

export default class SectionView extends React.Component {
    render() {
        return (
        <div className={StyleSheet.section}>
            <a name={this.props.name} />
            <h2>{this.props.name}</h2>
            {this.props.items.map((item) => item.component)}
        </div>
        );
    }
}
