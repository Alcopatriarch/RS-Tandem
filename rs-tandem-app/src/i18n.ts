import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  EN: {
    translation: {
      common: {
        projectName: "Project Name",
        aboutUs: "About us",
        back: "Back",
      },
      about: {
        title: "About Us",
        descriptionLine1: "We are a team of students developing an interactive",
        descriptionLine2: "web application for teaching programmers.",
        teamTitle: "Our Team",
        githubBtn: "GitHub",
      },
      home: {
        welcomeTitle: "Welcome to the Project Name",
        subtitle: "Learn. Create. Conquer.",
        signInBtn: "Sign In",
        registerBtn: "Register",
      },
      team: {
        member1: {
          name: "Vladyslav Ivankov",
          description: "Team Lead, Web Developer, and a bit of a Game Designer",
        },
        member2: {
          name: "Karyna Avdieieva",
          description: "Designer, Web Developer, and just a good person",
        },
        member3: {
          name: "Sergey Lee",
          description: "Web Developer and Backend Engineer",
        },
      },
      auth: {
        title: "Authorization",
        emailLabel: "Email",
        emailPlaceholder: "Enter your email",
        passwordLabel: "Password",
        passwordPlaceholder: "Enter your password",
        signInBtn: "Sign In",
        loginSuccess: "Successful login!",
        registerSuccess: "User successfully created!",
      },
      dashboard: {
        title: "Dashboard",
        mainMenu: "Main",
        topicPrompt: "Choose a topic to start learning",
        filters: {
          all: "All",
          js: "JS",
          ts: "TS",
          algorithms: "Algorithms",
        },
        sections: {
          javascript: "JavaScript",
          typescript: "TypeScript",
          algorithms: "Algorithms",
        },
        card: {
          basic: "BASIC",
          medium: "MEDIUM",
          advanced: "ADVANCED",
          doneBtn: "Done",
          tasks: "tasks",
          continueBtn: "Continue",
        },
        topics: {
          promises: "Promises",
          functions: "Functions",
          arrays: "Arrays",
          types: "Types",
          generics: "Generics",
          sorting: "Sorting",
          dynamicProgramming: "Dynamic programming",
        },
      },
      lesson: {
        backToTopics: "Back to topics",
        pts: "pts",
        attemptsLeft: "Attempts left:",
        buttons: {
          check: "Check",
          reset: "Reset",
        },
        badges: {
          dragAndDrop: "drag & drop",
          fillInTheBlank: "fill in the blank",
          blockBuilder: "block builder",
        },
        blockBuilder: {
          availableBlocks: "Available blocks",
          yourSolution: "Your solution",
          correctSolution: "Correct solution",
          dragHere: "Drag blocks here",
        },
        prompts: {
          arrangeOrder:
            "Arrange the steps of Promise execution in the correct order",
          fillBlank: "Fill in the blanks so the function returns a promise",
          buildBlocks:
            "Assemble the code to handle multiple promises simultaneously",
        },
        completion: {
          status: "Completed",
          title: "Topic completed!",
          score: "You scored {{score}} out of {{total}} points",
        },
      },
    },
  },
  UA: {
    translation: {
      common: {
        projectName: "Назва проєкту",
        aboutUs: "Про нас",
        back: "Назад",
      },
      home: {
        welcomeTitle: "Ласкаво просимо до Tandem App",
        subtitle: "Навчайся. Створюй. Підкорюй.",
        signInBtn: "Увійти",
        registerBtn: "Зареєструватися",
      },
      auth: {
        title: "Авторизація",
        emailLabel: "Email",
        emailPlaceholder: "Введіть ваш email",
        passwordLabel: "Пароль",
        passwordPlaceholder: "Введіть ваш пароль",
        signInBtn: "Увійти",
        loginSuccess: "Успішний вхід!",
        registerSuccess: "Користувача успішно створено!",
      },
      dashboard: {
        title: "Дашборд",
        mainMenu: "Головна",
        topicPrompt: "Оберіть тему для початку навчання",
        filters: {
          all: "Всі",
          js: "JS",
          ts: "TS",
          algorithms: "Алгоритми",
        },
        sections: {
          javascript: "JavaScript",
          typescript: "TypeScript",
          algorithms: "Алгоритми",
        },
        card: {
          basic: "БАЗОВИЙ",
          medium: "СЕРЕДНІЙ",
          advanced: "ПРОСУНУТИЙ",
          doneBtn: "Готово",
          tasks: "завдань",
          continueBtn: "Продовжити",
        },
        topics: {
          promises: "Проміси",
          functions: "Функції",
          arrays: "Масиви",
          types: "Типи",
          generics: "Дженерики",
          sorting: "Сортування",
          dynamicProgramming: "Динамічне програмування",
        },
      },
      lesson: {
        backToTopics: "До списку тем",
        pts: "pts",
        attemptsLeft: "Залишилося спроб:",
        buttons: {
          check: "Перевірити",
          reset: "Скинути",
        },
        badges: {
          dragAndDrop: "drag & drop",
          fillInTheBlank: "fill in the blank",
          blockBuilder: "block builder",
        },
        blockBuilder: {
          availableBlocks: "Доступні блоки",
          yourSolution: "Твій розв'язок",
          correctSolution: "Правильний розв'язок",
          dragHere: "Перетягни блоки сюди",
        },
        prompts: {
          arrangeOrder:
            "Розташуй кроки виконання Promise у правильному порядку",
          fillBlank: "Заповни пропуски, щоб функція повернула проміс",
          buildBlocks: "Зберіть код обробки кількох промісів одночасно",
        },
        completion: {
          status: "Завершено",
          title: "Тему завершено!",
          score: "Ти набрав {{score}} з {{total}} балів",
        },
      },
      team: {
        member1: {
          name: "Vladyslav Ivankov",
          description: "Тімлід, веб-розробник та трохи геймдизайнер",
        },
        member2: {
          name: "Karyna Avdieieva",
          description: "Дизайнер, веб-розробник і просто хороша людина",
        },
        member3: {
          name: "Sergey Lee",
          description: "Веб-розробник та бекендер",
        },
      },
      about: {
        title: "Про нас",
        descriptionLine1: "Ми — команда студентів, яка розробляє інтерактивний",
        descriptionLine2: "веб-додаток для вивчення програмування.",
        teamTitle: "Наша команда",
        githubBtn: "GitHub",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "UA",
  fallbackLng: "EN",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
