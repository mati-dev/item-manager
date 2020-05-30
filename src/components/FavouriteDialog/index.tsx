
import React, {ChangeEvent, ReactElement} from 'react';
import {connect} from 'react-redux';
import {Dialog, DialogTitle, DialogContent, DialogActions, TextField} from '@material-ui/core';

import {AppDispatch, setFavouriteSearch} from '../../store/actions';
import {getFavSearch, getVisibleFavItems} from '../../store/selectors';
import {AppItem} from '../../model';

import {Text} from '../Text';
import {SmallFavItemCard} from '../SmallFavItemCard';

import styles from './styles.scss';


interface FavouriteModalProps {
    open: boolean;
    onClose(): void;
}

interface InjectedProps {
    items: AppItem[];
    search: string;
    setSearch(value: string): void;
}

class FavouriteModalImpl extends React.Component<FavouriteModalProps> {

    private get injected(): InjectedProps {
        return this.props as unknown as InjectedProps;
    }

    public render(): ReactElement {

        const {open, onClose} = this.props;
        const {items, search, setSearch} = this.injected;

        return (
            <Dialog open={open}
                    onBackdropClick={onClose}
                    classes={{paper: styles.dialog}}>
                <DialogTitle>My favourites</DialogTitle>

                <DialogContent className={styles.content}>
                    <TextField value={search}
                               className={styles.search}
                               variant="outlined"
                               size="small"
                               placeholder="Search by title..."
                               onChange={(event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)} />
                    {items.length === 0 ? (
                        <Text className={styles.noItems}>There's no items to show :'(</Text>
                    ) : (
                        <div className={styles.cards}>
                            {items.map(item => (
                                <div className={styles.cardWrapper}>
                                    <SmallFavItemCard key={item.id} item={item}/>
                                </div>
                            ))}
                        </div>
                    )}
                </DialogContent>

                <DialogActions />

            </Dialog>
        );

    }
}


// tslint:disable-next-line:variable-name
export const FavouriteModal = connect(
    state => ({
        items: getVisibleFavItems(state),
        search: getFavSearch(state)
    }),
    (dispatch: AppDispatch) => ({
        setSearch: (value: string) => dispatch(setFavouriteSearch(value))
    })
)(FavouriteModalImpl);
