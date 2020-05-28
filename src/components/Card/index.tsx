
import React, {PropsWithChildren, ReactElement} from 'react';
import classNames from 'classnames';

import {Styled} from '../../model';

import styles from './styles.scss';


interface CardProps extends Styled {
    slim?: boolean;
}

export function Card(props: PropsWithChildren<CardProps>): ReactElement {

    const {slim, style, className} = props;

    return (
        <div className={classNames(styles.wrapper, slim && styles.slim, className)} style={style}>
            {props.children}
        </div>
    );

}
