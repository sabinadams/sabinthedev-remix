export function SkeletonLoader() {
    return <div className="rounded-md">
    <div className="animate-pulse flex">
      <div className="flex-1 space-y-6">
        <div className="h-6 bg-slate-700 rounded"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-3 bg-slate-700 rounded col-span-2"></div>
            <div className="h-3 bg-slate-700 rounded col-span-1"></div>
          </div>
          <div className="h-3 bg-slate-700 rounded"></div>
          <div className="h-2 bg-slate-800 dark:bg-gray-500 rounded w-12 opacity-75"></div>
          <div className="rounded-xl text-sm px-2 py-1 mr-2 bg-gray-500 dark:bg-gray-600 w-12">
            <div className="h-2 bg-gray-200 dark:bg-slate-800 rounded opacity-75"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
}
