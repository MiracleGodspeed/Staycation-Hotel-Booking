export function currencyFormat(num, symbol = '₦', dp = 0) {
    if (typeof num === 'number')
        return symbol + num.toFixed(dp)
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    else
        return symbol + num;
}