"use client";

import { useState } from "react";
import { updateUser } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function UpdateUserModal({ user, onClose }) {
  const [name, setName] = useState(user?.name || "");
  const [image, setImage] = useState(user?.image || "");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateUser({ name, image: image || undefined });
      toast.success("Profile updated!");
      onClose();
    } catch (err) {
      toast.error(err.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <dialog className="modal modal-open" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h3 className="font-bold text-lg mb-4">Update Profile</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="form-control w-full">
            <span className="label-text font-medium">Name</span>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="input input-bordered w-full mt-1" required />
          </label>
          <label className="form-control w-full">
            <span className="label-text font-medium">Photo URL</span>
            <input type="url" value={image} onChange={(e) => setImage(e.target.value)} className="input input-bordered w-full mt-1" />
          </label>
          <div className="modal-action">
            <button type="button" className="btn" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? <span className="loading loading-spinner loading-sm" /> : "Save"}
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
