import   React, { Component } from 'react'

import { Container, Navbar, Nav, Collapse, ButtonGroup, Button, Dropdown, Form, } from 'bootstrap-4-react';

import 'bootstrap/dist/css/bootstrap.min.css';

import styles  from "./Header.module.css";

export class Header extends Component {
    constructor(props){
        super(props)        
    }

    // call functions from app.js whenever user click on dropdowns (see below queries comments at line 79) and set the others dropdown to default.
    processJtQuery = (val) => {             // <== Job type query line 83
        this.props.queryJobType(val);
        document.getElementById("CatSelect").selectedIndex = 0;
        document.getElementById("ProSelect").selectedIndex = 0;
        document.getElementById("CitSelect").selectedIndex = 0;
    }

    processCatQuery = (val) => {            // <== Category query line 88
        this.props.queryCategory(val);
        document.getElementById("JTSelect").selectedIndex = 0;
        document.getElementById("ProSelect").selectedIndex = 0;
        document.getElementById("CitSelect").selectedIndex = 0;
    }

    processProQuery = (val) => {            // <== Province query line 98
        this.props.queryProvince(val);
        document.getElementById("JTSelect").selectedIndex = 0;
        document.getElementById("CatSelect").selectedIndex = 0;
        document.getElementById("CitSelect").selectedIndex = 0;
    }

    processCitQuery = (val) => {            // <== City query line 105
        this.props.queryCity(val);
        document.getElementById("JTSelect").selectedIndex = 0;
        document.getElementById("CatSelect").selectedIndex = 0;
        document.getElementById("ProSelect").selectedIndex = 0;
    }

    render() {
        return (
            // First Level Navbar // First Level Navbar // First Level Navbar // First Level Navbar // First Level Navbar // First Level Navbar // First Level Navbar
            <React.Fragment>
                <Navbar expand="lg" light bg="warning">
                    <Navbar.Brand>
                        <span className={styles.logoStyling}>HEIKAMU</span>
                    </Navbar.Brand>
                    <Navbar.Toggler target="#collapseContent" />
                    <Collapse flex-column navbar id="collapseContent">
                        {/* LEFT SIDE NAVBAR */}
                        <Navbar.Nav mr="auto">
                            <Nav.Item ml="3" className={styles.navItem}>Job</Nav.Item>
                            <Nav.Item ml="3" className={styles.navItem}>Place</Nav.Item>
                            <Nav.Item ml="3" className={styles.navItem}>Coupon</Nav.Item>
                        </Navbar.Nav>
                        {/* RIGHT SIDE NAVBAR */}
                        <Navbar.Nav ml="auto">
                            <Nav.Item dropdown className={styles.langStyling}>
                                <Nav.Link dropdownToggle >IND</Nav.Link>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Bahasa Indonesia</Dropdown.Item>
                                    <Dropdown.Item>Bahasa Inggris</Dropdown.Item>
                                </Dropdown.Menu>
                            </Nav.Item>
                            <Nav.Item ml="3" className={styles.comp}>
                                <Button light outline>Perusahaan</Button>
                            </Nav.Item>
                            <Nav.Item ml="3">
                                <ButtonGroup>
                                    <Button light>Masuk</Button>
                                    <Button light>Daftar</Button>
                                </ButtonGroup>
                            </Nav.Item>
                        </Navbar.Nav>
                    </Collapse>
                </Navbar>
                {/* Queries */} {/* Queries */} {/* Queries */} {/* Queries */} {/* Queries */} {/* Queries */} {/* Queries */} {/* Queries */} {/* Queries */}
                <Container fluid className={styles.queryStyling} >
                    <Form.Input type="search" placeholder="Posisi yang dicari" mt="2" />
                    <Form.CustomSelect id="JTSelect" className={styles.selectStyling} onChange={ (e) => this.processJtQuery(e.target.value)} mt="2">
                        <option selected disabled>Pilih Status Pekerjaan</option>
                        <option>Internship</option>
                        <option>Full Time</option>
                    </Form.CustomSelect>
                    <Form.CustomSelect id="CatSelect" mt="2" onChange={ (e) => this.processCatQuery(e.target.value)}>
                        <option defaultChecked selected>Pilih Kategori</option>
                        <option>Administrasi</option>
                        <option>Desain</option>
                        <option>Hukum</option>
                        <option>Kesehatan</option>
                        <option>Komputer</option>
                        <option>Pemasaran</option>
                        <option>Lainnya</option>
                    </Form.CustomSelect>
                    <Form.CustomSelect id="ProSelect" className={styles.selectStyling} mt="2" onChange={ (e) => this.processProQuery(e.target.value)}>
                        <option selected disabled>Pilih Provinsi</option>
                        <option>Banten</option>
                        <option>DKI Jakarta</option>
                        <option>Jawa Barat</option>
                        <option>Jawa Timur</option>
                    </Form.CustomSelect>
                    <Form.CustomSelect id="CitSelect" mt="2" onChange={ (e) => this.processCitQuery(e.target.value)}>
                        <option selected disabled>Pilih Kota</option>
                        <option>Bandung</option>
                        <option>Jakarta Pusat</option>
                        <option>Jakarta Barat</option>
                        <option>Jakarta Selatan</option>
                        <option>Jakarta Utara</option>
                        <option>Surabaya</option>
                        <option>Tanggerang Selatan</option>
                    </Form.CustomSelect>
                </Container>
            </React.Fragment>
        )
    }
}

export default Header
