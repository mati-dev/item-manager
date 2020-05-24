
import React, {PropsWithChildren, ReactElement} from 'react';
import classNames from 'classnames';

import styles from './styles.scss';


interface ComponentWrapperProps {
    verticalCenter?: boolean;
}

export function ComponentWrapper(props: PropsWithChildren<ComponentWrapperProps>): ReactElement {

    const {verticalCenter} = props;

    return (
        <div className={classNames(styles.wrapper, verticalCenter && styles.verticalCenter)}>{props.children}</div>
    );

}
