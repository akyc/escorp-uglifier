### Порядок работы

1. Устновить LTS-версию [Node.js](https://nodejs.org/en/download/)
2. Запустить терминал / консоль в нужной папке:
   ```bash 
   git clone https://github.com/akyc/escorp-uglifier.git
   ```
   ```bash 
   $ npm i gulp -g
   ```
   ```bash
   $ cd escorp-uglifier
   ```
   ```bash
   $ npm i
   ```
   ```bash
   $ code .
   ```
3. Указать папки с исходниками в [gulpfile.js](gulpfile.js), строки 7-10, по умолчанию `src/css` и `src/js`.
4. Воспользоваться одной из команд `$ npm run css` или `$ npm run js`
5. Забрать результат из папки `dist`
