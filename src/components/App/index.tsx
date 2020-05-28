
import 'normalize.css';
import 'typeface-roboto';
import '../../styles/_scaffolding.scss';

import React, {Component, ReactElement} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import bind from 'bind-decorator';
import {Dialog, DialogTitle} from '@material-ui/core';

import {Header} from '../Header';
import {Text} from '../Text';

import styles from './styles.scss';
import {isAppReady} from '../../store/selectors';
import {AppDispatch, retrieveItems} from '../../store/actions';
import {AppContent} from '../Content';


interface InjectedProps {
    ready: boolean;
    retrieveItems(): void;
}

interface AppState {
    showFavs: boolean;
}

class AppImpl extends Component<{}, AppState> {

    public constructor(props: {}) {
        super(props);

        this.state = {showFavs: false};

    }

    private get injected(): InjectedProps {
        return this.props as unknown as InjectedProps;
    }

    public componentDidMount(): void {
        this.injected.retrieveItems();
    }

    public render(): ReactElement {

        const {ready} = this.injected;

        return (
            <>
                <Header onFavClick={() => this.setShowFavs(true)} />
                <div className={classNames(styles.content, !ready && styles.loading)}>

                    {!ready ? (
                        <Text tag={'p'} className={styles.loading}>Loading Items...</Text>
                    ) : (
                        <AppContent />
                    )}

                </div>

                <Dialog open={this.state.showFavs}
                        classes={{paper: styles.dialog}}
                        onBackdropClick={() => this.setShowFavs(false)} >
                    <DialogTitle>Favourite List ♥</DialogTitle>
                    <AppContent className={styles.dialogContent} favs />
                </Dialog>

            </>

        );

    }

    @bind
    private setShowFavs(value: boolean): void {
        this.setState({showFavs: value});
    }
}

// The initial idea was to use @connect to avoid this piece of code and naming (I honestly don't like it too much).
// It seems like there's an issue with typescript and react-redux. Typescript does not allow ClassDecorators to
// change the signature of the decorated class, which is exactly what react-redux's connect does.
//
// Here you can see the issue: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/9951
//
// tslint:disable-next-line:variable-name
export const App = connect(
    state => ({
        ready: isAppReady(state)
    }),
    (dispatch: AppDispatch) => ({
        retrieveItems: () => dispatch(retrieveItems())
    })
)(AppImpl);
