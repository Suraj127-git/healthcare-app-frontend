import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { makeDonation } from '../services/api';

function DonationModal({ isOpen, onClose }) {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await makeDonation(name, parseFloat(amount));
      console.log(response);
      // Handle successful donation (e.g., show success message, update donation list)
      onClose();
    } catch (error) {
      console.error('Donation failed:', error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Make a Donation</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="number"
            placeholder="Donation Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            min="0"
            step="0.01"
          />
          <Button type="submit" className="w-full">Donate</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default DonationModal;

