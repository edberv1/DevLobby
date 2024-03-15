import React, { useState, useEffect } from "react";
import {
  FaSortAmountUp,
  FaSortAmountDown,
  FaEdit,
  FaSearch,
} from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import "./UserTable.scss";
import ModalDelete from "../ModalDelete/index";
import Pagination from "../../atoms/Pagination";

const UserTable = () => {
  const itemsPerPage = 6;
  const [users, setUsers] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortDirection, setSortDirection] = useState("desc");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/user");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const sortedData = data.slice().sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB - dateA;
      });
      setUsers(sortedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async () => {
    console.log('Deleting user with ID:', selectedUserId);
    try {
      await fetch(`http://localhost:8080/api/user/${selectedUserId}`, {
        method: "DELETE",
      });
      fetchData();
      setShowDeleteModal(false);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleSort = () => {
    const sortedData = [...users].sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
  
      if (sortDirection === "desc") {
        return dateB - dateA;
      } else {
        return dateA - dateB;
      }
    });
    setUsers(sortedData.reverse());
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
  };

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString(); // Adjust the formatting as needed
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
              <th>Name</th>
              <th>Email Address</th>
              <th>Date Created</th>
              <th>Date Updated</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>   
                <td>{formatDate(user.createdAt)}</td>
                <td>{formatDate(user.updatedAt)}</td>
                <td>{user.isAdmin ? "Admin" : "Regular"}</td>
                <td>
                  <button className="editIcon">
                    <FaEdit />
                  </button>
                  <button
                    className="deleteIcon"
                    onClick={() => {
                      setSelectedUserId(user._id);
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

        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredUsers.length / itemsPerPage)}
          onPageChange={paginate}
        />

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
