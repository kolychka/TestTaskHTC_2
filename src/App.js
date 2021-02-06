import './App.css';

import './components/css/main.css';
import './components/css/font.css';
import './components/css/header.css';
import './components/css/footer.css';
import './components/css/authorization.css';
import './components/css/tabs.css';
import './components/css/movie.css';
import './components/css/tv-channels.css';
import './components/css/genres.css';
import './components/css/button.css';
import './components/css/checkbox.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AuthorizationForm from './components/authorizationForm/AuthorizationForm';
import Article from './components/article/Article';
import Films from './components/article/films/Films';
import TVChannels from './components/article/tvChannels/TVChannels';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AuthorizationForm></AuthorizationForm>
      <Article></Article>
      <Films></Films>
      <TVChannels></TVChannels>
      <Footer></Footer>
      <header className="App-header"></header>
    </div>
  );
}

export default App;