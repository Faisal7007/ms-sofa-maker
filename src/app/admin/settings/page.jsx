// /app/admin/settings/page.jsx
"use client"
import { useRouter } from 'next/navigation';

const Settings = () => {
  const router = useRouter();  // Correct usage here inside a page component

  const handleNavigate = () => {
    router.push('/admin');  // Example of programmatic navigation
  };

  return (
    <div className=' media-max-450px:pl-8'>
      <h1>Settings Page</h1>
      <button onClick={handleNavigate}>Go to Admin Dashboard</button>
    </div>
  );
};

export default Settings;
