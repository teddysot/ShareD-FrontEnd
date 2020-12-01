import React from 'react'
import { Button, Col, Form, Input, notification, Row, Table, Progress, } from "antd";
import 'antd/dist/antd.css';
import { useHistory, withRouter } from 'react-router-dom';

function Bills() {
    const history = useHistory();

    const columns = [
        {
            title: 'Menu',
            dataIndex: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Price',
            className: 'column-money',
            dataIndex: 'money',
            align: 'right',
        },
    ];

    const data = [
        {
            key: '1',
            name: 'ปลากระพงทอดน้ำปลา',
            money: '1,000',
        },
        {
            key: '2',
            name: 'ไก่ทอดเกลือ',
            money: '1,000',
        },
        {
            key: '3',
            name: 'ปากเป็ดทอด',
            money: '1,000',
        },
    ];

    return (
        <>
            <Row style={{ marginTop: "1rem", marginBottom: 0, marginLeft: "1rem" }}>
                <Col span={6}
                    style={{
                        backgroundColor: "#F5F5F5",
                        height: "80vh",
                        borderRadius: "20px"
                    }}>
                    <Row justify="center"
                        style={{
                            backgroundColor: "#86DBD4",
                            borderRadius: "20px",
                        }}>
                        <h2>Customer 1</h2>
                    </Row>
                    <Table
                        columns={columns}
                        dataSource={data}
                        pagination={false}
                    // title={() => 'Customer 1'}
                    // footer={() => 'รวมทั้งหมด : 3,000 บาท'}
                    />
                    <Row justify="center" style={{ marginTop: "1rem" }}>
                        <h2>รวมทั้งหมด : 3,000 บาท</h2>
                    </Row>
                    <Row justify="center" style={{ marginTop: "1rem" }}>
                        <Progress type="circle" percent={100} width={50} status="exception" />
                    </Row>
                    <Row justify="space-around" style={{ marginTop: "1rem" }}>
                        <Col>
                            <Button type="primary" shape="round"
                                style={{
                                    backgroundColor: "#86DBD4",
                                    borderColor: "#86DBD4",
                                    width: "100px",
                                    height: "40px",
                                    fontSize: "25px",
                                    padding: 0
                                }}
                                onClick={() => history.push("/")}
                            >Online</Button>
                        </Col>
                        <Col>
                            <Button type="primary" shape="round"
                                style={{
                                    backgroundColor: "#86DBD4",
                                    borderColor: "#86DBD4",
                                    width: "100px",
                                    height: "40px",
                                    fontSize: "25px",
                                    padding: 0
                                }}
                                onClick={() => history.push("/")}
                            >Counter</Button>
                        </Col>
                    </Row>
                </Col>

                <Col span={6}>Customer 2</Col>

                <Col span={6}>Customer 3</Col>

                <Col span={6}>Customer 4</Col>

            </Row>

        </>
    )
}

export default Bills
