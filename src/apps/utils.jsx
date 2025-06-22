export function getImageUrl(person) {
  return "https://i.imgur.com/" + person.imageId + "s.jpg";
}

export function Divider() {
  return (
    <div>
      <br />
      <hr />
      <br />
    </div>
  );
}
