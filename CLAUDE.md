# Gergash — Portafolio Web Personal

Portafolio web de **Geronimo Saldaña Espinal**, Analista de Datos / Data Scientist.
Desplegado en GitHub Pages: `https://gergash.github.io/Gergash/`

## Stack

- **HTML5 + CSS3 + JavaScript vanilla** — sin framework JS
- **Bootstrap 3** — grid y componentes (`assets/css/bootstrap.min.css`)
- **jQuery 3** — navegación, carousels, animaciones (`assets/js/jquery.min.js`)
- **Apache ECharts 5** (CDN) — gráfico de dona (skills) y gráfico de líneas (tendencias)
- **EmailJS** — formulario de contacto sin backend (`script.js`, SERVICE_ID/TEMPLATE_ID hardcodeados)
- **Font Awesome 4** — iconografía (`assets/css/font-awesome.min.css`)
- **Shuffle.js** — filtro de proyectos en grid (`assets/js/jquery.shuffle.min.js`)
- **Slick.js** — carousels de reviews y clients

## Estructura del proyecto

```
Gergash/
├── index.html                  # Página principal (única SPA por secciones)
├── assets/
│   ├── css/
│   │   ├── style.css           # CSS principal del portafolio (único archivo a editar)
│   │   ├── bootstrap.min.css
│   │   └── font-awesome.min.css
│   ├── js/
│   │   ├── script.js           # JS principal: nav, scroll, ECharts, EmailJS, modales
│   │   └── [libs vendorizadas]
│   ├── img/                    # Imágenes y logos del sitio
│   └── fonts/                  # Fuentes de Font Awesome y Glyphicons
├── t-student.html              # Notebook interactivo T-Student
├── k-means.html                # Notebook interactivo K-means
├── eda.html                    # Notebook interactivo EDA
├── regresion-lineal-multiple.html
├── pca.html
├── tree-decision.html
├── sparkml.html
├── pythonsql.html
├── pyspark_final_project.html  # Proyecto final IBM Spark & Hadoop
└── CLAUDE.md                   # Este archivo
```

## Secciones del index.html

| ID / Anchor | Descripción |
|---|---|
| `#top` | Hero — nombre, cargo, stack tecnológico |
| `#intro` | Hello — 4 pilares del servicio |
| `#about` | Sobre el trabajo — 4 niveles analíticos (descriptivo → prescriptivo) |
| `#services` | Servicios — gráficos ECharts + carousel de 5 servicios |
| `#history` | Educación — timeline (2018–2026): Platzi, SENA, U. Manizales |
| `#works` | Proyectos — grid filtrable con 12 items + modales |
| `#contact` | Formulario de contacto EmailJS |

## Proyectos en el grid (#works)

| Modal ID | Proyecto | Categoría |
|---|---|---|
| portfolioItem1 | T-Student | webdesign (Estadística) |
| portfolioItem2 | K-means | webdev (ML) |
| portfolioItem3 | EDA | mobileapps (Exploración) |
| portfolioItem4 | Regresión Lineal Múltiple | webdesign (Estadística) |
| portfolioItem5 | PCA | webdev (ML) |
| portfolioItem6 | Árboles de decisión | mobileapps (ML) |
| portfolioItem7 | SQL relacional | webdev (SQL) |
| portfolioItem8 | Dashboards Power BI | webdesign (Power BI) |
| portfolioItem9 | Apache Spark ML | webdev (Big Data) |
| portfolioItem10 | Proyecto final IBM Spark | webdev (Big Data) |
| portfolioItem11 | SQL en Python (SQLAlchemy) | webdev (SQL) |
| portfolioItem12 | Workflows IA con n8n | webdev (Automatización) |

## Convenciones

- **Idioma UI**: español (coloquial colombiano) — todo el contenido visible está en español
- **Código fuente**: comentarios en español, variables y funciones en inglés/inglés-mezcla
- **CSS**: variables CSS (`--brand-petroleo`, `--ui-blanco`, `--ui-carbon`, `--font-brand`) para el tema oscuro
- **Animaciones**: atributo `data-reveal` / `data-reveal="down"` en elementos para IntersectionObserver
- **Modales de proyectos**: `data-toggle="modal" data-target="#portfolioItemN"` (Bootstrap 3)
- **Modales especiales**: SQL modal con `id="sqlModal"`, workflows n8n con clase `.open-workflow-modal` y `data-target-modal`
- **No hay build step** — editar archivos directamente, sin npm/webpack/bundler

## Restricciones importantes

- **No usar Bootstrap 4/5** — el sitio usa Bootstrap 3 (clases como `col-xs-*`, `col-sm-*`)
- **No introducir frameworks JS** (React, Vue, etc.) — el sitio es HTML/CSS/JS vanilla por diseño
- **EmailJS keys están en `script.js`** — no son variables de entorno, están hardcodeadas (PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID)
- **GitHub Pages** — el sitio se despliega desde la rama `master`, no hay CI/CD, el deploy es automático al hacer push
- **Imágenes locales** en `assets/img/` — no usar CDN para imágenes propias

## Dónde tocar qué

| Necesidad | Archivo |
|---|---|
| Cambiar contenido/texto | `index.html` |
| Cambiar estilos visuales | `assets/css/style.css` |
| Cambiar comportamiento JS, gráficos, formulario | `assets/js/script.js` |
| Agregar/editar proyecto notebook | Crear/editar `*.html` correspondiente |
| Cambiar datos del gráfico de skills (dona) | `script.js` línea ~270 (array `data` en `option`) |
| Cambiar datos del gráfico de tendencias | `script.js` línea ~294 (array `rawData`) |

## Persona y propósito del sitio

El sitio muestra a Geronimo como Analista de Datos end-to-end:
- Stack: Typeform → PostgreSQL → Python (Pandas, scikit-learn, statsmodels) → LLMs locales (Ollama) → Power BI → n8n → GPTs personalizados
- Metodología: CRISP-DM + Arquitectura Medallion
- Objetivo: generar leads de clientes (PyMEs) que necesiten empezar a usar datos, y mostrar dominio técnico a reclutadores
- Contacto directo: `gerosaldana2004@gmail.com`
- Redes: GitHub (gergash), LinkedIn, Instagram, X (@EspinalGeronimo)
