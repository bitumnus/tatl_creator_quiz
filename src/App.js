import React, {Component} from 'react'
import {Route, Switch, Redirect, withRouter, Router} from 'react-router-dom'
import Auth from './containers/Auth/Auth'
import {connect} from 'react-redux'
import {autoLogin} from './store/actions/auth';
import MainLayout from './components/Navigation/MainLayout';
import { history } from './helpers/history';

class App extends Component {

  componentDidUpdate() {
    this.props.autoLogin();
  }
  

  render() {
    

    // let routes = (
    //   <Switch>
    //     <Route path="/auth" component={Auth} />
    //     <Route path="/quiz/:id" component={Quiz} />
    //     <Route path="/quizList" component={QuizList} />
    //     <Route path="/quiz-creator" component={QuizCreator} />
    //     <Route path="/startQuiz" component={ChooseQuizToStart} />
    //     <Route path="/publicStore" component={PublicStore} />
    //     <Route path="/rating" component={Rating} />
    //     <Route path="/quizTamplates" component={QuizTamplates} />
    //     <Route path="/" exact component={Dashboard} />
    //     <Route path="/logout" component={Logout} />
    //     <Redirect to="/auth" />
    //   </Switch>
    // )

    return (
      <Router history={history}>
        <Switch>
          <Route path="/auth" component={Auth} />
          { this.props.isAuthenticated && <Route path="/" component={ MainLayout } /> }
          {/* <Redirect to="/" /> */}
        </Switch>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token
  }
}

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
