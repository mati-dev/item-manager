
import React, {PropsWithChildren, ReactElement} from 'react';
import classNames from 'classnames';

import styles from './styles.scss';


interface ComponentWrapperProps {
    verticalCenter?: boolean;
    horizontalCenter?: boolean;
    fullWidth?: boolean;
}

export function ComponentWrapper(props: PropsWithChildren<ComponentWrapperProps>): ReactElement {

    const {verticalCenter, horizontalCenter, fullWidth, children} = props;

    return (
        <div className={classNames(
            styles.wrapper,
            verticalCenter && styles.verticalCenter,
            horizontalCenter && styles.horizontalCenter,
            fullWidth && styles.fullWidth
        )}>
            {children}
        </div>
    );

}
