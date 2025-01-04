import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/hooks/use-toast"
import { login } from '../services/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      console.log(response);
      if (response.status) {
        const { token, refresh_token, user_id, email } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('refresh_token', refresh_token);
        localStorage.setItem('user_id', JSON.stringify(user_id));
        localStorage.setItem('email', email);

        toast({
          description: "Login successful!",
        });

        redirect('/home');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" className="w-full">Login</Button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/forgot-password" className="text-blue-600 hover:underline">Forgot Password?</Link>
        </div>
        <div className="mt-4 text-center">
          Don't have an account? <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

