export default function Story({ img, username, user, id, ...props }) {
  return (
    <div>
      <img src={img} alt={username} />
      <p>{username}</p>
    </div>
  );
}
