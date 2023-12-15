export default function Person({ person }) {
  if (!person) {
    return <div>Loading...</div>;
  }

  const first = person.firstName;
  const last = person.lastName;
  const email = person.email;

  return (
    <div>
      <p>First Name: {first}</p>
      <p>Last Name: {last}</p>
      <p>Email: {email}</p>
    </div>
  );
}
