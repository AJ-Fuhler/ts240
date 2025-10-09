type NameOptions = {
  firstName?: string;
  lastName?: string;
  title?: string;
};

function formatName({ title, firstName = 'John', lastName = 'Doe'}: NameOptions): string {
  title = title ? title + ' ' : '';

  return `${title}${firstName} ${lastName}`;
}

const formattedName = formatName({
  firstName: "Jane",
  lastName: "Smith",
  title: "Dr.",
});

console.log(formattedName); // "Dr. Jane Smith"
console.log(formatName({})); // John Doe