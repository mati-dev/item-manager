
import React, {Component, ReactElement} from 'react';
import {connect} from 'react-redux';
import bind from 'bind-decorator';
import {Favorite, FavoriteBorder} from '@material-ui/icons';
import classNames from 'classnames';


import {AppItem, Styled} from '../../model';
import {AppDispatch, toggleFaved} from '../../store/actions';

import {Card} from '../Card';
import {Text} from '../Text';
import {Image} from '../Image';

import styles from './styles.scss';


interface FavItemCardProps extends Styled {
    item: AppItem;
    favs?: boolean;
}

interface InjectedProps {
    toggleFaved(id: number): void;
}

class FavItemCardImpl extends Component<FavItemCardProps> {

    private get injected(): InjectedProps {
        return this.props as unknown as InjectedProps;
    }

    public render(): ReactElement {

        const {item: {title, description, email, image, price, favourite}, className, style, favs} = this.props;

        return (
            <Card slim style={style} className={classNames(className, favs && styles.cardFavs)}>
                <div className={styles.wrapper}>

                    <Image className={classNames(styles.img, favs && styles.imgFavs)} src={image} alt={title}/>
                    {favs && <Text tag={'h2'} className={styles.textFavs}>{title}</Text>}
                    {!favs && (
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
                    )}

                    {favourite ? (
                        <Favorite className={classNames(styles.icon, favs && styles.favs)}
                                  onClick={this.handleFavClick}/>
                    ) : (
                        <FavoriteBorder className={classNames(styles.icon, favs && styles.favs)}
                                        onClick={this.handleFavClick}/>
                    )}

                </div>

            </Card>
        );

    }

    @bind
    private handleFavClick(): void {
        this.injected.toggleFaved(this.props.item.id);
    }

}

// tslint:disable-next-line:variable-name
export const FavItemCard = connect(
    undefined,
    (dispatch: AppDispatch) => ({
        toggleFaved: id => dispatch(toggleFaved(id))
    })
)(FavItemCardImpl);
