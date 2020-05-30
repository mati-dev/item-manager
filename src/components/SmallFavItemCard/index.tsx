
import React, {Component, ReactElement} from 'react';
import {connect} from 'react-redux';
import {Favorite, FavoriteBorder} from '@material-ui/icons';

import {AppItem} from '../../model';
import {Card} from '../Card';
import {Text} from '../Text';
import {Image} from '../Image';

import styles from './styles.scss';
import {AppDispatch, toggleFaved} from '../../store/actions';


interface SmallFavItemCardProps {
    item: AppItem;
}

interface InjectedProps {
    toggleFavedItem(id: number): void;
}

class SmallFavItemCardImpl extends Component<SmallFavItemCardProps> {

    private get injected(): InjectedProps {
        return this.props as unknown as InjectedProps;
    }

    public render(): ReactElement {

        const {title, image, favourite, id} = this.props.item;
        const {toggleFavedItem} = this.injected;

        return (
            <Card className={styles.card}>
                <Image className={styles.image} src={image} alt={`${title} image`}/>
                <Text className={styles.title}>{title}</Text>
                {favourite ? (
                    <Favorite className={styles.icon} onClick={() => toggleFavedItem(id)}/>
                ) : (
                    <FavoriteBorder className={styles.icon} onClick={() => toggleFavedItem(id)}/>
                )}
            </Card>
        );

    }

}

// tslint:disable-next-line:variable-name
export const SmallFavItemCard = connect(
    undefined,
    (dispatch: AppDispatch) => ({
        toggleFavedItem: id => dispatch(toggleFaved(id))
    })
)(SmallFavItemCardImpl);
