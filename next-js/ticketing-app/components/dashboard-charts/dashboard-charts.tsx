'use client';
import { Ticket } from '@prisma/client';
import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

type ChartInfo = {
  name: Ticket['status'];
  total: number;
};

interface DashboardChartsProps {
  data: ChartInfo[];
}

const DashboardCharts = ({ data }: DashboardChartsProps) => {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Ticket Counts</CardTitle>
      </CardHeader>

      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Bar dataKey="total" fill="#60A5FA" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default DashboardCharts;
