import './TableList.css';
import React, { useEffect, useState } from 'react'
import { Button, Col, Input, Row, Modal, notification } from "antd";
import { connect } from 'react-redux'
import { addTable, fetchTable, selectTable, setTableCode, setTableOrders, setTableUsers, updateOrders } from '../../../store/actions';
import { useHistory } from 'react-router-dom';


function TableList(props) {

    const ButtonModalStyle =
    {
        backgroundColor: "#86DBD4",
        borderColor: "#86DBD4",
        width: "100px",
        height: "40px",
        fontSize: "25px",
        padding: "0px",
        marginRight: "10px",
        marginBottom: "5"

    }


    const ButtonModal2Style = {
        backgroundColor: "#ffffff",
        borderColor: "#86DBD4",
        color: "#86DBD4",
        width: "100px",
        height: "40px",
        fontSize: "25px",
        justifyContent: "right",
        marginRight: "70",
        marginLeft: "50",
        padding: "0px",
    }
    const tableButtonStyle = { fontSize: '26px', padding: '10px', width: '100px', height: '100px', backgroundColor: '#86DBD4', marginRight: '20px', marginTop: '20px', color: 'gray', borderRadius: '20px' }
    const assignButtonStyle = { backgroundColor: "#ffffff", borderColor: "#86DBD4", color: "#86DBD4", width: "250px", height: "40px", fontSize: "25px", padding: "0", marginTop: "40px", marginRight: "40px" }

    const { socket, tableList, onAddTable, onFetchTable, onUpdateOrders, onSetTableUsers, onSetTableOrders, onSetTableCode } = props
    const [showModal, setShowModal] = useState(false)
    const [tableNumber, setTableNumber] = useState(0)

    const history = useHistory()

    const onInputChange = (e) => {
        setTableNumber(tableNumber => e.target.value)
    }

    const toggleModal = () => {
        setShowModal(showModal => !showModal)
    }


    const createTable = () => {
        console.log('click')

        // เรียกฟังชั่น createTable ฝั่ง BackEnd
        socket.emit('createTable', { tableNumber })
    }


    const tableNum = (selectTableNumber) => {
        props.onSelectTable(selectTableNumber)
        onSetTableCode({ tableCode: tableList[selectTableNumber].code })
        onSetTableUsers({ tableCode: tableList[selectTableNumber].code, users: tableList[selectTableNumber].users })
        onSetTableOrders({ orders: tableList[selectTableNumber].orders })
        socket.emit('viewTable', { tableCode: tableList[selectTableNumber].code })
        history.push('/total-table-bill')
    }

    useEffect(() => {
        if (socket) {
            socket.on('fetchTable', (res) => {
                onFetchTable(res.tableList)
            })

            // ฟั่งชั่นที่รอการเรียกจากอีกฝั่ง
            socket.on("createTable", (res) => {
                const { tableCode, status } = res
                if (status === 400) {
                    notification.error({
                        description: "Failed to Create Table"
                    })
                    toggleModal()
                    return
                }
                else {
                    const newTable = {
                        users: [],
                        number: tableNumber,
                        code: tableCode,
                        orders: []
                    }

                    // สร้าง table list ใหม่ขึ้นมา
                    const newTableList = [...tableList]

                    // เพิ่ม โต๊ะใหม่เข้าไปใน table list
                    newTableList.push(newTable)
                    // ส่งรายชื่อโต๊ะใหม่ไปให้ Redux
                    onAddTable(newTableList)

                    onSetTableCode({ tableCode })
                    history.push('/create-list-table')
                }

            })

            socket.on('newOrder', (res) => {
                const { orders, tableCode } = res

                const newTableList = [...tableList]

                newTableList.map((table, idx) => {
                    if (table.code === tableCode) {
                        table.orders = orders
                    }

                    return table
                })

                onSetTableUsers({ tableCode })

                onUpdateOrders(newTableList)
            })
        }
        return () => {
        }
    }, [socket, onFetchTable])

    return (
        <>
            <Modal
                title=""
                visible={showModal}
                onCancel={toggleModal}
                style={{ marginBottom: 5 }}
                footer={[

                    <Button style={ButtonModalStyle} type="primary" shape="round" onClick={createTable}
                    >Create</Button>,

                    <Button style={ButtonModal2Style} type="primary" shape="round" onClick={toggleModal} key={2}
                    >Cancel</Button>

                ]}
            >
                <div>
                    <h1 style={{ color: "#86DBD4" }}>Enter Your Table Number</h1>
                </div>

                <Input className="InputModal" placeholder="" onChange={onInputChange} />
            </Modal>
            <Row justify="end">
                <Col className="ColButtonAssignTable">
                    <Button style={assignButtonStyle} type="primary" shape="round" onClick={toggleModal}
                    >
                        Assign Table</Button>
                </Col>
            </Row>

            <Row>
                <Col span={24} className="colTableNum">
                    <div className="divTableNum">
                        {tableList.map((table, idx) => (

                            <Button key={idx} onClick={() => tableNum(idx)} style={tableButtonStyle}>
                                <p style={{ color: '#ffffff' }}> TABLE <br />{table.number} </p>
                            </Button>
                        ))}
                    </div>
                </Col>
            </Row>

        </>
    )
}

const mapStateToProps = state => {
    return {
        socket: state.socketReducer.socket,
        tableList: state.tableReducer.tableList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddTable: (value) => dispatch(addTable(value)),
        onFetchTable: (value) => dispatch(fetchTable(value)),
        onSelectTable: (value) => dispatch(selectTable(value)),
        onUpdateOrders: (value) => dispatch(updateOrders(value)),
        onSetTableUsers: (value) => dispatch(setTableUsers(value)),
        onSetTableOrders: (value) => dispatch(setTableOrders(value)),
        onSetTableCode: (value) => dispatch(setTableCode(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableList);





