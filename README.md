## Запуск проекта

```
npm install - устанавливаем зависимости
npm run start:dev или npm run start:vite - запуск сервера + frontend проекта в dev режиме
```

---

## Скрипты

-   `npm run start` - Запуск frontend проекта на webpack dev server
-   `npm run vite` - Запуск frontend проекта на vite
-   `npm run start:dev` - Запуск frontend проекта на webpack dev server + backend
-   `npm run start:vite` - Запуск frontend проекта на vite + backend
-   `npm run server` - Запуск backend сервера
-   `npm run build:prod` - Сборка в prod режиме
-   `npm run build:dev` - Сборка в dev режиме (не минимизирован)
-   `npm run lint` - Проверка ts файлов линтером
-   `npm run lint:fix` - Исправление ts файлов линтером
-   `npm run style` - Проверка scss файлов style линтером
-   `npm run style:fix` - Исправление scss файлов style линтером
-   `npm run unit` - Хапуск unit тестов с jest
-   `npm run sb` - Запуск Storybook
-   `npm run sb:build` - Сборка storybook билда
-   `npm run prepare` - Прекоммит хуки
-   `npm run generate` - Скрипт для генерации FSD слайсов

---

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Работа с переводами

В проекте используется библиотека i18next для работы с переводами.
Файлы с переводами хранятся в public/locales.

Для комфортной работы рекомендуем установить плагин для webstorm/vscode

Документация i18next - [https://react.i18next.com/](https://react.i18next.com/)

---

## Тесты

В проекте используются 3 вида тестов:

1. Обычные unit тесты на jest - `npm run unit`
2. Тесты на компоненты с React testing library -`npm run unit`
3. e2e тестирование с Cypress `npm run test:e2e`

Подробнее о тестах - [документация тестирование](/docs/tests.md)

---

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

Также для строгого контроля главных архитектурных принципов
используется собственный eslint plugin _eslint-plugin-eslint-correct-paths-plugin_,
который содержит 3 правила

1. path-checker - запрещает использовать абсолютные импорты в рамках одного модуля
2. layer-imports - проверяет корректность использования слоев с точки зрения FSD
   (например widgets нельзя использовать в features и entitites)
3. imports-from-public-api - разрешает импорт из других модулей только из public api. Имеет auto fix

##### Запуск линтеров

-   `npm run lint` - Проверка ts файлов линтером
-   `npm run lint:fix` - Исправление ts файлов линтером
-   `npm run style` - Проверка scss файлов style линтером
-   `npm run style:fix` - Исправление scss файлов style линтером

---

## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью msw-storybook-addon.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:

-   `npm run sb`

Подробнее о [Storybook](/docs/storybook.md) c примерами.

---

## Конфигурация проекта

Для разработки проект содержит 2 конфига:

1. Webpack - ./config/build
2. vite - vite.config.ts

Оба сборщика адаптированы под основные фичи приложения.

Вся конфигурация хранится в /config

-   /config/babel - babel
-   /config/build - конфигурация webpack
-   /config/jest - конфигурация тестовой среды
-   /config/storybook - конфигурация сторибука

В папке `scripts` находятся различные скрипты для рефакторинга\упрощения написания кода\генерации отчетов и тд.

---

## CI pipeline и pre commit хуки

Конфигурация github actions находится в /.github/workflows.
В ci прогоняются все виды тестов, сборка проекта и сторибука, линтинг.

В прекоммит хуках проверяем проект линтерами, конфиг в /.husky

---

### Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit.
По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

---

## Сущности (entities)

-   [Article](/src/entities/Article)
-   [Comment](/src/entities/Comment)
-   [Counter](/src/entities/Counter)
-   [Country](/src/entities/Country)
-   [Currency](/src/entities/Currency)
-   [Notification](/src/entities/Notification)
-   [Profile](/src/entities/Profile)
-   [Rating](/src/entities/Rating)
-   [User](/src/entities/User)

## Фичи (features)

-   [AddNewComment](/src/features/AddNewComment)
-   [ArticleEditForm](/src/features/ArticleEditForm)
-   [ArticleRating](/src/features/ArticleRating)
-   [ArticleRecommendationsList](/src/features/ArticleRecommendationsList)
-   [ArticleSortSelector](/src/features/ArticleSortSelectort)
-   [ArticleTypeTabs](/src/features/ArticleTypeTabs)
-   [ArticleViewSelector](/src/features/ArticleViewSelector)
-   [AuthByUsername](/src/features/AuthByUsername)
-   [AvatarDropdown](/src/features/AvatarDropdown)
-   [EditableProfileCard](/src/features/EditableProfileCard)
-   [LangSwitcher](/src/features/LangSwitcher)
-   [NotificationButton](/src/features/NotificationButton)
-   [ThemeSwitcher](/src/features/ThemeSwitcher)
-   [UI](/src/features/UI)
