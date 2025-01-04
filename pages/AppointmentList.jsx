import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Footer from '../components/Footer';
import { getAppointments } from '../services/api';

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const data = await getAppointments();
        setAppointments(data);
      } catch (error) {
        console.error('Failed to fetch appointments:', error);
      }
    };
    fetchAppointments();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Your Appointments</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appointments.map((appointment) => (
            <Card key={appointment.id}>
              <CardHeader>
                <CardTitle>Appointment with Dr. {appointment.doctorName}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Date: {appointment.date}</p>
                <p>Time: {appointment.time}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AppointmentList;

