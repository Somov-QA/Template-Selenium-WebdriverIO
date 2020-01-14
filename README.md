# Проект автоматизированного тестирования Selenium (Webdriver IO)
<br>Официальный сайт https://webdriver.io/
<br>Официальная документация API https://webdriver.io/docs/api.html
<br>Официальная страницы Webdriver IO на NPM https://www.npmjs.com/package/webdriverio
<p>
    <h3>Структура проекта:</h3>
    <br>[node_modules] - <i>папка с установленными модулями</i>
    <br>[test/specs] basic.js - <i>автоматизированный тест</i>
    <br>package
    <br>package-lock
</p>
<h3>Инструкция:</h3>
<br>Настроить проекта. команда: <b>npm init -y</b>
<br>Установить WebdriverIO CLI. команда: <b>npm i --save-dev @wdio/cli</b>
<br>Создать файл конфигурации. Перейти в папку /node_modules/.bin/ и выполнить команду: <b>wdio config -y</b> (в результате создан файл wdio.conf.js)
<p>
<br>Нужно отредактировать файл /node_modules/.bin/<b>wdio.conf.js</b>
<br>specs: [ '../../test/specs/**/*.js' ],
</p>
<br>Создать папку для тестов <b>test/specs/</b> в корне папке проекта
<br>Создать файл <b>basic.js</b> по адресу test/specs/
<br>Описать автотест в файле basic.js
<br>Запуск теста командой: <b>wdio wdio.conf.js</b> находясь в папке /node_modules/.bin/