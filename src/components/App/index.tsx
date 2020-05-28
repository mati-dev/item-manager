
import 'normalize.css';
import 'typeface-roboto';
import '../../styles/_scaffolding.scss';

import React, {ReactElement} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

import {Header} from '../Header';
import {Text} from '../Text';

import styles from './styles.scss';
import {isAppReady} from '../../store/selectors';
import {AsyncDispatch, retrieveItems} from '../../store/actions';
import {Content} from '../Content';


interface InjectedProps {
    ready: boolean;
    retrieveItems(): void;
}

class AppImpl extends React.Component {

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
                <Header/>
                <div className={classNames(styles.content, !ready && styles.loading)}>

                    {!ready ? (
                        <Text tag={'p'} className={styles.loading}>Loading Items...</Text>
                    ) : (
                        <Content />
                    )}

                </div>
            </>

        );

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
    (dispatch: AsyncDispatch) => ({
        retrieveItems: () => dispatch(retrieveItems())
    })
)(AppImpl);
