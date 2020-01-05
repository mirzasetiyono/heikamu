import React, { Component } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Card } from "bootstrap-4-react";


import styles from "./Body.module.css";

export class Body extends Component {
    constructor(props) {
        super(props)
    }

    JobCard = () => (
        <React.Fragment>
            <Row>
                {this.props.data.map(jobData => (
                    <Col sm={6} position="relative">
                        <Card mt="3" className={styles.cardStyling}>
                            <Col text="center" md={12} className={styles.coName}>
                                {jobData.companyName}
                            </Col>
                            <div className={styles.cardContentStyling}>
                                <Col xs={4} md={3} justifty-content="center" text="center" className={styles.imgLogo}>
                                    <img fluid src={jobData.logo} width="80" height="150" />
                                </Col>
                                <Col xs={12} md={9} className={styles.separator}>
                                    <Col className={styles.position}>{jobData.position.toUpperCase()}</Col>
                                    <Col className={styles.wage}>{jobData.wage}</Col>
                                    <Col className={jobData.wageNegotiable ? styles.negotiable : styles.notNegotiable}>{jobData.wageDisplay}</Col>
                                    <Col><span className={styles.specKeys}>Lowongan Pekerjaan di </span>{jobData.city}</Col>
                                    <Col><span className={styles.specKeys}>Lowongan Pekerjaan di Bidang </span>{jobData.category}</Col>
                                    <Col><span className={styles.specKeys}>Lowongan Pekerjaan </span>{jobData.jobType}</Col>
                                </Col>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </React.Fragment>
    )
    BodyNote = () => (
        <React.Fragment>
            <Row>
                <Col mr="auto" mt="2" fontWeight="bold" >Lowongan Kerja Terbaru</Col>
                <Col ml="auto" mt="2" className={styles.filterStyling}>
                    <a href="#" data-toggle="modal" data-target="#filterModal">FILTER <FontAwesomeIcon icon={faAngleDown} /></a>
                </Col>
            </Row>
        </React.Fragment>
    )

    render() {
        return (
            <React.Fragment>
                <Container className={styles.main}>
                    <this.BodyNote />
                    <this.JobCard />
                </Container>
            </React.Fragment>
        )
    }
}

export default Body
