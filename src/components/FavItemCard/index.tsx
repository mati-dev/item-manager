
import React, {Component, ReactElement} from 'react';
import {connect} from 'react-redux';
import bind from 'bind-decorator';
import {Favorite, FavoriteBorder} from '@material-ui/icons';
import classNames from 'classnames';


import {AppItem, Styled} from '../../model';
import {toggleFaved} from '../../store/actions';
import {AppDispatch} from '../../store/typings';

import {Card} from '../Card';
import {Text} from '../Text';
import {Image} from '../Image';

import styles from './styles.scss';


interface FavItemCardProps extends Styled {
    item: AppItem;
}

interface InjectedProps {
    toggleFaved(id: number): void;
}

class FavItemCardImpl extends Component<FavItemCardProps> {

    private get injected(): InjectedProps {
        return this.props as unknown as InjectedProps;
    }

    public render(): ReactElement {

        const {item: {title, description, email, image, price, favourite}, className, style} = this.props;

        return (
            <Card slim style={style} className={classNames(styles.wrapper, className)}>
                <Image className={styles.img} src={image} alt={title} onDoubleClick={this.handleFavClick}/>
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
                    <Favorite className={styles.icon}
                              onClick={this.handleFavClick}/>
                ) : (
                    <FavoriteBorder className={styles.icon}
                                    onClick={this.handleFavClick}/>
                )}
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
