
import React, {Component, ReactElement} from 'react';
import {Favorite, FavoriteBorder} from '@material-ui/icons';


import {AppItem, Styled} from '../../model';

import {Card} from '../Card';
import {Text} from '../Text';
import {Image} from '../Image';

import styles from './styles.scss';


interface FavItemCardProps extends Styled {
    item: AppItem;
}

export class FavItemCard extends Component<FavItemCardProps> {

    public render(): ReactElement {

        const {item: {title, description, email, image, price, favourite}, className, style} = this.props;

        return (
            <Card slim style={style} className={className}>
                <div className={styles.wrapper}>

                    <Image className={styles.img} src={image} alt={title}/>
                    <div className={styles.content}>
                        <div className={styles.cardInfo}>
                            <div>
                                <Text tag={'h2'}>{title}</Text>
                                <Text tag={'p'} className={styles.email}>{email}</Text>
                            </div>

                            <Text className={styles.price}>{`${price} €`}</Text>
                        </div>

                        <Text tag={'p'} className={styles.description}>{description}</Text>

                    </div>

                    {favourite ? (
                        <Favorite className={styles.icon}/>
                    ) : (
                        <FavoriteBorder className={styles.icon}/>
                    )}

                </div>

            </Card>
        );
    }

}
