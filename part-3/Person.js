const Person = (props) => {
  let msg;
  if (props.age < 18) {
    msg = 'You must be 18n to vote';
  } else {
    msg = 'Please go vote!';
  }
  return (
    <div>
      <h3>{msg}</h3>
      <p>
        Learn some information about this Person: {props.name} | {props.age}
      </p>
      <p>Hobbies:</p>
      <ul>
        {props.hobbies.map((el) => (
          <li>{el}</li>
        ))}
      </ul>
    </div>
  );
};
