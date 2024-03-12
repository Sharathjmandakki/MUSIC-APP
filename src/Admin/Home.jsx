import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Home() {
  const [contact, setContact] = useState([])
  const [count, SetCount] = useState([])
  useEffect(() => {
    const Count = async () => {
      const res = await axios.get("http://localhost:8080/counts")
      SetCount(res.data)
    }
    Count()
    const Contact = async () => {
      const res = await axios.get("http://localhost:8080/viewContact")
      setContact(res.data)
    }
    Contact()
  }, [])


  const deleteData = async (del) => {
    try {
      const res = await axios.post("http://localhost:8080/deleteContact", {
        cid: del.cid
      })
      alert(res.data)
    } catch (e) {
      console.log(e);
    }
    // console.log(message.cid);
  }
  return (
    <div className='m-5 p-10'>
      <div class="relative overflow-x-auto m-2 rounded-xl mb-5">
        <table class="w-full text-md text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Type Of Users
              </th>
              <th scope="col" class="px-6 py-3">
                Paid
              </th>
              <th scope="col" class="px-6 py-3">
                Non Paid
              </th>
              <th scope="col" class="px-6 py-3">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Customers
              </th>
              <td class="px-6 py-4">
                {count.userPaid}
              </td>
              <td class="px-6 py-4">
                {count.usernotPaid}
              </td>
              <td class="px-6 py-4">
                {count.user}
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Artests
              </th>
              <td class="px-6 py-4">
                {count.artestPaid}
              </td>
              <td class="px-6 py-4">
                {count.artestnotpaid}
              </td>
              <td class="px-6 py-4">
                {count.artest}
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Admins
              </th>
              <td class="px-6 py-4">
                -
              </td>
              <td class="px-6 py-4">
                -
              </td>
              <td class="px-6 py-4">
                {count.admin}
              </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">

              </th>
              <td class="px-6 py-4">

              </td>
              <td class="px-6 py-4">

              </td>
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">

                {count.total}
              </th>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg m-2">
        <table class="w-full text-md text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Message no
              </th>
              <th scope="col" class="px-6 py-3">
                User name
              </th>
              <th scope="col" class="px-6 py-3">
                email
              </th>
              <th scope="col" colSpan={2} class="px-6 py-3">
                Message
              </th>
              <th scope="col" class="px-6 py-3">
                remove
              </th>
            </tr>
          </thead>
          <tbody>

            {
              contact.map((by) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td class="px-6 py-4">
                    {by.cid}
                  </td>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {by.username}
                  </th>
                  <td class="px-6 py-4">
                    {by.email}
                  </td>
                  <td class="px-6 py-4 text-justify" colSpan={2}>
                    {by.message}
                  </td>
                  <td class="px-6 py-4">
                    <button class="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={() => deleteData(by)}> Remove</button>
                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    </div>
  )
}
