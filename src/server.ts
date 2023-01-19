import { config } from "dotenv";
import App from "./index";

config();

const PORT = process.env.PORT || 3333;

App.listen(PORT, () => {
	console.log(`Servidor iniciado na porta ${PORT}`);
});
