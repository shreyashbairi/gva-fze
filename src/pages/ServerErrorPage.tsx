import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Heading } from "../components/ui/Heading";
import { Text } from "../components/ui/Text";

export default function ServerErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-6 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-danger-500/10 mb-8">
        <AlertTriangle className="h-10 w-10 text-danger-500" />
      </div>
      
      <Heading level={1} className="text-4xl">Something went wrong</Heading>
      <Text className="mt-4 text-lg text-gray-600 max-w-md mx-auto">
        We encountered an unexpected error on our end. Please try refreshing the page or contact support if the problem persists.
      </Text>

      <div className="mt-10">
        <Button onClick={() => window.location.reload()} variant="outline" className="gap-2">
          <RefreshCw className="h-4 w-4" />
          Refresh Page
        </Button>
      </div>
    </div>
  );
}