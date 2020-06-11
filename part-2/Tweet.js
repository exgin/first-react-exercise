const Tweet = (props) => {
  return (
    <div>
      <h3>Tweet Info</h3>
      <ul>
        <li>Username: @{props.username}</li>
        <li>Name: {props.name}</li>
        <li>Date: {props.date}</li>
        <li>Msg: {props.msg}</li>
      </ul>
    </div>
  );
};
