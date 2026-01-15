import { GoogleSignIn } from "@/components/GoogleSignIn";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full mx-4">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Welcome</h1>
        <p className="text-gray-600 mb-8">Sign in to continue</p>
        <GoogleSignIn />
      </div>
    </main>
  );
}