import ProfileCard from './ProfileCard';
import alexa from './images/alexa.png';
import cortana from './images/cortana.png';
import siri from './images/siri.png';

import 'bulma/css/bulma.css';

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>
      <div className="container">
        <div className="sections">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
                title="Alexa"
                twitter="@alexa99"
                image={alexa}
                description="Alexa was created by Amazon and helps you buy things"
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Cortana"
                twitter="@cortana32"
                image={cortana}
                description="Cortana was made by Microsoft. Who knows what it does?"
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Siri"
                twitter="@siri01"
                image={siri}
                description="Siri was made by Apple and is bring phased out"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
