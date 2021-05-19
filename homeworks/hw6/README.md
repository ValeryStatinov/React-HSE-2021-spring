### **ДЗ 7 - React router** - deadline 23:59 26.05

Необходимо подключить `react-router-dom` к проекту

* Появляется новая сущность - projects. Project ~ папка для создания задач внутри. Например, "Домашние дела", "Универ", "Список покупок" и тд.
* В вашем react-проекте должно быть как минимум 2 страницы:
  1. страница со списком всех проектов
      * создание нового проекта либо на этой же странице, либо на отдельной
  2. страница проекта; в url должен быть отражен id project'a
      * на странице проекта отоброжаются все таски, принадлежащие данному проекту.
      * создание новой таски либо на странице проекта, либо отдельная страница
* При попытке перехода по несуществующему url необходимо редиректить на страницу со списком проектов или на страницу 404

* Нормализовать стейт. В этом пунтке нужно написать ф-ию для преобразования массива проектов из такого формата
```javascript
projects = [
  {
    id: 1234,
    name: 'Project name',
    tasks: [
      {
        id: 4321,
        name: '',
        description: '',
        completed: false
      },
      // ...
    ]
  },
  // ...
]
```
в такой
```javascript
state = {
  projectsById: {
    1: {
      id: 1,
      name: 'Project name',
      tasksIds: [1, 2, 3]
    },
    2: {
      id: 1,
      name: 'Project name 2',
      tasksIds: [4, 5]
    },
    // ...
  },

  tasksById: {
    1: {
      id: 1,
      name: 'Task #1',
      description: 'descr',
      completed: false,
    },
    2: {
      id: 2,
      name: 'Task #2',
      description: 'descr',
      completed: true,
    },
    // ...
  }
}
```
т.е. должна появиться ф-ия
```javascript
const normalizeState = (projectArray) => { // projectArray - массив проектов из первого код сниппета
  // some magic
  return normalizedState // normalizedState - нормализованный стейт из второго код сниппета
}
```
Это необходимо для более легкой интеграцией с беком в будущем, тк он будет отвечать в похожем на первый код сниппет формате.

Стилизовать можно как угодно, это оцениваться не будет.