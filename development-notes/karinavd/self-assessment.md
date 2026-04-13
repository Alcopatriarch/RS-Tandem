# Self-Assessment

| Feature | Description | PR | Points |
| :--- | :--- | :---: | :---: |
| Complex Component |Разработка сложного интерактивного компонента | | Dashboard +25
| Rich UI Screen | Реализация экрана со сложной логикой и состоянием | | Dashboard, TasksPanel +40
| Drag & Drop | Реализация перетаскивания (Kanban, сортировка, конструктор) | | 10
| i18n | Локализация интерфейса (минимум 2 языка) с переключением | | 10
| Responsive | Адаптация верстки под мобильные устройства (от 320px) | | 5
| Unit Tests (Basic) | Покрытие тестами 20%+ вашего личного кода | [https://github.com/Alcopatriarch/RS-Tandem/pull/95](https://github.com/Alcopatriarch/RS-Tandem/pull/95) | +10
| React | Использование библиотеки React | | 5
| Total | | | 105 |


## Description

1. Design (UI/UX). I developed the project’s design system from scratch in Figma, creating dark and light themes for the home page, dashboard, and registration and login forms
2. I implemented a routing system in the application, including secure routes and smart error handling (custom 404 page). To optimize the user interface, I developed the AppContent component, which uses the Layout pattern to preserve the Sidebar’s state when navigating between pages (DRY principle)
3. I set up a testing environment using Vitest and React Testing Library. I wrote a series of unit tests to verify validation logic and navigation, and actively conducted code reviews for my colleagues to help maintain a clean architecture
4. React, TypeScript, TailwindCSS (including theme implementation and internationalization), React Hook Form for validation, Vitest for testing

## 2  Feature Component 
1. Login & Registration (with validation)

This is a comprehensive module that serves as the entry point for users. The form logic was fully implemented using useForm. I personally configured complex validation using regular expressions (minimum 7 characters, at least one digit, at least one uppercase letter) and dynamic error display.
The component supports internationalization (language switching) and instant theme switching. To ensure reliability, I covered this module with unit tests that verify both successful scenarios and behavior in case of incorrect input

2. Interactive Dashboard and Card System

I developed an architecture for displaying content using an isolated and reusable TopicCard component. To ensure the interface’s stability, I implemented a Responsive CSS Grid, which allows the cards to adapt correctly from mobile devices to large monitors without the content “spilling over.” I implemented a configuration-driven UI approach, where the dashboard structure scales easily. I also built in logic for future pagination to ensure that large amounts of data do not impact rendering performance.


## link to PR
[Link](https://github.com/Alcopatriarch/RS-Tandem/pull/122)
