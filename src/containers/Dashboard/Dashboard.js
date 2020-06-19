import React from 'react';
import { withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Statistics from '../Statistics/Statistics';

const Dashboard = () => {

    return ( 
        <div>
            Статистика:
            <Statistics />
        </ div>
    );
}
 

function mapStateToProps(state) {
    return {
      isAuthenticated: !!state.auth.token
    }
}
export default withRouter(connect(mapStateToProps)(Dashboard))
