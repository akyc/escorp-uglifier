### Порядок работы

1. Устновить LTS-версию [Node.js](https://nodejs.org/en/download/)
2. Запустить терминал / консоль в нужной папке:
   1. ```bash git clone https://github.com/akyc/escorp-uglifier.git```
   3. `$ npm i gulp -g`
   4. `$ cd escorp-uglifier`
   5. `$ npm i`
   6. `$ code .`, `$ wstorm .`, `$ subl .`, _etc_
3. Указать папки с исходниками в [gulpfile.js](gulpfile.js), строки 7-10, по умолчанию `src/css` и `src/js`.
4. Воспользоваться одной из команд `$ npm run css` или `$ npm run js`
5. Забрать результат из папки `dist`
