/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Container, Row, Col, Nav } from 'react-bootstrap'


import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import SectionContainer from 'components/SectionContainer'
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

import LineChart from './LineChart'

import './styles.css'

const key = 'home';

export function HomePage({
  username,
  loading,
  error,
  repos,
  onSubmitForm,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  const reposListProps = {
    loading,
    error,
    repos,
  };

  return (
    <>
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>
        <Container fluid>
          <Row>
            <Col md={3} lg={2} className="sidebar">
              <div className="sidebar-sticky">
                <Nav defaultActiveKey="/home" className="flex-column py-2 nav-list">
                  <Nav.Link href="/home" className="title active">Home</Nav.Link>
                  <Nav.Link eventKey="link-1">Learning</Nav.Link>
                  <Nav.Link eventKey="link-2">Courses</Nav.Link>
                  <Nav.Link eventKey="link-3">Learning Plans</Nav.Link>
                  <hr/>
                  <Nav.Link eventKey="disabled" className="title" disabled>Manage</Nav.Link>
                  <Nav.Link eventKey="link-4">Users</Nav.Link>
                  <Nav.Link eventKey="link-5">Skills</Nav.Link>
                  <Nav.Link eventKey="link-6">Reports</Nav.Link>
                  <Nav.Link eventKey="link-7">Analytics</Nav.Link>
                  <Nav.Link eventKey="link-8">Annoucements</Nav.Link>
                  <hr/>
                  <Nav.Link eventKey="disabled" className="title" disabled>Configure</Nav.Link>
                  <Nav.Link eventKey="link-9">Points</Nav.Link>
                  <Nav.Link eventKey="link-10">Reward</Nav.Link>
                  <Nav.Link eventKey="link-11">Email templates</Nav.Link>
                  <Nav.Link eventKey="link-12">Company Info</Nav.Link>
                  <Nav.Link eventKey="link-13">Billing</Nav.Link>
                </Nav>
              </div>
            </Col>
            <Col md={9} lg={10} className="px-md-4 ml-sm-auto bg-content py-2">
              <Row>
                <Col md={12}>
                  <SectionContainer title="Your Title">
                    <Row>
                      <Col md={8}>
                        <LineChart />
                      </Col>
                      <Col md={4}>
                        Lorem ipsum
                      </Col>
                    </Row>
                  </SectionContainer>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </article>
    </>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
