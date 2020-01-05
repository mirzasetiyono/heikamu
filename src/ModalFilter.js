import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Modal, Form, Button } from "bootstrap-4-react";

import styles from "./ModalFilter.module.css";

export class ModalFilter extends Component {
    render() {
        return (
            <React.Fragment>
                <Modal id="filterModal" fade>
                    <Modal.Dialog centered lg>
                        <Modal.Content>
                            <Container fluid>
                                <Row className={styles.title}>
                                    <span mr="auto" mt="1">Filter</span>
                                    <Button ml="auto" height={10} type="button" data-dismiss="modal">x</Button>
                                </Row>

                                <Row>
                                    <Col md={4} xs={6} className={styles.contentBoxLeft}>
                                        <Form.Group>
                                            <Form.Check>
                                                FASILITAS
                                                <Col mb="1" mt="2">
                                                    <Form.Checkbox id="fasilitas1" />
                                                    <Form.CheckLabel htmlFor="fasilitas1">Parkir Khusus Karyawan</Form.CheckLabel>
                                                </Col>
                                                <Col mb="1">
                                                    <Form.Checkbox id="fasilitas2" />
                                                    <Form.CheckLabel htmlFor="fasilitas2">Antar Jemput Karyawan</Form.CheckLabel>
                                                </Col>
                                                <Col mb="1">
                                                    <Form.Checkbox id="fasilitas3" />
                                                    <Form.CheckLabel htmlFor="fasilitas1">Ruangan Kerja Ber-AC</Form.CheckLabel>
                                                </Col>
                                                <Col mb="1">
                                                    <Form.Checkbox id="fasilitas4" />
                                                    <Form.CheckLabel htmlFor="fasilitas1">Internet 24 Jam</Form.CheckLabel>
                                                </Col>
                                                <Col mb="1">
                                                    <Form.Checkbox id="fasilitas5" />
                                                    <Form.CheckLabel htmlFor="fasilitas1">Telepon Kantor</Form.CheckLabel>
                                                </Col>
                                                <Col mb="1">
                                                    <Form.Checkbox id="fasilitas6" />
                                                    <Form.CheckLabel htmlFor="fasilitas1">Ruangan Meeting</Form.CheckLabel>
                                                </Col>
                                                <Col mb="1">
                                                    <Form.Checkbox id="fasilitas7" />
                                                    <Form.CheckLabel htmlFor="fasilitas1">Ruangan Kerja Outdoor</Form.CheckLabel>
                                                </Col>
                                                <Col mb="1">
                                                    <Form.Checkbox id="fasilitas8" />
                                                    <Form.CheckLabel htmlFor="fasilitas1">Ruangan Makan</Form.CheckLabel>
                                                </Col>
                                                <Col mb="1">
                                                    <Form.Checkbox id="fasilitas9" />
                                                    <Form.CheckLabel htmlFor="fasilitas1">Seragam Bebas</Form.CheckLabel>
                                                </Col>
                                                <Col mb="1">
                                                    <Form.Checkbox id="fasilitas10" />
                                                    <Form.CheckLabel htmlFor="fasilitas1">Cemilan Gratis</Form.CheckLabel>
                                                </Col>
                                                <Col mb="1">
                                                    <Form.Checkbox id="fasilitas11" />
                                                    <Form.CheckLabel htmlFor="fasilitas1">Kartu Nama Karyawan</Form.CheckLabel>
                                                </Col>
                                            </Form.Check>
                                        </Form.Group>
                                    </Col>
                                    <Col md={4} xs={6} className={styles.contentBox}>
                                        <Form.Group>
                                            <Form.Check>
                                                BENEFIT
                                                <Col mb="1" mt="2">
                                                    <Form.Checkbox id="benefit1" />
                                                    <Form.CheckLabel htmlFor="benefit1">Kontrak Kerja Yang Sah</Form.CheckLabel>
                                                </Col>
                                                <Col mb="1">
                                                    <Form.Checkbox id="benefit2" />
                                                    <Form.CheckLabel htmlFor="benefit2">Kerja 5 Hari/ Minggu</Form.CheckLabel>
                                                </Col>
                                                <Col mb="1">
                                                    <Form.Checkbox id="benefit3" />
                                                    <Form.CheckLabel htmlFor="benefit3">Kerja 8 Jam/ Hari</Form.CheckLabel>
                                                </Col>
                                                <Col mb="1">
                                                    <Form.Checkbox id="benefit4" />
                                                    <Form.CheckLabel htmlFor="benefit4">Komisi Penjualan</Form.CheckLabel>
                                                </Col>
                                                <Col mb="1">
                                                    <Form.Checkbox id="benefit5" />
                                                    <Form.CheckLabel htmlFor="benefit5">Kenaikan Gaji</Form.CheckLabel>
                                                </Col>
                                                <Col mb="1">
                                                    <Form.Checkbox id="benefit6" />
                                                    <Form.CheckLabel htmlFor="benefit6">Tunjangan Kesehatan</Form.CheckLabel>
                                                </Col>
                                                <Col mb="1">
                                                    <Form.Checkbox id="benefit7" />
                                                    <Form.CheckLabel htmlFor="benefit7">Tunjangan Hari Tua</Form.CheckLabel>
                                                </Col>
                                                <Col mb="1">
                                                    <Form.Checkbox id="benefit8" />
                                                    <Form.CheckLabel htmlFor="benefit8">Cuti Menikah</Form.CheckLabel>
                                                </Col>
                                                <Col mb="1">
                                                    <Form.Checkbox id="benefit9" />
                                                    <Form.CheckLabel htmlFor="benefit9">Izin Tidur Siang Sejenak</Form.CheckLabel>
                                                </Col>
                                                <Col mb="1">
                                                    <Form.Checkbox id="benefit10" />
                                                    <Form.CheckLabel htmlFor="benefit10">Hak Cuti Karyawan</Form.CheckLabel>
                                                </Col>
                                                <Col mb="1">
                                                    <Form.Checkbox id="benefit11" />
                                                    <Form.CheckLabel htmlFor="benefit11">Izin Sholat 5 Waktu</Form.CheckLabel>
                                                </Col>
                                            </Form.Check>
                                        </Form.Group>
                                    </Col>
                                    <Col md={4} xs={6} className={styles.contentBox}>
                                        <Form.Group>
                                            <Form.Check>
                                                PENGALAMAN KERJA
                                                <Col mb="1" mt="2">
                                                    <Form.Checkbox id="pengalaman1" />
                                                    <Form.CheckLabel htmlFor="pengalaman1">Semua</Form.CheckLabel>
                                                </Col>
                                                <Col mb="1">
                                                    <Form.Checkbox id="pengalaman2" />
                                                    <Form.CheckLabel htmlFor="pengalaman2">SMP/SMA/SMK</Form.CheckLabel>
                                                </Col>
                                                <Col mb="1">
                                                    <Form.Checkbox id="pengalaman3" />
                                                    <Form.CheckLabel htmlFor="pengalaman1">Fresh Graduate</Form.CheckLabel>
                                                </Col>
                                                <Col mb="1">
                                                    <Form.Checkbox id="pengalaman4" />
                                                    <Form.CheckLabel htmlFor="pengalaman4">Junior</Form.CheckLabel>
                                                </Col>
                                                <Col mb="1">
                                                    <Form.Checkbox id="pengalaman5" />
                                                    <Form.CheckLabel htmlFor="pengalaman5">Experienced</Form.CheckLabel>
                                                </Col>
                                                <Col mb="1">
                                                    <Form.Checkbox id="pengalaman6" />
                                                    <Form.CheckLabel htmlFor="pengalaman1">Senior</Form.CheckLabel>
                                                </Col>
                                                <Col mb="1">
                                                    <Form.Checkbox id="pengalaman7" />
                                                    <Form.CheckLabel htmlFor="pengalaman7">Manager</Form.CheckLabel>
                                                </Col>
                                                <Col>
                                                    <Form.Checkbox id="pengalaman8" />
                                                    <Form.CheckLabel htmlFor="pengalaman8">Director</Form.CheckLabel>
                                                </Col>
                                                <Col><Button mb="2" mt="2" dark className={styles.button}>Apply</Button></Col>
                                                <Col><Button dark className={styles.button}>Reset</Button></Col>
                                            </Form.Check>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Container>
                        </Modal.Content>
                    </Modal.Dialog>
                </Modal>
            </React.Fragment>
        )
    }
}

export default ModalFilter
