import './App.css';
import Tabs from './Tabs';
import Card from '@material-ui/core/Card';
import StarIcon from '@material-ui/icons/Star';

function App() {
  return (
    <div className="App">
      <div className="home-title">
        <h2>Добре дошли</h2>
        <h2>Хотел Мария Гарден - Кранево</h2>
        <div style={{ margin: '20px' }}>
          <StarIcon style={{ color: '#ffbe00' }} />
          <StarIcon style={{ color: '#ffbe00' }} />
          <StarIcon style={{ color: '#ffbe00' }} />
        </div>
      </div>
      <Card>
        <Tabs />
      </Card>
    </div>
  );
}

export default App;
