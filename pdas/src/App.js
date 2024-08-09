import ProfileCard from './ProfileCard';
import alexa from './images/alexa.png';
import cortana from './images/cortana.png';
import siri from './images/siri.png';

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>
      <ProfileCard title="Alexa" twitter="@alexa99" image={alexa} />
      <ProfileCard title="Cortana" twitter="@cortana32" image={cortana} />
      <ProfileCard title="Siri" twitter="@siri01" image={siri} />
    </div>
  );
}

export default App;
