export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-green-50">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-green-200 border-t-green-600" />

        {/* Loading text */}
        <p className="text-lg font-medium text-green-800">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
}