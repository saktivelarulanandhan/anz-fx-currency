export const CURRENCY_CONFIGURATION = [
    { currName: "AUD", decimal: 2, ccy: [{ currName: 'USD', for: ['CAD', 'CNY', 'CZK', 'DKK', 'EUR', 'GBP', 'JPY', 'NOK', 'NZD'] }] },
    { currName: "CAD", decimal: 2, ccy: [{ currName: 'USD', for: ['AUD', 'CNY', 'CZK', 'DKK', 'EUR', 'GBP', 'JPY', 'NOK', 'NZD'] }] },
    { currName: "CNY", decimal: 2, ccy: [{ currName: 'USD', for: ['AUD', 'CAD', 'CZK', 'DKK', 'EUR', 'GBP', 'JPY', 'NOK', 'NZD'] }] },
    { currName: "CZK", decimal: 2, ccy: [{ currName: 'USD', for: ['AUD', 'CAD', 'CNY', 'GBP', 'JPY', 'NZD'] }, { currName: 'EUR', for: ['DKK', 'NOK', 'USD'] }] },
    { currName: "DKK", decimal: 2, ccy: [{ currName: 'USD', for: ['AUD', 'CAD', 'CNY', 'GBP', 'JPY', 'NZD'] }, { currName: 'EUR', for: ['CZK', 'NOK', 'USD'] }] },
    { currName: "EUR", decimal: 2, ccy: [{ currName: 'USD', for: ['AUD', 'CAD', 'CNY', 'GBP', 'JPY', 'NZD'] }] },
    { currName: "GBP", decimal: 2, ccy: [{ currName: 'USD', for: ['AUD', 'CAD', 'CNY', 'CZK', 'DKK', 'EUR', 'JPY', 'NOK', 'NZD'] }] },
    { currName: "JPY", decimal: 0, ccy: [{ currName: 'USD', for: ['AUD', 'CAD', 'CNY', 'CZK', 'DKK', 'EUR', 'GBP', 'NOK', 'NZD'] }] },
    { currName: "NOK", decimal: 2, ccy: [{ currName: 'USD', for: ['AUD', 'CAD', 'CNY', 'GBP', 'JPY', 'NZD'] }, { currName: 'EUR', for: ['CZK', 'DKK', 'USD'] }] },
    { currName: "NZD", decimal: 2, ccy: [{ currName: 'USD', for: ['AUD', 'CAD', 'CNY', 'CZK', 'DKK', 'EUR', 'GBP', 'JPY', 'NOK'] }] },
    { currName: "USD", decimal: 2, ccy: [{ currName: 'EUR', for: ['CZK', 'DKK', 'NOK'] }]}
]


export const CURRENCY_EXCHANGE_RATES = [
    { currName: "AUDUSD", rate: 0.8371 },
    { currName: "CADUSD", rate: 0.8711 },
    { currName: "USDCNY", rate: 6.1715 },
    { currName: "EURUSD", rate: 1.2315 },
    { currName: "GBPUSD", rate: 1.5683 },
    { currName: "NZDUSD", rate: 0.7750 },
    { currName: "USDJPY", rate: 119.95 },
    { currName: "EURCZK", rate: 27.6028 },
    { currName: "EURDKK", rate: 7.4405 },
    { currName: "EURNOK", rate: 8.6651 }
]



