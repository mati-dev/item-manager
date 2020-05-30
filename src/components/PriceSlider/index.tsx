
import React, {Component, ReactElement} from 'react';
import {connect} from 'react-redux';
import {Slider} from '@material-ui/core';
import bind from 'bind-decorator';
import classNames from 'classnames';

import {AppDispatch, setPriceRange} from '../../store/actions';
import {getMaxPriceRange, getPriceRange} from '../../store/selectors';
import {Styled} from '../../model';
import {appConfig} from '../../../config/appConfig';

import {Text} from '../Text';

import styles from './styles.scss';


interface InjectedProps {
    priceRange: [number, number];
    maxPrice: number;
    setPriceRangeValues(values: [number, number]): void;
}

class PriceSliderImpl extends Component<Styled> {

    private get injected(): InjectedProps {
        return this.props as unknown as InjectedProps;
    }

    public render(): ReactElement {

        const {maxPrice, priceRange} = this.injected;
        const {style, className} = this.props;

        return (
            <div className={classNames(styles.wrapper, className)} style={style}>
                <Text className={styles.text}>Price:</Text>
                <Slider value={priceRange}
                        className={styles.slider}
                        classes={{valueLabel: styles.valueLabel}}
                        min={0}
                        max={maxPrice}
                        step={50}
                        valueLabelDisplay="auto"
                        valueLabelFormat={
                            value => value >= appConfig.priceInfinity ? `+${appConfig.priceInfinity}` : value
                        }
                        onChange={this.handleOnChange}/>
            </div>
        );

    }

    @bind
    private handleOnChange(event: React.ChangeEvent<{}>, values: [number, number]): void {
        this.injected.setPriceRangeValues(values);
    }

}

// tslint:disable-next-line:variable-name
export const PriceSlider = connect(
    state => ({
        priceRange: getPriceRange(state),
        maxPrice: getMaxPriceRange(state)
    }),
    (dispatch: AppDispatch) => ({
        setPriceRangeValues: (values: [number, number]) => dispatch(setPriceRange(values))
    })
)(PriceSliderImpl);
