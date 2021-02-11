import React from 'react';
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

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      needToLogin: false, // показывать или нет форму авторизации 
    };
  }

  openCloseAuthForm(value) { // Отвечает за открытие формы авторизации. Если авторизация прошла успешно, закрывает окно с формой авторизации.
    this.setState({ needToLogin: value });
  }

  authResult(value) {
    this.setState({ needToLogin: !value });
    this.header.setState({ authStatus: value });
  }

  render() {
    return (
      <div className="App">
        {this.state.needToLogin ? 
          <AuthorizationForm 
            authResult={(value) => this.authResult(value)}
          ></AuthorizationForm> : ''
        }
        <Header 
          ref={header => this.header = header}
          openCloseAuthForm={(value) => this.openCloseAuthForm(value)} 
          authStatus={this.state.needToLogin}
        ></Header>
        <Article></Article>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;