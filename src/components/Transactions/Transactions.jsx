import React, { useState } from "react";
import "./Transaction.css";
// import PayoutTable from '../components/PayoutTable/PayoutTable'
import { useTable } from "react-table";
import { BsArrowDown } from "react-icons/bs";
import Donordetails from "./Donordetails";
import useLocalStorage from "use-local-storage";
import { BiSearch } from "react-icons/bi";

const Transaction = () => {
  const [modal, setModal] = useLocalStorage(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const persons = [
    {
      name: "Alice",
      amount: 25,
      date: "22/03/2024",
      campaign: "Save the tree",
      message: "I’m so proud to be a changemaker. #Love",
      email: "jacksam@gmail.com",
      contribution: "1,000",
      contact_since: "22/03/2024",
    },
    {
      name: "Bob",
      amount: 30,
      date: "22/03/2024",
      campaign: "Save the tree",
      message: "I’m so proud to be a changemaker. #Love",
      email: "jacksam@gmail.com",
      contribution: "1,000",
      contact_since: "22/03/2024",
    },
    {
      name: "Charlie",
      amount: 22,
      date: "22/03/2024",
      campaign: "Save the tree",
      message: "I’m so proud to be a changemaker. #Love",
      email: "jacksam@gmail.com",
      contribution: "1,000",
      contact_since: "22/03/2024",
    },
  ];

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Campaign",
        accessor: "campaign",
      },
    ],
    []
  );

  // const [selectedPerson, setSelectedPerson] = useState(null);

  const handleRowClick = (person) => {
    setSelectedPerson(person);
    console.log(selectedPerson);
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: persons });
  return (
    <>
      <div className="transactionSearchSide">
        <div className="SearchSideTransaction">
          <div className="searchBox">
            <BiSearch color="gray" />
            <input
              type="text"
              placeholder="Search"
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="tableWrapperTransaction">
        <div className="table-containerTransaction">
          <table {...getTableProps()} className="campaign-table">
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr
                  {...headerGroup.getHeaderGroupProps()}
                  className="table-header"
                >
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps()}
                      className="table-header-cell"
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    onClick={() => handleRowClick(row.original)[setModal(true)]}
                    className="table-row"
                  >
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()} className="table-cellNow">
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="tableFooterPagination">
          <div>hello</div>
          <div>hello</div>
          <div>
            10 per pages <BsArrowDown />
          </div>
        </div>
        {modal ? (
          <Donordetails person={selectedPerson} setModal={setModal} />
        ) : null}
        {/* {selectedPerson && <Donordetails setModal={setModal} person={selectedPerson} />}  */}
      </div>
    </>
  );
};

export default Transaction;
