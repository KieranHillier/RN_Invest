const stockCards = [{
  id: 0,
  stockName: "GOOGL",
  price: 1042.42,
  difference: 15.6,
  differencePercentage: 2.1,
  market: "NASDAQ",
  companyName: "Alphabet Inc",
  data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80, 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
  time: "3:43pm"
}, {
  id: 1,
  stockName: "TWTR",
  price: 73,
  difference: -15.6,
  differencePercentage: -2.1,
  market: "NASDAQ",
  companyName: "TWITTER",
  data: [95, -4, -24, 85, 91, 35, 53, 91, 35, 53, -53, 24, 50, 50, 10, 40, 95, -4, -24, 85, -20, -80, 50, 10, 40, -53, 24, 50, -20, -80],
  time: "3:43pm"
}, {
  id: 2,
  stockName: "AMAZN",
  price: 1742.42,
  difference: 1.6,
  differencePercentage: 0.1,
  market: "IDK",
  companyName: "Amazon",
  data: [-4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80, 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80, 50, 10, 40, 95],
  time: "3:43pm"
}, {
  id: 3,
  stockName: "FB",
  price: 92.42,
  difference: -23.6,
  differencePercentage: -4.1,
  market: "NASDAQ",
  companyName: "Facebook Inc",
  data: [50, 50, 50],
  time: "3:43pm"
}, {
  id: 4,
  stockName: "AQR",
  price: 2042.69,
  difference: 420.6,
  differencePercentage: 4.2,
  market: "NASDAQ",
  companyName: "Aquire",
  data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80, 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
  time: "3:43pm"
}]

const stocks = {
  google: {
    stockName: "GOOGL",
    price: 1042.42,
    difference: 15.6,
    differencePercentage: 2.1,
    market: "NASDAQ",
    companyName: "Alphabet Inc",
    data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80, 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
    time: "3:43pm"
  },
  twitter: {
    stockName: "TWTR",
    price: 73,
    difference: -15.6,
    differencePercentage: -2.1,
    market: "NASDAQ",
    companyName: "TWITTER",
    data: [95, -4, -24, 85, 91, 35, 53, 91, 35, 53, -53, 24, 50, 50, 10, 40, 95, -4, -24, 85, -20, -80, 50, 10, 40, -53, 24, 50, -20, -80],
    time: "3:43pm"
  },
  amazon: {
    stockName: "AMAZN",
    price: 1742.42,
    difference: 1.6,
    differencePercentage: 0.1,
    market: "IDK",
    companyName: "Amazon",
    data: [-4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80, 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80, 50, 10, 40, 95],
    time: "3:43pm"
  },
  facebook: {
    stockName: "FB",
    price: 92.42,
    difference: -23.6,
    differencePercentage: -4.1,
    market: "NASDAQ",
    companyName: "Facebook Inc",
    data: [50, 50, 50],
    time: "3:43pm"
  },
  aquired: {
    stockName: "AQR",
    price: 2042.69,
    difference: 420.6,
    differencePercentage: 4.2,
    market: "NASDAQ",
    companyName: "Aquire",
    data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80, 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
    time: "3:43pm"
  }
}

export default stocks