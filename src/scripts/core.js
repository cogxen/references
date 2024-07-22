async function loadSubmissions() {
  const response = await fetch("/data/submissions.json")
  const data = await response.json()

  const mainSection = document.querySelector("main")

  data.submissions.forEach((submission) => {
    const section = document.createElement("section")
    section.className = "w-full max-w-3xl mx-auto flex flex-col items-center gap-2 py-4"

    const span = document.createElement("span")
    span.className = "text-lg w-full text-center"
    span.textContent = submission.section
    section.appendChild(span)

    const divContainer = document.createElement("div")
    divContainer.className = "w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"

    submission.items.forEach((item) => {
      const anchor = document.createElement("a")
      anchor.href = item.url
      anchor.target = "_blank"
      anchor.className = `max-w-xl w-full px-4 py-2 text-base font-bold text-slate-600 leading-4 ${
        item.isLecture
          ? "bg-slate-100 hover:bg-slate-300"
          : item.isProject
          ? "bg-amber-100 hover:bg-amber-300"
          : "bg-emerald-100 hover:bg-emerald-300"
      } flex flex-col justify-between`

      const itemDiv = document.createElement("div")
      itemDiv.textContent = item.name

      anchor.appendChild(itemDiv)
      divContainer.appendChild(anchor)
    })

    section.appendChild(divContainer)
    mainSection.appendChild(section)
  })
}

document.addEventListener("DOMContentLoaded", loadSubmissions)
