function ProfileCard({ title, twitter, image, description }) {
  // function ProfileCard(props) {
  // const title = props.title;
  // const twitter = props.twitter;
  // const { title, twitter } = props;
  return (
    // <div>
    //   <img src={image} alt={title + ' ' + 'logo'} />
    //   <div>{title}</div>
    //   <div>{twitter}</div>
    // </div>

    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt={title + ' ' + 'logo'} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">{twitter}</p>
          </div>
        </div>
        <div className="content">{description}</div>
      </div>
    </div>
  );
}

export default ProfileCard;
