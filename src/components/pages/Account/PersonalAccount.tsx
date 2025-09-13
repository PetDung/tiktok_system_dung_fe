'use client';

import { useState } from 'react';
import { Eye, EyeOff, Loader2 } from 'lucide-react';

interface PersonalAccountProps {
  // Add props if needed
}

const PersonalAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '', // Read-only
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic
  };

  const handleLogout = async () => {
    // Add logout logic
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Information Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Thông tin cá nhân</h3>
            <div className="grid gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Tên hiển thị
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  readOnly
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                />
              </div>
            </div>
          </div>

          {/* Change Password Section */}
          <div className="space-y-4 pt-6 border-t">
            <h3 className="text-lg font-medium text-gray-900">Đổi mật khẩu</h3>
            <div className="grid gap-4">
              <div>
                <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-700">
                  Mật khẩu hiện tại
                </label>
                <div className="mt-1 relative">
                  <input
                    type={showOldPassword ? "text" : "password"}
                    id="oldPassword"
                    name="oldPassword"
                    value={formData.oldPassword}
                    onChange={(e) => setFormData({ ...formData, oldPassword: e.target.value })}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowOldPassword(!showOldPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showOldPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                  </button>
                </div>
                {errors.oldPassword && <p className="mt-1 text-sm text-red-600">{errors.oldPassword}</p>}
              </div>

              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                  Mật khẩu mới
                </label>
                <div className="mt-1 relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    id="newPassword"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showNewPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                  </button>
                </div>
                {errors.newPassword && <p className="mt-1 text-sm text-red-600">{errors.newPassword}</p>}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Xác nhận mật khẩu mới
                </label>
                <div className="mt-1 relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                  </button>
                </div>
                {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between pt-6 border-t">
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                  Đang lưu...
                </>
              ) : (
                'Lưu thay đổi'
              )}
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Đăng xuất
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalAccount;