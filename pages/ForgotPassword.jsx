import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { forgotPassword } from '../services/api';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await forgotPassword(email);
      console.log(response);
      // Handle successful request (e.g., show success message)
    } catch (error) {
      console.error('Forgot password request failed:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" className="w-full">Reset Password</Button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/login" className="text-blue-600 hover:underline">Back to Login</Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;

