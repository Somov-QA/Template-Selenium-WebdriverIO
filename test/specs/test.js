const assert = require('assert');

describe('a test suite', () => {    // необходим для вывода отчета
    it('a test case', () => {       // тест кейс
        // Действия
        browser.url('https://www.google.com/');
        let searchField = $('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input');
        searchField.addValue('GeForce 1650');
        browser.keys(['Return']);

        // Проверка заголовка страницы
        browser.waitUntil(() => {
            return browser.getTitle() === 'GeForce 1650 - Поиск в Google';
        }, 5000);

        const title = browser.getTitle();
        assert.strictEqual(title, 'GeForce 1650 - Поиск в Google');

        // Проверка полученного результата поиска
        let list = $('#rso > div:nth-child(3) > div');
        console.log('FIRST SEARCH RESULT:', list.$$(function(){
            return this.querySelectorAll('div.g');
        })[1].getText());

        let listElements = $('#rso > div:nth-child(3) > div').$$('div.g');
        console.log('LIST COUNT',listElements.length);
        assert.notStrictEqual(listElements.length , undefined);
        assert.notStrictEqual(listElements.length , 0);
    });
});