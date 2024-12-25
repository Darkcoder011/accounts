import React from 'react';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Sample data for charts
  const cashFlowData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Income',
        data: [3000, 3500, 4000, 3800, 4200, 4500],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: 'Expenses',
        data: [2500, 2800, 3000, 2900, 3100, 3300],
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
      },
    ],
  };

  const expenseData = {
    labels: ['Rent', 'Utilities', 'Salaries', 'Marketing', 'Equipment', 'Other'],
    datasets: [
      {
        label: 'Expenses by Category',
        data: [2000, 500, 3000, 1000, 800, 700],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="container mx-auto px-6">
        {/* Dashboard Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold">Financial Dashboard</h1>
          <p className="text-gray-600">Overview of your business finances</p>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow p-6"
            >
              <div className="text-gray-500 text-sm mb-2">{stat.title}</div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className={`text-sm ${stat.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change >= 0 ? '↑' : '↓'} {Math.abs(stat.change)}% from last month
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <h2 className="text-xl font-semibold mb-4">Cash Flow</h2>
            <Line data={cashFlowData} options={{ responsive: true }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <h2 className="text-xl font-semibold mb-4">Expenses by Category</h2>
            <Bar data={expenseData} options={{ responsive: true }} />
          </motion.div>
        </div>

        {/* Recent Transactions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow"
        >
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentTransactions.map((transaction, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {transaction.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {transaction.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {transaction.category}
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm ${
                        transaction.amount >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        ${Math.abs(transaction.amount).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const quickStats = [
  {
    title: 'Total Revenue',
    value: '$24,500',
    change: 12.5,
  },
  {
    title: 'Total Expenses',
    value: '$18,300',
    change: -8.4,
  },
  {
    title: 'Net Profit',
    value: '$6,200',
    change: 15.3,
  },
  {
    title: 'Outstanding Invoices',
    value: '$3,500',
    change: -4.2,
  },
];

const recentTransactions = [
  {
    date: '2024-01-25',
    description: 'Client Payment - ABC Corp',
    category: 'Income',
    amount: 1500.00,
  },
  {
    date: '2024-01-24',
    description: 'Office Supplies',
    category: 'Expenses',
    amount: -245.50,
  },
  {
    date: '2024-01-23',
    description: 'Monthly Rent',
    category: 'Expenses',
    amount: -2000.00,
  },
  {
    date: '2024-01-22',
    description: 'Client Payment - XYZ Ltd',
    category: 'Income',
    amount: 3000.00,
  },
];

export default Dashboard;
