const EXERCISES_DATA = {
  categories: [
    {
      id: "javascript",
      label: "JavaScript",
      color: "amber",
      icon: "JS",
      topics: [
        {
          id: "js-promises",
          label: "Проміси",
          description: "async/await, Promise API, ланцюжки",
          totalPoints: 40,
          rounds: [
            {
              round: 1,
              type: "drag_order",
              points: 10,
              question:
                "Розташуй кроки виконання Promise у правильному порядку",
              items: [
                {
                  id: "r1i3",
                  text: ".then(result => console.log(result))",
                  correctIndex: 3,
                },
                {
                  id: "r1i0",
                  text: "const promise = new Promise((resolve, reject) => {",
                  correctIndex: 0,
                },
                { id: "r1i2", text: "});", correctIndex: 2 },
                {
                  id: "r1i4",
                  text: ".catch(err => console.error(err));",
                  correctIndex: 4,
                },
                { id: "r1i1", text: "  resolve('Успіх!');", correctIndex: 1 },
              ],
            },
            {
              round: 2,
              type: "fill_blank",
              points: 10,
              question: "Заповни пропуски, щоб функція повернула проміс",
              codeLines: [
                {
                  text: "_____ fetchData(url) {",
                  blanks: [
                    { id: "b1", answer: "async function", placeholder: "???" },
                  ],
                },
                {
                  text: "  const res = _____ fetch(url);",
                  blanks: [{ id: "b2", answer: "await", placeholder: "?" }],
                },
                {
                  text: "  const data = _____ res.json();",
                  blanks: [{ id: "b3", answer: "await", placeholder: "?" }],
                },
                {
                  text: "  return _____;",
                  blanks: [{ id: "b4", answer: "data", placeholder: "?" }],
                },
              ],
            },
            {
              round: 3,
              type: "block_builder",
              points: 10,
              question: "Зберіть код обробки кількох промісів одночасно",
              correctOrder: [0, 1, 2, 3],
              blocks: [
                {
                  id: "bl0",
                  text: "const [users, posts] = await Promise.all([",
                  order: 0,
                },
                {
                  id: "bl1",
                  text: "  fetch('/api/users').then(r => r.json()),",
                  order: 1,
                },
                {
                  id: "bl2",
                  text: "  fetch('/api/posts').then(r => r.json())",
                  order: 2,
                },
                { id: "bl3", text: "]);", order: 3 },
                {
                  id: "bl4",
                  text: "Promise.race([users, posts]);",
                  order: null,
                },
                { id: "bl5", text: "await Promise.resolve();", order: null },
              ],
            },
            {
              round: 4,
              type: "quiz",
              points: 10,
              question:
                "Що поверне Promise.allSettled() якщо один з промісів відхилено?",
              options: [
                {
                  id: "o1",
                  text: "Відхилить весь Promise одразу",
                  correct: false,
                },
                {
                  id: "o2",
                  text: "Поверне масив об'єктів зі статусом кожного",
                  correct: true,
                },
                {
                  id: "o3",
                  text: "Проігнорує помилку і поверне успішні",
                  correct: false,
                },
                { id: "o4", text: "Викине виключення", correct: false },
              ],
            },
          ],
        },
        {
          id: "js-functions",
          label: "Функції",
          description: "замикання, стрілкові, IIFE, HOF",
          totalPoints: 40,
          rounds: [
            {
              round: 1,
              type: "drag_order",
              points: 10,
              question:
                "Розташуй кроки створення замикання у правильному порядку",
              items: [
                { id: "r1i2", text: "  return function() {", correctIndex: 2 },
                {
                  id: "r1i0",
                  text: "function makeCounter() {",
                  correctIndex: 0,
                },
                { id: "r1i4", text: "}", correctIndex: 4 },
                { id: "r1i1", text: "  let count = 0;", correctIndex: 1 },
                { id: "r1i3", text: "    return ++count;", correctIndex: 3 },
              ],
            },
            {
              round: 2,
              type: "fill_blank",
              points: 10,
              question: "Заповни пропуски для функції вищого порядку",
              codeLines: [
                {
                  text: "const double = arr._____(x => x * 2);",
                  blanks: [{ id: "b1", answer: "map", placeholder: "?" }],
                },
                {
                  text: "const evens = arr._____(x => x % 2 === 0);",
                  blanks: [{ id: "b2", answer: "filter", placeholder: "?" }],
                },
                {
                  text: "const sum = arr.reduce((acc, x) => acc + x, _____);",
                  blanks: [{ id: "b3", answer: "0", placeholder: "?" }],
                },
              ],
            },
            {
              round: 3,
              type: "block_builder",
              points: 10,
              question: "Зберіть IIFE (функцію що викликає себе одразу)",
              correctOrder: [0, 1, 2, 3],
              blocks: [
                { id: "bl0", text: "(function() {", order: 0 },
                { id: "bl1", text: "  const secret = 42;", order: 1 },
                { id: "bl2", text: "  console.log(secret);", order: 2 },
                { id: "bl3", text: "})();", order: 3 },
                { id: "bl4", text: "function() { return 42; }", order: null },
                { id: "bl5", text: "const secret = () => {};", order: null },
              ],
            },
            {
              round: 4,
              type: "quiz",
              points: 10,
              question: "Яке значення this у стрілковій функції?",
              options: [
                { id: "o1", text: "Завжди window/global", correct: false },
                { id: "o2", text: "Визначається при виклику", correct: false },
                {
                  id: "o3",
                  text: "Береться з навколишнього lexical scope",
                  correct: true,
                },
                { id: "o4", text: "Завжди undefined", correct: false },
              ],
            },
          ],
        },
        {
          id: "js-arrays",
          label: "Масиви",
          description: "map, filter, reduce, spread, деструктуризація",
          totalPoints: 40,
          rounds: [
            {
              round: 1,
              type: "drag_order",
              points: 10,
              question: "Розташуй pipeline трансформації масиву по кроках",
              items: [
                { id: "r1i2", text: "  .filter(n => n > 10)", correctIndex: 2 },
                {
                  id: "r1i0",
                  text: "const result = [1, 5, 12, 3, 20]",
                  correctIndex: 0,
                },
                {
                  id: "r1i3",
                  text: "  .reduce((sum, n) => sum + n, 0);",
                  correctIndex: 3,
                },
                { id: "r1i1", text: "  .map(n => n * 2)", correctIndex: 1 },
              ],
            },
            {
              round: 2,
              type: "fill_blank",
              points: 10,
              question: "Заповни пропуски для деструктуризації масиву",
              codeLines: [
                {
                  text: "const [first, _____, ...rest] = [1, 2, 3, 4, 5];",
                  blanks: [{ id: "b1", answer: "second", placeholder: "?" }],
                },
                {
                  text: "console.log(first);  // _____",
                  blanks: [{ id: "b2", answer: "1", placeholder: "?" }],
                },
                {
                  text: "console.log(rest);   // _____",
                  blanks: [{ id: "b3", answer: "[3, 4, 5]", placeholder: "?" }],
                },
              ],
            },
            {
              round: 3,
              type: "block_builder",
              points: 10,
              question:
                "Зберіть функцію flatten (розпакування вкладених масивів)",
              correctOrder: [0, 1, 2],
              blocks: [
                { id: "bl0", text: "const flatten = arr =>", order: 0 },
                { id: "bl1", text: "  arr.reduce((acc, val) =>", order: 1 },
                {
                  id: "bl2",
                  text: "    acc.concat(Array.isArray(val) ? flatten(val) : val), []);",
                  order: 2,
                },
                { id: "bl3", text: "arr.flat(Infinity);", order: null },
                { id: "bl4", text: "  arr.map(x => x);", order: null },
              ],
            },
            {
              round: 4,
              type: "quiz",
              points: 10,
              question:
                "Яка різниця між Array.from() та spread оператором [...]?",
              options: [
                {
                  id: "o1",
                  text: "Немає різниці, це одне й те саме",
                  correct: false,
                },
                {
                  id: "o2",
                  text: "Array.from() приймає map-функцію другим аргументом",
                  correct: true,
                },
                {
                  id: "o3",
                  text: "Spread працює тільки з масивами",
                  correct: false,
                },
                {
                  id: "o4",
                  text: "Array.from() повільніший завжди",
                  correct: false,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "typescript",
      label: "TypeScript",
      color: "blue",
      icon: "TS",
      topics: [
        {
          id: "ts-types",
          label: "Типи",
          description: "базові типи, union, intersection, literal",
          totalPoints: 40,
          rounds: [
            {
              round: 1,
              type: "drag_order",
              points: 10,
              question: "Розташуй оголошення типів від простих до складних",
              items: [
                {
                  id: "r1i2",
                  text: "type ID = string | number;",
                  correctIndex: 2,
                },
                {
                  id: "r1i0",
                  text: "let name: string = 'Alice';",
                  correctIndex: 0,
                },
                {
                  id: "r1i3",
                  text: "type Admin = User & { role: 'admin' };",
                  correctIndex: 3,
                },
                {
                  id: "r1i4",
                  text: "type Theme = 'light' | 'dark' | 'system';",
                  correctIndex: 4,
                },
                {
                  id: "r1i1",
                  text: "let age: number | null = null;",
                  correctIndex: 1,
                },
              ],
            },
            {
              round: 2,
              type: "fill_blank",
              points: 10,
              question: "Заповни пропуски для правильних типів",
              codeLines: [
                {
                  text: "function greet(name: _____): string {",
                  blanks: [{ id: "b1", answer: "string", placeholder: "тип" }],
                },
                { text: "  return `Hello, ${name}`;", blanks: [] },
                { text: "}", blanks: [] },
                {
                  text: "let x: number | _____ = null;",
                  blanks: [{ id: "b2", answer: "null", placeholder: "?" }],
                },
              ],
            },
            {
              round: 3,
              type: "block_builder",
              points: 10,
              question: "Зберіть union type з type guard",
              correctOrder: [0, 1, 2, 3],
              blocks: [
                { id: "bl0", text: "type Shape = Circle | Square;", order: 0 },
                {
                  id: "bl1",
                  text: "function area(s: Shape): number {",
                  order: 1,
                },
                {
                  id: "bl2",
                  text: "  if ('radius' in s) return Math.PI * s.radius ** 2;",
                  order: 2,
                },
                { id: "bl3", text: "  return s.side ** 2;", order: 3 },
                {
                  id: "bl4",
                  text: "type Shape = Circle & Square;",
                  order: null,
                },
                { id: "bl5", text: "  return s.area();", order: null },
              ],
            },
            {
              round: 4,
              type: "quiz",
              points: 10,
              question: "Яка різниця між type і interface в TypeScript?",
              options: [
                {
                  id: "o1",
                  text: "interface швидший у рантаймі",
                  correct: false,
                },
                {
                  id: "o2",
                  text: "type не можна розширити, interface — можна через declaration merging",
                  correct: true,
                },
                { id: "o3", text: "Вони повністю ідентичні", correct: false },
                {
                  id: "o4",
                  text: "type тільки для примітивів",
                  correct: false,
                },
              ],
            },
          ],
        },
        {
          id: "ts-generics",
          label: "Дженерики",
          description: "Generic функції, класи, constraints",
          totalPoints: 40,
          rounds: [
            {
              round: 1,
              type: "drag_order",
              points: 10,
              question: "Розташуй кроки створення generic функції",
              items: [
                { id: "r1i2", text: "  return arr[0];", correctIndex: 2 },
                {
                  id: "r1i0",
                  text: "function first<T>(arr: T[]): T | undefined {",
                  correctIndex: 0,
                },
                { id: "r1i3", text: "}", correctIndex: 3 },
                {
                  id: "r1i4",
                  text: "const x = first([1, 2, 3]); // number",
                  correctIndex: 4,
                },
                {
                  id: "r1i1",
                  text: "  if (!arr.length) return undefined;",
                  correctIndex: 1,
                },
              ],
            },
            {
              round: 2,
              type: "fill_blank",
              points: 10,
              question: "Заповни пропуски для Utility Types",
              codeLines: [
                {
                  text: "type Keys = _____ User;",
                  blanks: [{ id: "b1", answer: "keyof", placeholder: "?" }],
                },
                {
                  text: "type Flags = _____<string, boolean>;",
                  blanks: [{ id: "b2", answer: "Record", placeholder: "?" }],
                },
                {
                  text: "type NoId = _____<User, 'id'>;",
                  blanks: [{ id: "b3", answer: "Omit", placeholder: "?" }],
                },
              ],
            },
            {
              round: 3,
              type: "block_builder",
              points: 10,
              question: "Зберіть generic Stack клас",
              correctOrder: [0, 1, 2, 3, 4],
              blocks: [
                { id: "bl0", text: "class Stack<T> {", order: 0 },
                { id: "bl1", text: "  private items: T[] = [];", order: 1 },
                {
                  id: "bl2",
                  text: "  push(item: T): void { this.items.push(item); }",
                  order: 2,
                },
                {
                  id: "bl3",
                  text: "  pop(): T | undefined { return this.items.pop(); }",
                  order: 3,
                },
                { id: "bl4", text: "}", order: 4 },
                { id: "bl5", text: "  items: any[] = [];", order: null },
                { id: "bl6", text: "class Stack extends Array {", order: null },
              ],
            },
            {
              round: 4,
              type: "quiz",
              points: 10,
              question: "Що робить utility type Partial<T>?",
              options: [
                {
                  id: "o1",
                  text: "Робить всі поля обов'язковими",
                  correct: false,
                },
                { id: "o2", text: "Видаляє всі методи з типу", correct: false },
                {
                  id: "o3",
                  text: "Робить всі поля необов'язковими",
                  correct: true,
                },
                {
                  id: "o4",
                  text: "Створює копію типу тільки для читання",
                  correct: false,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "algorithms",
      label: "Algorithms",
      color: "teal",
      icon: "AL",
      topics: [
        {
          id: "algo-sorting",
          label: "Сортування",
          description: "bubble, quick, merge sort",
          totalPoints: 40,
          rounds: [
            {
              round: 1,
              type: "drag_order",
              points: 10,
              question: "Розташуй кроки алгоритму Bubble Sort",
              items: [
                {
                  id: "r1i3",
                  text: "      if (arr[j] > arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]];",
                  correctIndex: 3,
                },
                {
                  id: "r1i0",
                  text: "function bubbleSort(arr) {",
                  correctIndex: 0,
                },
                {
                  id: "r1i2",
                  text: "    for (let j = 0; j < arr.length - i - 1; j++) {",
                  correctIndex: 2,
                },
                { id: "r1i4", text: "  return arr;", correctIndex: 4 },
                {
                  id: "r1i1",
                  text: "  for (let i = 0; i < arr.length; i++) {",
                  correctIndex: 1,
                },
              ],
            },
            {
              round: 2,
              type: "fill_blank",
              points: 10,
              question: "Заповни пропуски для Binary Search",
              codeLines: [
                { text: "function binarySearch(arr, target) {", blanks: [] },
                {
                  text: "  let left = _____, right = arr.length - 1;",
                  blanks: [{ id: "b1", answer: "0", placeholder: "?" }],
                },
                {
                  text: "  while (left _____ right) {",
                  blanks: [{ id: "b2", answer: "<=", placeholder: "?" }],
                },
                {
                  text: "    const mid = Math.floor((left + _____) / 2);",
                  blanks: [{ id: "b3", answer: "right", placeholder: "?" }],
                },
              ],
            },
            {
              round: 3,
              type: "block_builder",
              points: 10,
              question: "Зберіть рекурсивний Quick Sort",
              correctOrder: [0, 1, 2, 3, 4],
              blocks: [
                { id: "bl0", text: "function quickSort(arr) {", order: 0 },
                {
                  id: "bl1",
                  text: "  if (arr.length <= 1) return arr;",
                  order: 1,
                },
                {
                  id: "bl2",
                  text: "  const pivot = arr[Math.floor(arr.length / 2)];",
                  order: 2,
                },
                {
                  id: "bl3",
                  text: "  const left = arr.filter(x => x < pivot);",
                  order: 3,
                },
                {
                  id: "bl4",
                  text: "  return [...quickSort(left), pivot, ...quickSort(right)];",
                  order: 4,
                },
                { id: "bl5", text: "  return arr.sort();", order: null },
                { id: "bl6", text: "  const pivot = arr[0];", order: null },
              ],
            },
            {
              round: 4,
              type: "quiz",
              points: 10,
              question: "Яка середня складність Quick Sort?",
              options: [
                { id: "o1", text: "O(n²)", correct: false },
                { id: "o2", text: "O(n)", correct: false },
                { id: "o3", text: "O(n log n)", correct: true },
                { id: "o4", text: "O(log n)", correct: false },
              ],
            },
          ],
        },
        {
          id: "algo-dp",
          label: "Динамічне програмування",
          description: "memoization, tabulation, класичні задачі",
          totalPoints: 40,
          rounds: [
            {
              round: 1,
              type: "drag_order",
              points: 10,
              question: "Розташуй кроки мемоізованого Fibonacci",
              items: [
                {
                  id: "r1i3",
                  text: "  memo[n] = fib(n-1, memo) + fib(n-2, memo);",
                  correctIndex: 3,
                },
                {
                  id: "r1i0",
                  text: "function fib(n, memo = {}) {",
                  correctIndex: 0,
                },
                {
                  id: "r1i2",
                  text: "  if (memo[n]) return memo[n];",
                  correctIndex: 2,
                },
                { id: "r1i4", text: "  return memo[n];", correctIndex: 4 },
                {
                  id: "r1i1",
                  text: "  if (n <= 1) return n;",
                  correctIndex: 1,
                },
              ],
            },
            {
              round: 2,
              type: "fill_blank",
              points: 10,
              question: "Заповни пропуски для задачі Knapsack",
              codeLines: [
                {
                  text: "const dp = Array(W + 1)._____(0);",
                  blanks: [{ id: "b1", answer: "fill", placeholder: "?" }],
                },
                {
                  text: "for (let w = W; w >= item.weight; _____) {",
                  blanks: [{ id: "b2", answer: "w--", placeholder: "?" }],
                },
                {
                  text: "  dp[w] = Math._____(dp[w], dp[w - item.weight] + item.value);",
                  blanks: [{ id: "b3", answer: "max", placeholder: "?" }],
                },
              ],
            },
            {
              round: 3,
              type: "block_builder",
              points: 10,
              question: "Зберіть рекурсивний factorial",
              correctOrder: [0, 1, 2, 3],
              blocks: [
                { id: "bl0", text: "function factorial(n) {", order: 0 },
                { id: "bl1", text: "  if (n <= 1) return 1;", order: 1 },
                { id: "bl2", text: "  return n * factorial(n - 1);", order: 2 },
                { id: "bl3", text: "}", order: 3 },
                { id: "bl4", text: "  return n + factorial(n);", order: null },
                { id: "bl5", text: "  if (n === 0) return n;", order: null },
              ],
            },
            {
              round: 4,
              type: "quiz",
              points: 10,
              question: "Яка різниця між memoization і tabulation?",
              options: [
                {
                  id: "o1",
                  text: "Це одне й те саме, просто різні назви",
                  correct: false,
                },
                {
                  id: "o2",
                  text: "Memoization — top-down з кешем, tabulation — bottom-up з таблицею",
                  correct: true,
                },
                { id: "o3", text: "Tabulation завжди швидша", correct: false },
                {
                  id: "o4",
                  text: "Memoization використовує більше пам'яті завжди",
                  correct: false,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default EXERCISES_DATA;
