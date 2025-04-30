interface ErrorBannerProps {
    message: string;
  }
  
  export default function ErrorBanner({ message }: ErrorBannerProps) {
    // Why display error banner: Clear user feedback for storage failures
    return (
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded" role="alert">
        <p>{message}</p>
      </div>
    );
  }