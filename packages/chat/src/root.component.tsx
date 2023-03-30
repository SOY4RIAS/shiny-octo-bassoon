import { Container } from "./components/Container";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container />
    </QueryClientProvider>
  );
}
