### Порядок работы

1. Устновить LTS-версию [Node.js](https://nodejs.org/en/download/)
2. Запустить терминал / консоль в нужной папке:
   1. `$ git clone https://github.com/akyc/escorp-uglifier.git`
   2. `$ npm i gulp -g`
   3. `$ cd escorp-uglifier`
   4. `$ npm i`
   5. `$ code .`, `$ wstorm .`, `$ subl .`, _etc_
3. Указать папки с исходниками в [gulpfile.js](blob/main/gulpfile.js), строки 7-10, по умолчанию `src/css` и `src/js`.
4. Воспользоваться одной из команд `$ npm run css` или `$ npm run js`
5. Забрать результат из папки `dist`
