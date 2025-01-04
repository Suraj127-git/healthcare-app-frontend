import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { bookAppointment } from '../services/api';

function AppointmentForm({ doctor, onClose }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await bookAppointment(doctor.id, date, time);
      console.log(response);
      // Handle successful booking (e.g., show success message, update appointment list)
      onClose();
    } catch (error) {
      console.error('Appointment booking failed:', error);
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book Appointment with Dr. {doctor.name}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <Input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
          <Button type="submit" className="w-full">Book Appointment</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AppointmentForm;

