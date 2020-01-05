import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from "bootstrap-4-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faInstagram, faYoutube, faGoogle, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

import styles from "./Footer.module.css";


export class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid={true} className={styles.footerBox}>
          <Container>
            <Row>
              <Col md={4} xs={6} justifyContent="start">
                <Col p="0" className={styles.footerHeader}>HEIKAMU</Col>
                <Col p="0" className={styles.footerCompany}>
                  <p>Heikamu is job-seeker company, and their About Us page goes above and beyond. Not only do they have the standard company history, but they also include the history of the Ghurka soldiers.</p>
                </Col>
              </Col>
              <Col md={4} xs={6} justifyContent="center" text="center">
                <Col p="0" className={styles.footerHeader}>User</Col>
                <Col p="0">
                  <ul className={styles.footerList}>
                    <li>About Us</li>
                    <li>Register User</li>
                    <li>Terms and Condition</li>
                    <li>FAQ User</li>
                  </ul>
                </Col>
              </Col>
              <Col md={4} xs={6} justifyContent="center" text="center">
                <Col p="0" className={styles.footerSocialMedia}>Ikuti Kami</Col>
                <Row className={styles.footerSocialMedia}>
                  <FontAwesomeIcon icon={faInstagram} size="2x" className={styles.socialMediaIcon}/>
                  <FontAwesomeIcon icon={faYoutube} size="2x" className={styles.socialMediaIcon}/>
                  <FontAwesomeIcon icon={faGoogle} size="2x" className={styles.socialMediaIcon}/>
                  <FontAwesomeIcon icon={faTwitter} size="2x" className={styles.socialMediaIcon}/>
                  <FontAwesomeIcon icon={faFacebook} size="2x" className={styles.socialMediaIcon}/>
                </Row>
              </Col>
            </Row>
          </Container>
            </Container>
          </React.Fragment>
    )
  }
}

export default Footer
