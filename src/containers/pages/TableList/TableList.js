import React, { useState } from 'react'
import { Button, Col, Input, Row, Modal,notification} from "antd";
import { connect } from 'react-redux'
import { addTable } from '../../../store/actions';
import { Link } from 'react-router-dom';

function TableList({ socket, tableList, onAddTable }) {
    const [showModal, setShowModal] = useState(false)

    const [tableNumber, setTableNumber] = useState(0)

    const onInputChange = (e) =>{
        setTableNumber(tableNumber => e.target.value)
    }

    const toggleModal = () => {
        setShowModal(showModal => !showModal)
    }

    const createTable = () => {
        console.log('click')
        // ฟั่งชั่นที่รอการเรียกจากอีกฝั่ง
        socket.on("createTable", (res) => {
            const { tableCode ,status} = res
            if(status === 400){
                notification.error({
                    description: "Failed to Create Table"
                })
                return
            }
            else{
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
            }
            
        })
        // เรียกฟังชั่น createTable ฝั่ง BackEnd
        socket.emit('createTable', {tableNumber})
    }

    return (
        <>
            <Modal
                title="Create Table"
                visible={showModal}
                onCancel={toggleModal}
                footer={[
                    <Link to='/create-list-table' key={1}>
                        <Button type="primary" shape="round" onClick={createTable}
                            style={{
                                backgroundColor: "#86DBD4",
                                borderColor: "#86DBD4",
                                width: "250px",
                                height: "40px",
                                fontSize: "25px",
                                padding: 0,
                                marginBottom:5
                            }}
                        >Create</Button>
                    </Link>,
                    <Button type="primary" shape="round" onClick={toggleModal} key={2}
                        style={{
                            backgroundColor: "#86DBD4",
                            borderColor: "#86DBD4",
                            width: "250px",
                            height: "40px",
                            fontSize: "25px",
                            padding: 0
                        }}
                    >Cancel</Button>
                ]}
            >
                <div>
                    <h1 style={{ color: "#746953" }}>Enter Your Table Number</h1>
                </div>

                <Input placeholder="" onChange={onInputChange}
                    style={{
                        fontSize: "20px",
                        fontStyle: "italic",
                        textAlign: "center"
                    }} />
            </Modal>
            <Row justify="end">
                <Col style={{ float: "right" }}>
                    <Button type="primary" shape="round" onClick={toggleModal}
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
                        Assign Table</Button>
                </Col>
            </Row>

            <Row>
                <Col span={24} style={{ margin: '50px 50px' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {tableList.map((table, idx) => (
                            <div key={idx} style={{ width: '100px', height: '100px', backgroundColor: 'salmon', marginRight: '20px', marginTop: '20px', color: 'gray' }}><h3>Table {idx}</h3></div>
                        ))}
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
