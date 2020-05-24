
import React, {createElement, PropsWithChildren, ReactElement} from 'react';
import classNames from 'classnames';

import {Styled} from '../../model';

import styles from './styles.scss';


interface TextProps extends Styled {
    tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export function Text(props: PropsWithChildren<TextProps>): ReactElement {

    const {tag = 'span', children, className, ...innerProps} = props;

    return createElement(tag, {...innerProps, className: classNames(styles.text, styles[tag], className)}, children);

}
