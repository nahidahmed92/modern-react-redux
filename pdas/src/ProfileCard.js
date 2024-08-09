function ProfileCard({ title, twitter, image }) {
  // function ProfileCard(props) {
  // const title = props.title;
  // const twitter = props.twitter;
  // const { title, twitter } = props;
  return (
    <div>
      <img src={image} />
      <div>{title}</div>
      <div>{twitter}</div>
    </div>
  );
}

export default ProfileCard;
