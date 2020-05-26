
import React, {ReactElement} from 'react';

import {Styled} from '../../model';


interface ImageProps extends Styled {
    src: string;
    alt: string;
}


// The idea for this component is just to require alt, so we don't forget. Not sure it's worth it tho...
export function Image(props: ImageProps): ReactElement {

    const {src, alt, style, className} = props;

    return (
        <img className={className} style={style} src={src} alt={alt}/>
    );

}
