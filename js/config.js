var config = {
    // Тарифы на электроэнергию для населения действующие с 01.04.2015 по 31.08.2015
    power: [
        {
            startDate: "2015-04-01",
            endDate: "2015-08-31",
            tariffs: [
                {"limit": 600, "price": 1.407},
                {"limit": 100, "price": 0.630},
                {"limit": 0,   "price": 0.366}
            ]
        }
    ],
    // Тарифы на природный газ для населения действующие с 01.04.2015
    gas: [
        {
            startDate: "2015-05-01",
            endDate: "2015-09-30",
            tariffs: [
                {"limit": 0,   "price": 7.188}
            ]
        },
        {
            startDate: "2015-10-01",
            endDate: "2016-04-30",
            tariffs: [
                {"limit": 200,   "price": 7.188},
                {"limit": 0,   "price": 3.600}
            ]
        }
    ],
    // Тарифы на водоснабжения и водоотведения действующие с 01.07.2014
    water: [
        {
            startDate: "2015-01-01",
            endDate: "2015-12-31",
            tariffs: [
                {"limit": 0,   "price": 8.364}
            ]
        }
    ]
};
