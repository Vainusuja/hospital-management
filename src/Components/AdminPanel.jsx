import React from "react";


const AdminPanel = () => {
  // Sample user data
  const [users, setUsers] = useState([
    { id: 1, name: "Dr. John Doe", role: "Doctor", status: "Active" },
    { id: 2, name: "Nurse Emma Watson", role: "Nurse", status: "Active" },
    { id: 3, name: "Admin Smith", role: "Admin", status: "Inactive" },
  ]);

  const [newUser , setNewUser ] = useState({ name: "", role: "", status: "Active" });
  const [error, setError] = useState(""); // State for error messages

  // Handle input change
  const handleChange = (e) => {
    setNewUser ({ ...newUser , [e.target.name]: e.target.value });
  };

  // Add a new user
  const addUser  = () => {
    if (newUser .name && newUser .role) {
      setUsers([...users, { id: users.length + 1, ...newUser  }]);
      setNewUser ({ name: "", role: "", status: "Active" });
      setError(""); // Clear error message
    } else {
      setError("Please fill in all fields."); // Set error message
    }
  };

  // Toggle user status
  const toggleStatus = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, status: user.status === "Active" ? "Inactive" : "Active" } : user
      )
    );
  };

  return (
    <div className="admin-panel-container">
      <h1 className="admin-title">Admin Panel</h1>
      

      {/* Error Message */}
      {error && <p className="error-message">{error}</p>}

      {/* User Management Table */}
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Toggle Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td className={user.status === "Active" ? "status-active" : "status-inactive"}>
                {user.status}
              </td>
              <td>
                <button className="toggle-btn" onClick={() => toggleStatus(user.id)}>
                  Toggle
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add New User Form */}
      <div className="add-user-form">
        <h2>Add New User</h2>
        <input
          type="text"
          name="name"
          placeholder="User  Name"
          value={newUser .name}
          onChange={handleChange}
        />
        <select name="role" value={newUser .role} onChange={handleChange}>
          <option value="">Select Role</option>
          <option value="Doctor">Doctor</option>
          <option value="Nurse">Nurse</option>
          <option value="Admin">Admin</option>
        </select>
        <button onClick={addUser }>Add User</button>
      </div>
    </div>
  );
};

export default AdminPanel;