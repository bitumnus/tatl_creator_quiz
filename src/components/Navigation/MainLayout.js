import React from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import Logout from '../Logout/Logout'
// // import {autoLogin} from './store/actions/auth';
import ChooseQuizToStart from '../../containers/TeacherBlock/ChooseQuizToStart'
import PublicStore from '../../containers/TeacherBlock/PublicStore'
import Rating from '../../containers/TeacherBlock/Rating'
import QuizTamplates from '../../containers/TeacherBlock/QuizTemplates'
import MainDrawer from './MainDrawer'
import Auth from '../../containers/Auth/Auth';
import Quiz from '../../containers/Quiz/Quiz';
import QuizList from '../../containers/QuizList/QuizList';
import QuizCreator from '../../containers/QuizCreator/QuizCreator';
import Dashboard from '../../containers/Dashboard/Dashboard';

const MainLayout = () => {
  
  let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/quiz/:id" component={Quiz} />
        <Route path="/quizList" component={QuizList} />
        <Route path="/quiz-creator" component={QuizCreator} />
        <Route path="/startQuiz" component={ChooseQuizToStart} />
        <Route path="/publicStore" component={PublicStore} />
        <Route path="/rating" component={Rating} />
        <Route path="/quizTamplates" component={QuizTamplates} />
        <Route path="/" exact component={Dashboard} />
          <Route path="/logout" component={Logout} />
        <Redirect to="/" />
      </Switch>
    )
      

    // if (this.props.isAuthenticated) {
    //   routes = (
    //     <Switch>
    //       <Route path="/quiz-creator" component={QuizCreator} />
    //       <Route path="/quiz/:id" component={Quiz} />
    //       <Route path="/logout" component={Logout} />
    //       <Route path="/quizList" exact component={QuizList} />
    //       <Redirect to="/" />
    //     </Switch>
    //   )
    // }

    return (
        <MainDrawer>
            { routes }
        </MainDrawer>
    );
}
 

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token
  }
}
export default withRouter(connect(mapStateToProps)(MainLayout))
