import React, { Suspense } from 'react';
import AdminDashBoard from './AdminDashboard';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { getSession } from '@/libs/getSession';

const AdminPage = async () => {

  // const session = await getSession();
  // const user = session?.user;
  // if (!user) return redirect("/login");

  return (
    <div>
      <Suspense fallback="Loading...">
        <AdminDashBoard />
      </Suspense>
    </div>
  );
};

export default AdminPage;
