
import React, {Component, PropsWithChildren, ReactElement} from 'react';
import classNames from 'classnames';

import {Styled} from '../../model';

import styles from './styles.scss';


interface CardProps extends Styled {
    slim?: boolean;
}

// Needs to be a component to be able to use refs in the Modal
export class Card extends Component<PropsWithChildren<CardProps>> {

    public render(): ReactElement {

        const {slim, style, className} = this.props;

        return (
            <div className={classNames(styles.wrapper, slim && styles.slim, className)} style={style}>
                {this.props.children}
            </div>
        );

    }

}
