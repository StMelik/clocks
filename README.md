# Описанием сути решения задания

Отрисовка стрелочных часов реализована при помощи HTML и CSS.

В глобальном состоянии приложения хранится текущая дата и список временных зон.

Во время загрузки страницы происходит запрос данных временных зон и запускается интервал для ежесекундного обновления текущей даты.

Во время выбора другой временной зоны, глобальная дата форматируется под выбранную зону.

Работа сервера сымитирована при помощи Promise и Timeout.

# Используемые технологии

- React - для отрисовки интерфейса приложения
- Redux - для хранения состояния приложения
- Redux-Thunk - для реализации асинхронных экшенов в Redux
- Webpack - для сборки проекта

# Запуск проекта

- Клонировать репозиторий:  
  `git clone https://github.com/StMelik/clocks.git`

- Перейти в папку с проектом:  
  `cd clocks`

- Установить зависимости:  
  `npm install`

- Запустить проект:  
  `npm start`

# Ссылки

- [Ссылка на Проект](https://stmelik.github.io/clocks/)