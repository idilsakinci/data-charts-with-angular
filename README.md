# Dashboard with data graphs and tables

## You can access the project from this link: https://data-charts-tables.netlify.app/

This project was created with Angular CLI and MaterialProAngularLite template was used.

<img width="959" alt="Ekran görüntüsü 2024-06-01 233306" src="https://github.com/idilsakinci/data-charts-with-angular/assets/76444215/8f650d67-73ac-4ac8-bcc9-7284b12a765d">

### MaterialProAngularLite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.1.

#### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

#### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

#### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.


### Data Graphs and Tables

#### Data Service

The API url containing the data is introduced in the service section and is ready to be used in components.

#### Teams

In the Teams area, the name, description, overall score and number of employees of each team are presented to the user in a tabular form. There is a selection in this field that allows 5, 10 and 20 data representations per page.

<img width="501" alt="image" src="https://github.com/idilsakinci/data-charts-with-angular/assets/76444215/1ce3be5e-6d26-402e-bd01-f7280952c80f">

#### Top Employees

Employees tagged as top employees are presented to the user with their name, position, e-mail and score information. This field also shows the average score value of all employees.

<img width="241" alt="image" src="https://github.com/idilsakinci/data-charts-with-angular/assets/76444215/ec81ba8a-9a25-4b87-aff3-52bc5245ce1c">

#### Add Field

There are two buttons in the insertion area. These are adding a new team and adding a new employee. Both of these processes are based on stepper. When the add new team button is clicked, the data entries for the team are displayed in the field, and when the add new employee button is clicked, the data entries for the employee are displayed.

<img width="199" alt="image" src="https://github.com/idilsakinci/data-charts-with-angular/assets/76444215/31595734-752d-4b31-8501-48197b9d7a6f">

<img width="200" alt="image" src="https://github.com/idilsakinci/data-charts-with-angular/assets/76444215/22618ea6-750e-4c07-bf1e-30073560e818">

#### Employees

The data of all employees, including their names, e-mail addresses, positions, scores, lessons taken and skills being developed, were displayed with the help of a table. Team selection can be made using the select at the top of this area, and the employees in that team can be reflected in the table and examined.

<img width="416" alt="image" src="https://github.com/idilsakinci/data-charts-with-angular/assets/76444215/7016a958-d106-4046-b5bc-9e2653d6ce99">


#### Courses

The courses section is divided into two. Courses under the in progress tag are displayed on dahsboard by default. When you click on the upcoming courses text in the title of the section, the page scrolls and information about the upcoming courses is displayed. At this stage, photographic information about the courses, which was not included in the data, was added to the project.

<img width="632" alt="image" src="https://github.com/idilsakinci/data-charts-with-angular/assets/76444215/bc5c7bfc-1b89-4bd9-bf45-cf3811018dd1">

<img width="634" alt="image" src="https://github.com/idilsakinci/data-charts-with-angular/assets/76444215/f181136a-6d71-44e2-b2a7-cf28142bf58b">

#### Skills in Development

Skills in development were created with the help of a column chart. Here, for each skill, it is shown how many employees have developed in this skill.

<img width="416" alt="image" src="https://github.com/idilsakinci/data-charts-with-angular/assets/76444215/428cb63e-b494-4be9-9e58-e0866250c483">

#### Top Skills

Top skills evaluated with pie chart, and the chart was created with percentages according to the number of employees.

<img width="227" alt="image" src="https://github.com/idilsakinci/data-charts-with-angular/assets/76444215/a5f03d48-0fb4-46bc-87d8-f1337947f4f5">

#### Activity Hours

Column and line charts are used together in the Activity hours field. The number of courses taken according to dates is shown with a column chart, and the hours are shown with a line chart. Both charts are active as default, but depending on the user's wishes, both can be shown or removed from view.

<img width="470" alt="image" src="https://github.com/idilsakinci/data-charts-with-angular/assets/76444215/b4a1e6a9-69dd-4716-a836-42dc77207ef6">

<img width="467" alt="image" src="https://github.com/idilsakinci/data-charts-with-angular/assets/76444215/64a0ff6c-ab0b-4ce7-a5d5-e6b0cada6eed">

#### All content

![general](https://github.com/idilsakinci/data-charts-with-angular/assets/76444215/3acf6c1e-3a10-4a1c-b3ae-930ba1d61e1e)





