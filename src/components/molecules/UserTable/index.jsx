import React, { useState } from "react";
import {
  FaSortAmountUp,
  FaSortAmountDown,
  FaEdit,
  FaSearch,
} from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import "./UserTable.scss";
import ModalDelete from "../ModalDelete/index";
import data from "./data";

const UserTable = () => {
  const itemsPerPage = 6;
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [sortDirection, setSortDirection] = useState("asc");

  const handleDelete = () => {
    // DELETE LOGIC
    console.log("Deleting user with ID:", selectedUserId);
    setShowDeleteModal(false);
  };

  const handleSort = () => {
    const sortedData = [...filteredData].sort((a, b) => {
      if (sortDirection === "asc") {
        return b.id - a.id; 
      } else {
        return a.id - b.id; 
      }
    });

    setFilteredData(sortedData);
    setSortDirection(sortDirection === "asc" ? "desc" : "asc"); // Toggle sort direction
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = data.filter((item) =>
      item.userDetails.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <main className="main-table">
      <div className="table__body">
        <div className="table__header">
          <h3>All Users</h3>
          <div className="controls">
            <div className="search-container">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={handleSearch}
                className="search-input"
              />
            </div>
            <button className="sort" onClick={handleSort}>
              {sortDirection === "asc" ? (
                <FaSortAmountUp />
              ) : (
                <FaSortAmountDown />
              )}{" "}
              Sort
            </button>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>User Details</th>
              <th>Email Address</th>
              <th>Password</th>
              <th>Date Created</th>
              <th>Last Login</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <img src="images/Image.jpg" alt="" />
                  {item.userDetails}
                </td>
                <td>{item.emailAddress}</td>
                <td>{item.password}</td>
                <td>{item.dateCreated}</td>
                <td>{item.lastLogin}</td>
                <td>
                  <p className={`status ${item.status}`}>{item.status}</p>
                </td>
                <td>
                  <button className="editIcon">
                    <FaEdit />
                  </button>
                  <button
                    className="deleteIcon"
                    onClick={() => {
                      setSelectedUserId(item.id);
                      setShowDeleteModal(true);
                    }}
                  >
                    <MdDeleteForever />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <button
            onClick={() =>
              setCurrentPage(currentPage === 1 ? 1 : currentPage - 1)
            }
            disabled={currentPage === 1}
          >
            {" "}
            Previous{" "}
          </button>{" "}
          {currentPage > 1 && (
            <button key={1} onClick={() => paginate(1)}>
              {" "}
              {1}{" "}
            </button>
          )}{" "}
          {currentPage > 3 && <span>...</span>}{" "}
          {Array.from(
            { length: Math.min(5, Math.ceil(data.length / itemsPerPage)) },
            (_, i) => (
              <button
                key={currentPage + i}
                onClick={() => paginate(currentPage + i)}
                className={currentPage === currentPage + i ? "active" : ""}
              >
                {" "}
                {currentPage + i}{" "}
              </button>
            )
          )}{" "}
          {currentPage + 5 < Math.ceil(data.length / itemsPerPage) && (
            <span>...</span>
          )}{" "}
          {currentPage + 5 <= Math.ceil(data.length / itemsPerPage) && (
            <button
              key={Math.ceil(data.length / itemsPerPage)}
              onClick={() => paginate(Math.ceil(data.length / itemsPerPage))}
            >
              {" "}
              {Math.ceil(data.length / itemsPerPage)}{" "}
            </button>
          )}{" "}
          <button
            onClick={() =>
              setCurrentPage(
                currentPage === Math.ceil(data.length / itemsPerPage)
                  ? currentPage
                  : currentPage + 1
              )
            }
            disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
          >
            {" "}
            Next{" "}
          </button>
        </div>
      </div>

      <ModalDelete
        modalOpen={showDeleteModal}
        setModalOpen={setShowDeleteModal}
        confirmHandler={handleDelete}
        selectedUserId={selectedUserId}
      >
        Are you sure you want to delete the user with ID:{selectedUserId}?
      </ModalDelete>
    </main>
  );
};

export default UserTable;
