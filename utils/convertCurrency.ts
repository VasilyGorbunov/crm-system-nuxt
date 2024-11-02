export const convertCurrency = (amount: number | string ) => {
    return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB'
    }).format(+amount)
}