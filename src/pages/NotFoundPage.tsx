import { Link } from "react-router-dom";
import { FileQuestion, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Heading } from "../components/ui/Heading";
import { Text } from "../components/ui/Text";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-6 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 mb-8">
        <FileQuestion className="h-10 w-10 text-gray-400" />
      </div>
      
      <Heading level={1} className="text-6xl sm:text-7xl tracking-tight">404</Heading>
      <Heading level={3} className="mt-4">Page not found</Heading>
      
      <Text className="mt-2 text-gray-500 max-w-sm mx-auto">
        Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
      </Text>

      <div className="mt-10">
        <Link to="/">
          <Button className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}