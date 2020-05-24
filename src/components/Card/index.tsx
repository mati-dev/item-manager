
import React, {PropsWithChildren, ReactElement} from 'react';
import classNames from 'classnames';

import styles from './styles.scss';


interface CardProps {
    slim?: boolean;
}

export function Card(props: PropsWithChildren<CardProps>): ReactElement {

    const {slim} = props;

    return (
        <div className={classNames(styles.wrapper, slim && styles.slim)}>
            {props.children}
        </div>
    );

}
