import { Box } from "@chakra-ui/react";
import AllRoutes from "./routes/AllRoutes.routes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box>
      <Navbar />
      <AllRoutes />
    </Box>
  );
}

export default App;
