import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import services from "./data/services.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (_request, response) => {
  response.render("index", {
    services,
    pageTitle: "CONEXA — Soluciones digitales exprés",
  });
});

app.get("/servicios/:slug", (request, response) => {
  const service = services.find((item) => item.slug === request.params.slug);

  if (!service) {
    return response.status(404).render("not-found", {
      pageTitle: "Servicio no encontrado — CONEXA",
    });
  }

  return response.render("service", {
    service,
    pageTitle: `${service.title} — CONEXA`,
  });
});

app.get("/politica-privacidad", (_request, response) => {
  response.render("privacidad", {
    pageTitle: "Política de Privacidad — CONEXA",
  });
});

app.get("/terminos-condiciones", (_request, response) => {
  response.render("terminos", {
    pageTitle: "Términos y Condiciones de Contratación — CONEXA",
  });
});

app.get("/politica-cookies", (_request, response) => {
  response.render("cookies", {
    pageTitle: "Política de Cookies — CONEXA",
  });
});

app.listen(process.env.PORT || 3000, "0.0.0.0", () => {
  console.log(`CONEXA running on port ${process.env.PORT || 3000}`);
});