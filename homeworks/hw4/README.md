### **ДЗ 4 - Add tasks** - deadline 23:59 30.04

Необходимо реализовать добавление задач в TaskTracker:

* Должны появится инпуты для ввода `name` имени и `description` описания задачи
* Кнопка для добавления задачи с введенными именем и описанием в список задач
* Разделить приложение на разные компоненты, например (не обязательно именно такое разделение):
  * App - корневой
  * Task - рисует одну таску
  * TaskList - рисует список тасок
  * TaskAdd - два инпута для ввода имени и описания

  Для каждого компонента отдельная папка `components/ComponentName`, внутри которой js файл для самого компонента и css файл для его стилизации
* При нажатии на кнопу внутри таски ее свойство completed должно меняться на противоположное. Это изменение должно быть отображено на UI. Для реализации этого пункта вам понадобится метод массива `findIndex`. Будте внимательны, не допускайте мутаций стейта!

**Новое дз - новая ветка и новый PR**