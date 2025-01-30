import React from "react";


const Account = () => {
  // Sample user account data
  const [user, setUser ] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    role: "Admin",
    password: "********",
  });

  const [editMode, setEditMode] = useState(false);
  const [updatedUser , setUpdatedUser ] = useState(user);

  // Handle input change for form
  const handleChange = (e) => {
    setUpdatedUser ({ ...updatedUser , [e.target.name]: e.target.value });
  };

  // Toggle edit mode
  const toggleEdit = () => {
    setEditMode(!editMode);
  };

  // Save updated details
  const saveDetails = () => {
    setUser (updatedUser );
    setEditMode(false);
    alert("Account details updated successfully!");
  };

  return (
    <div className="account-container">
      <h1>Account Settings</h1>
      <div className="account-details">
        <label>Name:</label>
        {editMode ? (
          <input type="text" name="name" value={updatedUser .name} onChange={handleChange} />
        ) : (
          <p>{user.name}</p>
        )}

        <label>Email:</label>
        {editMode ? (
          <input type="email" name="email" value={updatedUser .email} onChange={handleChange} />
        ) : (
          <p>{user.email}</p>
        )}

        <label>Role:</label>
        <p>{user.role}</p>

        <label>Password:</label>
        {editMode ? (
          <input type="password" name="password" value={updatedUser .password} onChange={handleChange} />
        ) : (
          <p>{user.password}</p>
        )}
      </div>

      {/* Action Buttons */}
      {editMode ? (
        <div>
          <button className="save-btn" onClick={saveDetails}>Save</button>
          <button className="cancel-btn" onClick={toggleEdit}>Cancel</button>
        </div>
      ) : (
        <button className="edit-btn" onClick={toggleEdit}>Edit Account</button>
      )}
    </div>
  );
};

export default Account;