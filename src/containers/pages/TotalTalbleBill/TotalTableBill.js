import './TotalTableBill.css';
import React from 'react'
import { Button, Col, Input, Row, Modal, notification, Table } from "antd";
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux'



function TotalTableBill(props) {
    const buttonBackStyle = {
        backgroundColor: "#86DBD4",
        borderColor: "#86DBD4",
        width: "300px",
        height: "50px",
        fontSize: "25px",
        padding: 0,
        marginRight: 80,
        marginBottom: 5,

    }

    const buttonNextStyle = {

        backgroundColor: "#ffffff",
        borderColor: "#86DBD4",
        color: "#86DBD4",
        width: "300px",
        height: "50px",
        fontSize: "25px",
        justifyContent: "right",
        marginRight: 70,
        marginLeft: 50,
        padding: 0
    }
    const history = useHistory()

    const back = () => {
        history.push('/table-list')
    }

    const columns = [
        {
            title: 'Menu',
            dataIndex: 'Menu',
            // render: text => <a>{text}</a>,
            align: 'center',


        },
        {
            title: 'Customer',
            dataIndex: 'Customer',
            align: 'center',
        },
        {
            title: 'Cash Assets',
            className: 'column-money',
            dataIndex: 'money',
            align: 'center',
        },

    ];

    const data = [
        {
            key: '1',
            Menu: 'rice',
            money: '300',
            Customer: 'A B C',
        },
        {
            key: '2',
            Menu: 'rice and curry',
            money: '400',
            Customer: 'A B',
        },
        {
            key: '3',
            Menu: 'boiled egg',
            money: '500',
            Customer: 'B C',
        },
    ];

    const total = 10000;


    return (

        <>
            <div className="divTableStyle">
                TABLE<br /> {props.selectTableNumber}
            </div>

            <div className="containerDivStyle">
                <div style={{ maxWidth: '60%', marginTop: '10px', margin: 'auto' }}>
                    <Table

                        columns={columns}
                        dataSource={data}
                        bordered
                        // title={() => 'Header'}
                        footer={() => <h1 style={{ color: "red" }}>Total = {total}</h1>}

                    />
                </div>
            </div>
            <Row justify="center" style={{ marginTop: "20px" }}>
                <Col>
                    <Button type="primary" shape="round" onClick={back}
                        style={buttonBackStyle}
                    >Back</Button>,

                    <Button type="primary" shape="round"
                        style={buttonNextStyle}
                    >Next</Button>
                </Col>
            </Row>

        </>
    )
}

const mapStateToProps = state => {
    return {
        selectTableNumber: state.tableList.selectTable
    }
}


export default connect(mapStateToProps, null)(TotalTableBill)
