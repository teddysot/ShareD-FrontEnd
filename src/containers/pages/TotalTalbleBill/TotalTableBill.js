import React from 'react'
import { Button, Col, Input, Row, Modal, notification, Table } from "antd";



function TotalTableBill() {
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

    const total = 100000;


    return (

        <>
                        <div style={{
                            backgroundColor: '#86DBD4',
                            padding: '5px',
                            fontSize: '25px',
                            width: '150px',
                            height: '100px',
                            color: '#DCDCDC',
                            marginTop: '20px',
                            marginBottom: '20px',
                            borderRadius: '20px',
                            margin: 'auto',
                            marginTop: '20px'
                           
                        }}>
                            TABLE
            </div>
                   <div style={{padding:'50px'}}>
                            <Table
                                columns={columns}
                                dataSource={data}
                                bordered
                                // title={() => 'Header'}
                                footer={() => `Total = ${total}`}

                            />
                       </div> 
            <Row justify="center">
                <Col>
                    <Button type="primary" shape="round"
                        style={{
                            backgroundColor: "#86DBD4",
                            borderColor: "#86DBD4",
                            width: "300px",
                            height: "50px",
                            fontSize: "25px",
                            padding: 0,
                            marginRight: 80,
                            marginBottom: 5,

                        }}
                    >Back</Button>,

                    <Button type="primary" shape="round"
                        style={{

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
                        }}
                    >Next</Button>
                </Col>
            </Row>

        </>
    )
}

export default TotalTableBill
