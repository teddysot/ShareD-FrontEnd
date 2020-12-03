import '../Bills/Bills.css';
import React from 'react';
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
            <Row className="RowOutline">
                <Col className="ColOutline" span={6} >
                    <Row className="RowCustomer" justify="center">
                        <Col className="ColCustomer">Customer 1</Col>
                    </Row>
                    <Table
                        columns={columns}
                        dataSource={data}
                        pagination={false}
                    // title={() => 'Customer 1'}
                    // footer={() => 'Total : 3,000 บาท'}
                    />
                    <Row className="RowTotal" justify="center">
                        <Col className="ColTotal">Total : 3,000 บาท</Col>
                    </Row>
                    <Row className="RowProgress" justify="center">
                        <Progress
                            type="circle"
                            percent={100}
                            width={50}
                            status="exception" />
                    </Row>
                    <Row className="RowButton" justify="space-around">
                        <Col>
                            <Button className="OnlineButton"
                                type="primary"
                                shape="round"
                                onClick={() => history.push("/")}
                            >Online</Button>
                        </Col>
                        <Col>
                            <Button className="CounterButton"
                                type="primary"
                                shape="round"
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
