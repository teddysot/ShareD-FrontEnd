import React, { useState } from 'react'
import { Button, Col, Input, Row, Avatar, Table } from "antd";
import { connect } from 'react-redux'
import { addTable } from '../../../store/actions';
import { Link } from 'react-router-dom';

function TableList({ socket, tableList, onAddTable }) {
    const createTable = () => {
        console.log('click')
        // ฟั่งชั่นที่รอการเรียกจากอีกฝั่ง
        socket.on("createTable", (res) => {
            const { tableCode } = res

            const newTable = {
                code: tableCode,
                users: []
            }

            // สร้าง table list ใหม่ขึ้นมา
            const newTableList = [...tableList]

            // เพิ่ม โต๊ะใหม่เข้าไปใน table list
            newTableList.push(newTable)
            // ส่งรายชื่อโต๊ะใหม่ไปให้ Redux
            onAddTable(newTableList)
        })
        // เรียกฟังชั่น createTable ฝั่ง BackEnd
        socket.emit('createTable')

    }

    return (
        <>
            <Row justify="end">
                <Col style={{ float: "right" }}>
                    <Link to='/create-list-table'>
                        <Button type="primary" shape="round" onClick={createTable}
                            style={{
                                backgroundColor: "#86DBD4",
                                borderColor: "#86DBD4",
                                width: "250px",
                                height: "40px",
                                fontSize: "25px",
                                padding: 0,
                                marginTop: 40,
                                marginRight: 40

                            }}>
                            Assing Table</Button>
                    </Link>
                </Col>
            </Row>

            <Row>
                <Col span={24} style={{ margin: '50px 50px' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <div style={{ width: '100px', height: '100px', backgroundColor: 'salmon', marginRight: '20px', marginTop: '20px', color: 'gray' }}><h3>Table</h3></div>
                        <div style={{ width: '100px', height: '100px', backgroundColor: 'salmon', marginRight: '20px', marginTop: '20px', color: 'gray' }}><h3>Table</h3></div>
                    </div>
                </Col>
            </Row>

        </>
    )
}

const mapStateToProps = state => {
    return {
        socket: state.socket.socket,
        tableList: state.tableList.tableList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddTable: (value) => dispatch(addTable(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableList);
