import { ThemeProvider } from "@/components/theme-provider";
import { Directory } from "./pages/Directory";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Directory />
    </ThemeProvider>
  );
}

export default App;
