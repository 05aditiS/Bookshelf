import React, { useEffect, useState } from "react";
import { CheckCircleIcon, ClockIcon, ExclamationCircleIcon } from '@heroicons/react/20/solid';

function statusBadge(status) {
  switch (status) {
    case 'active':
      return (
        <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium bg-[#fdf6e3] text-[#5e4636] ring-1 ring-inset ring-[#a47551]">
          <ClockIcon className="h-3 w-3 mr-1" />
          Active
        </span>
      );
    case 'returned':
      return (
        <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20">
          <CheckCircleIcon className="h-3 w-3 mr-1" />
          Returned
        </span>
      );
    case 'overdue':
      return (
        <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium bg-red-50 text-red-700 ring-1 ring-inset ring-red-600/20">
          <ExclamationCircleIcon className="h-3 w-3 mr-1" />
          Overdue
        </span>
      );
    default:
      return null;
  }
}

export default function Rentals() {
  const [rentedOutBooks, setRentedOutBooks] = useState([]);
  const [rentedInBooks, setRentedInBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRentals() {
      try {
        const rentedOutRes = await fetch("/api/rentals/rented-out"); // replace with your backend endpoint
        const rentedInRes = await fetch("/api/rentals/rented-in");

        if (!rentedOutRes.ok || !rentedInRes.ok) throw new Error("Failed to fetch rentals");

        const rentedOutData = await rentedOutRes.json();
        const rentedInData = await rentedInRes.json();

        setRentedOutBooks(rentedOutData);
        setRentedInBooks(rentedInData);
      } catch (error) {
        console.error("Error fetching rental data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchRentals();
  }, []);

  if (loading) return <p className="p-6">Loading rentals...</p>;

  return (
    <div className="bg-[#fdf6e3] min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#3b2f2f] mb-8">Book Rental Records</h1>

        {/* Rented Out Books Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-[#3b2f2f]">Books You've Rented Out</h2>
            <button className="bg-[#5e4636] text-white px-4 py-2 rounded-md hover:bg-[#3b2f2f] transition-colors">
              Add New Rental
            </button>
          </div>

          <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-[#a47551]">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-[#a47551]">
                <thead className="bg-[#fdf6e3]">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#5e4636] uppercase tracking-wider">Book Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#5e4636] uppercase tracking-wider">Borrower</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#5e4636] uppercase tracking-wider">Rental Period</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#5e4636] uppercase tracking-wider">Amount (₹)</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#5e4636] uppercase tracking-wider">Status</th>
                    <th className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-[#a47551]/50">
                  {rentedOutBooks.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="text-center py-4 text-[#5e4636]">No rented out books found.</td>
                    </tr>
                  ) : (
                    rentedOutBooks.map((book) => (
                      <tr key={book.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-[#3b2f2f]">{book.title}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img className="h-10 w-10 rounded-full border border-[#a47551]" src={book.borrowerImage} alt={book.borrower} />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-[#3b2f2f]">{book.borrower}</div>
                              <div className="text-sm text-[#5e4636]">{book.borrowerEmail}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-[#5e4636]">
                            <div>Rented: {new Date(book.rentDate).toLocaleDateString()}</div>
                            <div>Due: {new Date(book.dueDate).toLocaleDateString()}</div>
                            {book.returnDate && <div>Returned: {new Date(book.returnDate).toLocaleDateString()}</div>}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#5e4636]">
                          <div>Rent: ₹{book.rentAmount}</div>
                          <div>Deposit: ₹{book.securityDeposit}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{statusBadge(book.status)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-[#5e4636] hover:text-[#3b2f2f] mr-3">Edit</button>
                          <button className="text-[#a47551] hover:text-[#3b2f2f]">View</button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Rented In Books Section */}
        <div>
          <h2 className="text-2xl font-semibold text-[#3b2f2f] mb-6">Books You've Rented</h2>

          <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-[#a47551]">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-[#a47551]">
                <thead className="bg-[#fdf6e3]">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#5e4636] uppercase tracking-wider">Book Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#5e4636] uppercase tracking-wider">Lender</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#5e4636] uppercase tracking-wider">Rental Period</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#5e4636] uppercase tracking-wider">Amount (₹)</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#5e4636] uppercase tracking-wider">Status</th>
                    <th className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-[#a47551]/50">
                  {rentedInBooks.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="text-center py-4 text-[#5e4636]">No rented in books found.</td>
                    </tr>
                  ) : (
                    rentedInBooks.map((book) => (
                      <tr key={book.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-[#3b2f2f]">{book.title}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img className="h-10 w-10 rounded-full border border-[#a47551]" src={book.lenderImage} alt={book.lender} />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-[#3b2f2f]">{book.lender}</div>
                              <div className="text-sm text-[#5e4636]">{book.lenderEmail}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-[#5e4636]">
                            <div>Rented: {new Date(book.rentDate).toLocaleDateString()}</div>
                            <div>Due: {new Date(book.dueDate).toLocaleDateString()}</div>
                            {book.returnDate && <div>Returned: {new Date(book.returnDate).toLocaleDateString()}</div>}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#5e4636]">
                          <div>Rent: ₹{book.rentAmount}</div>
                          <div>Deposit: ₹{book.securityDeposit}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{statusBadge(book.status)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-[#5e4636] hover:text-[#3b2f2f] mr-3">Extend</button>
                          <button className="text-[#a47551] hover:text-[#3b2f2f]">Contact</button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
