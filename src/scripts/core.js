async function generateSubmissions() {
  const response = await fetch('../../data/submissions.json');
  const submissionsData = await response.json();

  const submissionsSection = document.querySelector('.w-full.flex.flex-col.items-center.gap-2.py-8');

  submissionsSection.innerHTML = '';

  submissionsData.submissions.forEach(submission => {
    const submissionLink = document.createElement('a');
    submissionLink.href = submission.url;
    submissionLink.target = '_blank';
    submissionLink.className = 'max-w-xl w-full p-4 border border-dashed border-slate-400';

    const submissionName = document.createElement('span');
    submissionName.className = 'text-base text-slate-600';
    submissionName.textContent = submission.name;

    submissionLink.appendChild(submissionName);

    submissionsSection.appendChild(submissionLink);
  });
}

generateSubmissions();