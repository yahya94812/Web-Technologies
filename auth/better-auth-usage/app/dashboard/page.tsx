import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { SignOut } from "@/components/SignOut";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/");
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              {session.user.image && (
                <img
                  src={session.user.image}
                  alt="Profile"
                  className="w-20 h-20 rounded-full border-4 border-blue-100"
                />
              )}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  {session.user.name}
                </h2>
                <p className="text-gray-600">{session.user.email}</p>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                User Information
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between py-2 border-b">
                  <span className="font-medium text-gray-600">Name:</span>
                  <span className="text-gray-800">{session.user.name}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-medium text-gray-600">Email:</span>
                  <span className="text-gray-800">{session.user.email}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium text-gray-600">User ID:</span>
                  <span className="text-gray-800 font-mono text-sm">
                    {session.user.id}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <SignOut />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}