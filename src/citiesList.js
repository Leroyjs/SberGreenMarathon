export const citiesList = [
    {
        letter: 'А',
        cities: [
            { name: 'Адлер', coords: [43.42896, 39.92391] },
            { name: 'Анапа', coords: [44.89084, 37.3239] },
        ],
    },
    {
        letter: 'Б',
        cities: [{ name: 'Барнаул', coords: [53.36056, 83.76361] }],
    },
    {
        letter: 'В',
        cities: [
            { name: 'Великий Новгород', coords: [58.52131, 31.27104] },
            { name: 'Владимир', coords: [56.13655, 40.39658] },
            { name: 'Волгоград', coords: [48.71939, 44.50183] },
            { name: 'Воронеж', coords: [51.67204, 39.1843] },
            { name: 'Воскресенск', coords: [55.31733, 38.65264] },
        ],
    },
    {
        letter: 'Г',
        cities: [
            { name: 'Геленджик', coords: [44.5622, 38.0848] },
            { name: 'Горячий Ключ', coords: [44.63083, 39.13] },
        ],
    },
    {
        letter: 'Д',
        cities: [{ name: 'Джубга', coords: [44.3211, 38.7073] }],
    },
    {
        letter: 'Е',
        cities: [{ name: 'Екатеринбург', coords: [56.8519, 60.6122] }],
    },
    {
        letter: 'Н',
        cities: [
            { name: 'Нижний Новгород', coords: [56.32867, 44.00205] },
            { name: 'Нижний Тагил', coords: [57.91944, 59.965] },
            { name: 'Новокуйбышевск', coords: [53.0959, 49.9462] },
            { name: 'Новомосковск', coords: [54.0105, 38.2846] },
            { name: 'Новороссийск', coords: [44.72439, 37.76752] },
            { name: 'Новосибирск', coords: [55.0415, 82.9346] },
        ],
    },
    {
        letter: 'О',
        cities: [
            { name: 'Обнинск', coords: [55.09681, 36.61006] },
            { name: 'Омск', coords: [54.99244, 73.36859] },
        ],
    },
    {
        letter: 'П',
        cities: [
            { name: 'Пермь', coords: [58.01046, 56.25017] },
            { name: 'Пятигорск', coords: [44.04861, 43.05944] },
        ],
    },
    {
        letter: 'Р',
        cities: [
            { name: 'Ростов-на-Дону', coords: [47.23135, 39.72328] },
            { name: 'Рязань', coords: [54.6269, 39.6916] },
        ],
    },
    {
        letter: 'С',
        cities: [
            { name: 'Сургут', coords: [61.25, 73.41667] },
            { name: 'Самара', coords: [53.20007, 50.15] },
            { name: 'Санкт-Петербург', coords: [59.93863, 30.31413] },
            { name: 'Смоленск', coords: [54.7818, 32.0401] },
            { name: 'Сочи', coords: [43.59917, 39.72569] },
            { name: 'Ставрополь', coords: [45.0428, 41.9734] },
            { name: 'Сызрань', coords: [53.1585, 48.4681] },
        ],
    },
    {
        letter: 'Т',
        cities: [
            { name: 'Тамбов', coords: [52.73169, 41.44326] },
            { name: 'Тверь', coords: [56.85836, 35.90057] },
            { name: 'Тольятти', coords: [53.5303, 49.3461] },
            { name: 'Томск', coords: [56.49771, 84.97437] },
            { name: 'Туапсе', coords: [44.1053, 39.0802] },
            { name: 'Тула', coords: [54.19609, 37.61822] },
            { name: 'Тюмень', coords: [57.15222, 65.52722] },
        ],
    },
    {
        letter: 'К',
        cities: [{ name: 'Курган', coords: [55.45, 65.33333] }],
    },
    {
        letter: 'У',
        cities: [
            { name: 'Ульяновск', coords: [54.32824, 48.38657] },
            { name: 'Уфа', coords: [54.74306, 55.96779] },
        ],
    },
    {
        letter: 'Ч',
        cities: [{ name: 'Челябинск', coords: [55.15402, 61.42915] }],
    },
    {
        letter: 'Я',
        cities: [{ name: 'Ярославль', coords: [57.62987, 39.87368] }],
    },
];
export const getMyCoordinatesOfCity = (name) => {
    let coords = [56.8519, 60.6122];
    citiesList.forEach((item) => {
        item.cities.forEach((item) => {
            if (item.name === name) {
                coords = item.coords;
            }
        });
    });
    return coords;
};
