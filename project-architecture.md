```tree

rs-tandem-app/
├── public/                     # статические файлы, которые не обрабатываются vite
│   ├── favicon.ico
│   └── robots.txt
│
├── src/
│   ├── assets/                 # изображения, шрифты, иконки и т.д.
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   │
│   ├── components/             # переиспользуемые UI-компоненты (без бизнес-логики)
│   │   ├── ui/                 # примитивы / атомы (Button, Input, Card, Modal, Badge и т.д.)
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   └── index.ts
│   │   │   └── Input/
│   │   │       ├── Input.tsx
│   │   │       └── index.ts
│   │   │
│   │   ├── layout/             # LayoutHeader, Footer, Sidebar, PageContainer...
│   │   └── common/             # сложные (DataTable, FormField и т.д.)
│   │
│   │ 
│   ├── features/               # modules / domains
│   │   ├── auth/
│   │   │   ├── components/     # AuthForm, LoginCard, RegisterForm...
│   │   │   ├── hooks/          # useLogin, useCurrentUser...
│   │   │   ├── api/            # authApi.ts 
│   │   │   ├── types.ts
│   │   │   └── index.ts
│   │   │
│   │   └── dashboard/
│   │       ├── components/
│   │       ├── hooks/
│   │       └── api/
│   │
│   ├── pages/                  # страницы / роуты 
│   │   ├── WelcomePage.tsx
│   │   ├── DashboardPage.tsx
│   │   ├── NotFoundPage.tsx
│   │   └── index.ts
│   │
│   ├── hooks/                  # глобальные / общие хуки 
│   ├── lib/                    # не-React утилиты
│   │   ├── utils.ts
│   │   └── cn.ts               ← если использовать tailwind-merge + clsx
│   │
│   ├── stores/                 # zustand 
│   │   └── useUserStore.ts
│   │
│   ├── types/                  # глобальные типы (api, env и т.д.)
│   │   └── index.ts
│   │
│   │
│   ├── routes/                 # если использовать react-router
│   │   ├── index.tsx
│   │   └── protected-route.tsx
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
├── .eslintrc.cjs / .prettierrc
└── README.md

```
# Соглашения по именованию

| Что именно                  | Рекомендация              | Пример                                      | 
|-----------------------------|---------------------------|---------------------------------------------|
| Компоненты (имя класса)     | PascalCase                | UserProfileCard                             |
| Имя файла компонента        | kebab-case                | UserProfileCard.tsx / user-profile-card.tsx |
| Папки                       | kebab-case                | user-profile, data-table                    |
| Файлы утилит / хуки         | camelCase или kebab-case  | formatDate.ts / format-date.ts              |
| Константы                   | UPPER_SNAKE_CASE          | API_BASE_URL                                |
| CSS-классы (tailwind)       | kebab-case                | btn-primary-lg                              |
| Файл index                  | index.ts / index.tsx      | —                                           |

- **Хуки → useUserProfile, файл → use-user-profile.ts**
- **Утилиты → cn.ts, format-date.ts, api-client.ts**

