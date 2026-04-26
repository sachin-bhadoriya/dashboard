import { useEffect, useState } from "react"
import "./styles/table.scss"

const Table = () => {
    const [searchTableData, setSearchTableData] = useState("")
    const [filteredList, setFilteredList] = useState([])

    const tableHead = ["Sl No.", "Name", "Contact No.", "Role", "Status", "Username"]

    const tableKeys = ["name", "contact", "role", "status", "username"]

    const tableData = [
        {
            name: "Sachin Bhadoriya",
            email: "bhadoriysachin33@gmail.com",
            contact: "9856214252",
            role: "user",
            status: "pending",
            username: "xpiidy"
        },
        {
            name: "Singh Bhadoriya",
            email: "bhadoriysachin33@gmail.com",
            contact: "9856214252",
            role: "user",
            status: "pending",
            username: "xpiidy"
        },
        {
            name: "Akash Bhadoriya",
            email: "bhadoriysachin33@gmail.com",
            contact: "9856214252",
            role: "user",
            status: "pending",
            username: "xpiidy"
        },
        {
            name: "Aman Bhadoriya",
            email: "bhadoriysachin33@gmail.com",
            contact: "9856214252",
            role: "user",
            status: "pending",
            username: "xpiidy"
        },
        {
            name: "Rohan Bhadoriya",
            email: "bhadoriysachin33@gmail.com",
            contact: "9856214252",
            role: "user",
            status: "pending",
            username: "xpiidy"
        },
        {
            name: "Vivek Bhadoriya",
            email: "bhadoriysachin33@gmail.com",
            contact: "9856214252",
            role: "user",
            status: "pending",
            username: "xpiidy"
        },
    ]


    const filteredData = () => {
        const result = tableData.filter((item) => (
            item.name.toLowerCase().includes(searchTableData.toLowerCase()) ||
            item.contact.toLowerCase().includes(searchTableData.toLowerCase()) ||
            item.role.toLowerCase().includes(searchTableData.toLowerCase()) ||
            item.status.toLowerCase().includes(searchTableData.toLowerCase()) ||
            item.username.toLowerCase().includes(searchTableData.toLowerCase())
        ))

        setFilteredList(result)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            filteredData(tableData)
        }, 500)

        return () => clearTimeout(timer)
    }, [searchTableData])

    return (
        <div className="table-main-container">
            <div className="search-container">
                <input type="text" placeholder="Search Anything..." value={searchTableData} onChange={(e) => setSearchTableData(e.target.value)} />
            </div>
            <table>
                <thead>
                    <tr>
                        {tableHead.map((item, index) => (
                            <th key={index}>{item}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {filteredList.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            <td>{rowIndex + 1}</td>

                            {tableKeys.map((key, colIndex) => (
                                <td key={colIndex}>{row[key]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table