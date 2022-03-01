import Character from '../module/Character';

describe('Тест класса Character', () => {
  test('Валидация имени героя', () => {
    function errorChecking() {
      return new Character('_', '');
    }

    expect(errorChecking).toThrowError(new Error('Неверное имя героя'));
  });

  test('Валидация типа героя', () => {
    function errorChecking() {
      return new Character('name', '');
    }

    expect(errorChecking).toThrowError(new Error('Неверный тип героя'));
  });
});
