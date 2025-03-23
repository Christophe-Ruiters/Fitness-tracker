import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function FitnessTracker() {
  const [logs, setLogs] = useState([]);
  const [exercise, setExercise] = useState("");
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");

  const addLog = () => {
    if (!exercise || !weight || !reps) return;
    setLogs([...logs, { exercise, weight: Number(weight), reps: Number(reps), date: new Date().toLocaleDateString() }]);
    setExercise("");
    setWeight("");
    setReps("");
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Fitness Progress Tracker</h1>
      <Card>
        <CardContent className="p-4 space-y-2">
          <Input placeholder="Exercise" value={exercise} onChange={(e) => setExercise(e.target.value)} />
          <Input placeholder="Weight (kg)" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
          <Input placeholder="Reps" type="number" value={reps} onChange={(e) => setReps(e.target.value)} />
          <Button onClick={addLog}>Add Log</Button>
        </CardContent>
      </Card>
      
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Progress Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={logs}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="weight" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}