import React, { useState } from "react";
import UserAvatar from "./Avatar";
import { useAuth } from "../../hooks/auth";
import { useUpdateAvatar } from "../../hooks/users";

export default function EditProfile({ isOpen, onClose }) {
     const { user, isLoading: authLoading } = useAuth();
    const { 
        setFile, 
        updateAvatar, 
        isLoading: fileLoading,
        fileURL
        } = useUpdateAvatar(user?.id);

    const [selectedFile, setSelectedFile] = useState(null);

    function handleChange(e) {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    }

 if (authLoading) return "Loading...";

    return (<>
        {isOpen && <div className="edit-profile-overlay" onClick={onClose}></div>}
        <dialog open={isOpen} className="edit-profile-dialog">
            <div className="edit-profile-content">
                <h2>Edit profile</h2>
                <div className="edit-profile-body">
                    <div className="avatar-section">
                        <UserAvatar user={user} overrideAvatar={fileURL} />
                    </div>
                    <div className="form-section">
                        <label htmlFor="picture">Change avatar</label>
                        <input
                            type="file"
                            accept="image/*"
                            id="picture"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="button-container">
                    <button
                        className="close-button"
                        onClick={onClose}
                    >
                        Close
                    </button>
                    <button
                        className="save-button"
                        onClick={() => {
                            setFile(selectedFile);
                            updateAvatar();
                        }}
                        disabled={fileLoading}
                    >
                        {fileLoading ? "Uploading..." : "Save"}
                    </button>
                </div>
            </div>
        </dialog>
        </>
    );
}