// File: src/components/ProfileSettings.jsx
function ProfileSettings() {
    return (
      <div className="profile-settings">
        <h2>Profile Settings</h2>
        <form>
          <div>
            <label>Email Notifications:</label>
            <input type="checkbox" defaultChecked />
          </div>
          <div>
            <label>Dark Mode:</label>
            <input type="checkbox" />
          </div>
          <div>
            <label>Language:</label>
            <select defaultValue="en">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>
          <button type="submit">Save Settings</button>
        </form>
      </div>
    );
  }
  
  export default ProfileSettings;