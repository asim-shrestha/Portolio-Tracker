import moment from 'moment';
import DashboardsHelper from '../helpers/DashboardsHelper';
const helper = new DashboardsHelper();


export default class ActivitiesHelper {
    getInvalidQuantityMessage = () => 'You are holding an insufficient position to cover your selling quantity. Please verify your order and try again';

    getInvalidSymbolMessage = (symbol = '') => {
        if(symbol !== ''){
            return `Invalid Symbol (${symbol}). Please check the symbol and try again.`
        }
        else {
            return 'Invalid Symbol. Please check the symbol and try again.'
        }
    };

    getInvalidDateMessage = () => 'The date you entered is invalid. Please check that the market is open on that date and try again.';

    getInvalidSellQuantityMessage = () => 'The selling quantity you entered is invalid. Please ensure that your portfolio contained the required quantity at the provided date.';

    retrieveNewData(latestCachedDate) {
        return new Promise((resolve, reject) => {
            if (!latestCachedDate) {
                resolve(true);
            }

            const latestCachedDay = moment(latestCachedDate).day();
            const today = moment().format('YYYY-MM-DD');

            if (helper.isWeekend(today) && latestCachedDay == 5) {
                resolve(false);
            } else if (moment(latestCachedDate).isSame(moment(today))) {
                resolve(false);
            }

            resolve(true);
        });
    }

    processAPISymbols(iexSymbols) {
        return new Promise((resolve, reject) => {
            if (iexSymbols) {
                let symbols = [];

                for (let row of iexSymbols) {
                    symbols.push(row.symbol);
                }

                resolve({
                    date: moment().format('YYYY-MM-DD'),
                    symbols: symbols
                });
            }
            resolve(false);
        });
    }

    validateSymbol(symbol, iexSymbols) {
        return new Promise((resolve, reject) => {
            resolve(iexSymbols.find(element => element == symbol) ? true : false);
        });
    }

}