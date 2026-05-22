interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Snow',
  age: 23,
  location: 'Paris',
};

const student2: Student = {
  firstName: 'Janette',
  lastName: 'Jackson',
  age: 22,
  location: 'texas',
};

const studentsList: Student[] = [student1, student2];

// Création du tableau HTML
const table: HTMLTableElement = document.createElement('table');

// Parcours des étudiants
studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = document.createElement('tr');

  // Colonne prénom
  const firstNameCell: HTMLTableCellElement = document.createElement('td');
  firstNameCell.textContent = student.firstName;

  // Colonne localisation
  const locationCell: HTMLTableCellElement = document.createElement('td');
  locationCell.textContent = student.location;

  // Ajout des cellules à la ligne
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  // Ajout de la ligne au tableau
  table.appendChild(row);
});

// Ajout du tableau dans le body
document.body.appendChild(table);
