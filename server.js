const express = require('express')
const app = express()
app.use(express.static("public"));

app.listen(3000, () => {
    console.log("Server started on port 3000")
})

const hustles = [
  {
    slug: "freelance-web-developer",
    title: "Freelance Web Developer",
    incomeRange: "$25–$75/hour",
    skillLevel: "High",
    timeCommitment: "Flexible, project-based",
    locationType: "Remote",
    description: "Build websites for small businesses, student organizations, and startups."
  },
  {
    slug: "campus-tutor",
    title: "Campus Tutor",
    incomeRange: "$15–$30/hour",
    skillLevel: "Medium",
    timeCommitment: "5–10 hrs/week",
    locationType: "In-person",
    description: "Tutor students in math, science, programming, or writing courses."
  },
  {
    slug: "social-media-manager",
    title: "Social Media Manager",
    incomeRange: "$300–$1000/month per client",
    skillLevel: "Medium",
    timeCommitment: "5–15 hrs/week",
    locationType: "Remote",
    description: "Manage content, engagement, and analytics for small brands."
  },
  {
    slug: "reselling",
    title: "Reselling (Flipping Items)",
    incomeRange: "$200–$1500/month",
    skillLevel: "Low–Medium",
    timeCommitment: "Flexible",
    locationType: "Hybrid",
    description: "Buy undervalued items and resell them online for profit."
  },
  {
    slug: "research-assistant",
    title: "Research Assistant",
    incomeRange: "$12–$25/hour",
    skillLevel: "Medium–High",
    timeCommitment: "5–20 hrs/week",
    locationType: "In-person",
    description: "Assist professors with lab work, coding, data analysis, or documentation."
  }
];

app.get("/", (req, res) => {
  const hustleCards = hustles.map(hustle => `
    <article>
      <h2>${hustle.title}</h2>
      <p><strong>Income:</strong> ${hustle.incomeRange}</p>
      <p><strong>Skill Level:</strong> ${hustle.skillLevel}</p>
      <a href="/hustles/${hustle.slug}">View Details</a>
    </article>
  `).join("");

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>College Side Hustles</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@latest/css/pico.min.css">
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <main class="container">
          <h1>College Side Hustles</h1>
          ${hustleCards}
        </main>
      </body>
    </html>
  `);
});

app.get("/hustles/:slug", (req, res) => {
  const hustle = hustles.find(h => h.slug === req.params.slug);

  if (!hustle) {
    return res.status(404).send(`
      <h1>404 - Hustle Not Found</h1>
      <a href="/">Go Back</a>
    `);
  }

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${hustle.title}</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@latest/css/pico.min.css">
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <main class="container">
          <a href="/">← Back to List</a>
          <h1>${hustle.title}</h1>
          <p><strong>Income Range:</strong> ${hustle.incomeRange}</p>
          <p><strong>Skill Level:</strong> ${hustle.skillLevel}</p>
          <p><strong>Time Commitment:</strong> ${hustle.timeCommitment}</p>
          <p><strong>Location:</strong> ${hustle.locationType}</p>
          <p>${hustle.description}</p>
        </main>
      </body>
    </html>
  `);
});

app.use((req, res) => {
   res.status(404).send("Page not found");
});